import { getUserDetails } from './get-user-details';

export const getUsersDetails = (loginList: string[]) => {
  return Promise.all(
    loginList.map(async (login) => {
      return getUserDetails(login);
    }),
  );
};
