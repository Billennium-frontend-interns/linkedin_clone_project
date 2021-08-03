export interface UserFollows {
  followed: string[];
  followers: string[];
}

export interface User {
  displayName: string;
  id: string;
  avatar: string;
}
