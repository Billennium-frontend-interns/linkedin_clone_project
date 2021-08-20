export type FollowType = {
  uid: string;
  seen: boolean;
  timestamp: firebase.default.firestore.Timestamp;
};

export interface User {
  displayName: string;
  id: string;
  avatar: string;
  headline: string;
}
