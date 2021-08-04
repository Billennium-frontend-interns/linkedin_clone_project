import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { db } from '../../firebase';
import { UserDetails } from '../../components/UserDetails/UserDetails';
import { UserPageFieldForm } from '../../components/UserPageFieldForm/UserPageFieldForm';
import { UserPageField } from '../../components/UserPageField/UserPageField';
import { AuthContext } from '../../context/AuthProvider';
import { useIsUserFollowed } from '../../actions/useIsUserFollowed';
import { Header } from '../../components/Header/Header';
import { useGetUserProfileFields } from '../../actions/useGetUserProfileFields';
import { WithLoader } from '../../components/WithLoader/WithLoader';
import './UserPage.scss';

type UserPageParams = {
  ownerUid: string;
};

export const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<firebase.default.firestore.DocumentData>();
  const [isAddField, setIsAddField] = useState(true);
  const { ownerUid } = useParams<UserPageParams>();
  const loggedInUser = useContext(AuthContext);
  const isUserFollowed = useIsUserFollowed(loggedInUser?.uid, ownerUid);
  const isUserFollowing = useIsUserFollowed(ownerUid, loggedInUser?.uid);
  const { data, isLoading, isError } = useGetUserProfileFields(ownerUid);

  useEffect(() => {
    db.collection('users')
      .doc(ownerUid)
      .get()
      .then(doc => setUserData(doc.data()))
      // eslint-disable-next-line
      .catch(error => console.error(error));
  }, [ownerUid]);

  return (
    <>
      <Header />
      <section className="userPage">
        {userData ? (
          <UserDetails
            bio={userData?.bio}
            ownerUid={ownerUid}
            displayName={userData?.displayName}
            avatar={userData?.avatar}
            isMyUserDetails={loggedInUser?.uid === ownerUid}
            isUserFollowedBy={isUserFollowed}
            isUserFollowing={isUserFollowing}
          />
        ) : null}
        <WithLoader isLoading={isLoading}>
          <>
            {(data || []).map((el, id) => (
              // eslint-disable-next-line
              <UserPageField key={id} data={el} isLoading={isLoading} isError={isError} />
            ))}
            {!isAddField && loggedInUser?.uid === ownerUid && <UserPageFieldForm />}
            {loggedInUser?.uid === ownerUid && (
              <span className="userPage__ctaButton">
                <Button
                  type="button"
                  onClick={() => setIsAddField(!isAddField)}
                  variant="outlined"
                  color={!isAddField ? 'secondary' : 'primary'}
                >
                  {!isAddField ? 'Cancel' : 'Add Field'}
                </Button>
              </span>
            )}
          </>
        </WithLoader>
      </section>
    </>
  );
};
