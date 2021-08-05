export interface UserFollows {
  followed: string[];
  followers: string[];
}

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
