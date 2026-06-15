import { FC } from 'react';
import { BookOpen, UsersRound } from 'lucide-react';

import { User } from '@/features/users/types';

type UserCardProps = Partial<User>;

export const UserCard: FC<UserCardProps> = ({
  login,
  avatarUrl,
  name,
  bio,
  repositories,
  followers,
}) => {
  return (
    <div className='border rounded-lg p-4 flex flex-col flex-1'>
      <div className='flex gap-4'>
        <div className='size-24'>
          <img src={avatarUrl} className='rounded-full' />
        </div>
        <div>
          <h4 className='font-bold'>{login}</h4>
          <p className='text-muted-foreground'>{name}</p>
        </div>
      </div>
      <p className='text-muted-foreground py-4'>{bio}</p>
      <div className='flex text-foreground justify-between mt-auto'>
        <span className='text-muted-foreground text-sm flex items-center gap-2'>
          <BookOpen className='h-4 w-4' />
          <span>{repositories} repos</span>
        </span>
        <span className='text-muted-foreground text-sm flex items-center gap-2'>
          <UsersRound className='h-4 w-4' />
          <span>{followers} followers</span>
        </span>
      </div>
    </div>
  );
};
