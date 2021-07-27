export interface StateAble<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

export interface PostData {
  ownerUid: string;
  displayName: string;
  content: string;
}
