export type fields = {
  title: string;
  content: contentField;
};

export interface UserPageFieldInterface<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

export type contentField = {
  [name: string]: string;
};
