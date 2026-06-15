import { GITHUB_BASE_URL } from '@/config/api';

import { mapGithubUserDtoToUser } from '@/features/users/mappers/map-github-user';
import { GithubUserDetailsDto, User } from '@/features/users/types';

export const getUserDetails = (userLogin: string): Promise<User> => {
  return fetch(`${GITHUB_BASE_URL}/users/${userLogin}`)
    .then((res: Response): Promise<GithubUserDetailsDto> => res.json())
    .then((data: GithubUserDetailsDto) => mapGithubUserDtoToUser(data));
};
