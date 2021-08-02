import { generateDate } from './date';

it('Method should get current date in format "YYYY-MM-DD hh:mm', () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const currentDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  const testDate = generateDate().substr(0, 16);

  expect(testDate).toBe(currentDate);
});
