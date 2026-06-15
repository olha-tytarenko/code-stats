import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getUserList } from '@/features/users/api';
import { userKeys } from '@/features/users/query-keys';
import { UserListResponse } from '@/features/users/types';

export const useUserList = ({
  listName,
  searchQuery,
}: {
  listName: string;
  searchQuery: string;
}): UseQueryResult<UserListResponse, Error> => {
  return useQuery({
    queryKey: userKeys.list(listName),
    queryFn: () => getUserList(searchQuery),
  });
};
