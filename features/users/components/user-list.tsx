'use client';

import { FC } from 'react';

import { UserCard } from './user-card';
import { useUsersDetails } from '@/features/users/hooks';

export const UserList: FC = () => {
  const { data, isFetching, error } = useUsersDetails({
    listName: 'users-top4',
    searchQuery: 'q=followers:>10000&sort=followers&order=desc&per_page=4',
  });

  console.log(data);

  return (
    <div className='flex gap-4 justify-between'>
      {data?.length &&
        data.map((user) => {
          return <UserCard key={user.login} {...user} />;
        })}
    </div>
  );
};
