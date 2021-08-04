export interface UserFollows {
  followed: string[];
  followers: string[];
}

export interface UserData {
  displayName: string;
  avatar: string;
  bio: string;
}

export type userHint = {
  displayName: string;
  id: string;
};
