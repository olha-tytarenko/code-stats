import { GITHUB_BASE_URL } from '@/config/api';

import { mapGithubListResponseToResponse } from '@/features/users/mappers/map-github-user-list-response';
import { UserListResponse } from '@/features/users/types';

export const getUserList = (searchQuery: string): Promise<UserListResponse> => {
  return fetch(`${GITHUB_BASE_URL}/search/users?${searchQuery}`)
    .then((res) => res.json())
    .then((data) => mapGithubListResponseToResponse(data));
};
