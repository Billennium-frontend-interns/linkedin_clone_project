export type fields = {
  title: string;
  content: contentField;
};
export interface UserPageFieldProps {
  data: fields;
  isLoading: boolean;
  isError: boolean;
}
export interface UserPageFieldInterface {
  data: fields[];
  isLoading: boolean;
  isError: boolean;
}
export type contentField = {
  [name: string]: string;
};
