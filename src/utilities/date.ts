export const generateDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
