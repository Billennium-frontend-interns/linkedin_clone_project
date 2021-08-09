// export interface UserFollows {
//   followed: string[];
//   followers: string[];
// }

export type FollowType = {
  uid: string;
  seen: boolean;
  timestamp: firebase.default.firestore.Timestamp;
};

export type userHint = {
  displayName: string;
  id: string;
};
export interface User {
  displayName: string;
  id: string;
  avatar: string;
  bio: string;
}