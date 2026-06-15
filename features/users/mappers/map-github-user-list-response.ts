import { GithubUserListResponseDto, UserListResponse } from '@/features/users/types';

import { mapGithubUserDtoToUser } from '@/features/users/mappers/map-github-user';

export const mapGithubListResponseToResponse = (
  githubUserListResponse: GithubUserListResponseDto,
): UserListResponse => {
  return {
    isIncomplete: githubUserListResponse.incomplete_results,
    totalCount: githubUserListResponse.total_count,
    items: githubUserListResponse.items.map(mapGithubUserDtoToUser),
  };
};
