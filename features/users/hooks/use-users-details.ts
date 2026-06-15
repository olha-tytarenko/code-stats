import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useUserList } from '@/features/users/hooks/use-user-list';
import { getUsersDetails } from '@/features/users/api/get-users-details';
import { userKeys } from '@/features/users/query-keys';
import { User } from '@/features/users/types';

export const useUsersDetails = ({
  listName,
  searchQuery,
}: {
  listName: string;
  searchQuery: string;
}): UseQueryResult<User[], Error> => {
  const { data, isFetching, error } = useUserList({
    listName,
    searchQuery,
  });

  return useQuery({
    queryKey: userKeys.detailsList(listName),
    queryFn: () => getUsersDetails(data?.items.map((user) => user.login) || []),
    enabled: !!data?.items?.length && !error && !isFetching,
  });
};
