export interface StateAble<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

export interface PostData {
  id: string;
  ownerUid: string;
  displayName: string;
  content: string;
}
