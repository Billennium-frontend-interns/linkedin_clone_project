import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { db } from '../../firebase';
import { UserDetails } from '../../components/UserDetails/UserDetails';
import { UserPageFieldForm } from '../../components/UserPageFieldForm/UserPageFieldForm';
import { UserPageField } from '../../components/UserPageField/UserPageField';
import { AuthContext } from '../../context/AuthProvider';
import { useIsUserFollowed } from '../../actions/useIsUserFollowed';
import { Header } from '../../components/Header/Header';
import { WithLoader } from '../../components/WithLoader/WithLoader';
import { UserPageFieldInterface, fields } from '../../shared/interfaces/ProfileFieldInterfaces';
import { MyPosts } from '../../components/MyPosts/MyPosts';
import { useDarkMode } from '../../context/DarkModeProvider';
import { ShowFollowers } from '../../components/ShowFollowers/ShowFollowers';
import './UserPage.scss';

type UserPageParams = {
  ownerUid: string;
};

export const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<firebase.default.firestore.DocumentData>();
  const [isAddField, setIsAddField] = useState(true);
  const { isDarkMode } = useDarkMode();
  const { ownerUid } = useParams<UserPageParams>();
  const loggedInUser = useContext(AuthContext);
  const isUserFollowed = useIsUserFollowed(loggedInUser?.uid, ownerUid);
  const isUserFollowing = useIsUserFollowed(ownerUid, loggedInUser?.uid);
  const [fieldEntries, setFieldEntries] = useState<UserPageFieldInterface<fields[]>>({
    data: [],
    isLoading: true,
    isError: true
  });
  const [isUserPostsShowed, setIsUserPostsShowed] = useState(false);
  const [showFollowed, setShowFollowed] = useState(false);
  const isOwner = ownerUid === loggedInUser?.uid;

  useEffect(() => {
    db.collection('users')
      .doc(ownerUid)
      .get()
      .then(doc => {
        setUserData(doc.data());
        setFieldEntries({ data: doc.data()?.profileFields, isLoading: false, isError: false });
      })
      // eslint-disable-next-line
      .catch(error => console.error(error));
  }, [ownerUid, isAddField, userData]);

  return (
    <>
      <Header />
      <section className={classNames('userPage', { 'userPage--dark': isDarkMode })}>
        {userData ? (
          <UserDetails
            headline={userData?.headline}
            ownerUid={ownerUid}
            displayName={userData?.displayName}
            avatar={userData?.avatar}
            isMyUserDetails={isOwner}
            isUserFollowedBy={isUserFollowed}
            isUserFollowing={isUserFollowing}
          />
        ) : null}

        <div className="userPage__button-wrapper">
          {!isUserPostsShowed && isOwner && (
            <Button
              type="button"
              variant="contained"
              color={showFollowed ? 'secondary' : 'primary'}
              className="userPage__showButton"
              onClick={() => {
                setShowFollowed(!showFollowed);
              }}
            >
              {showFollowed ? 'close followers' : 'followers'}
            </Button>
          )}

          {!showFollowed && (
            <Button
              type="button"
              variant="contained"
              color={isUserPostsShowed ? 'secondary' : 'primary'}
              className="userPage__showButton"
              onClick={() => {
                setIsUserPostsShowed(!isUserPostsShowed);
              }}
            >
              {isUserPostsShowed ? 'Close posts' : `${isOwner ? 'Show my posts' : 'Show user posts'}`}
            </Button>
          )}
        </div>
        {isOwner && showFollowed && <ShowFollowers />}
        {isUserPostsShowed ? (
          <MyPosts userUid={isOwner ? (loggedInUser?.uid as string) : ownerUid} />
        ) : (
          <WithLoader isLoading={fieldEntries.isLoading}>
            <>
              {(fieldEntries.data || []).map((fieldEntry: fields, id: number) => (
                <UserPageField
                  // eslint-disable-next-line
                  key={id}
                  data={fieldEntry}
                  isLoading={fieldEntries.isLoading}
                  isError={fieldEntries.isError}
                  isOwner={isOwner}
                />
              ))}
              {!isAddField && isOwner && <UserPageFieldForm data={isAddField} setter={setIsAddField} />}
              {isOwner && !showFollowed && (
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
        )}
      </section>
    </>
  );
};
