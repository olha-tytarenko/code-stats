'use client';

import React, { useState, FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';

import { User, Loader } from 'lucide-react';
import { Command, CommandList, CommandEmpty, CommandItem } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverAnchor, PopoverContent } from '@/components/ui/popover';
import { userKeys } from '@/features/users/query-keys';
import { GithubUserDto } from '@/features/users/types';

export const UserAutocomplete: FC = () => {
  const [searchString, setSearchString] = useState('');
  const [debouncedSearchString, setDebouncedSearchString] = useState('');
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  const { data, isFetching, error } = useQuery({
    queryKey: [...userKeys.all, { searchString: debouncedSearchString }],
    queryFn: ({ queryKey }: { queryKey: [string, { searchString: string }] }) => {
      const [_key, { searchString }] = queryKey;

      if (!searchString) return;

      return fetch(`https://api.github.com/search/users?q=${searchString}`).then((res) =>
        res.json(),
      );
    },
    enabled: !!debouncedSearchString,
  });

  const handleSearchStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = event?.target?.value;
    const newTimeoutId = setTimeout(() => {
      setDebouncedSearchString(searchString);
    }, 400);

    setSearchString(searchString);
    setTimeoutId(newTimeoutId);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (!isListOpen) {
      setIsListOpen(true);
    }

    if (!searchString) {
      setIsListOpen(false);
    }
  };

  const handleInputFocus = () => {
    if (data?.items) {
      setIsListOpen(true);
    }
  };

  return (
    <Popover open={isListOpen} onOpenChange={setIsListOpen}>
      <PopoverAnchor asChild>
        <Input
          placeholder='Type to search for a user or organization'
          onChange={handleSearchStringChange}
          onFocus={handleInputFocus}
          value={searchString}
          className={clsx('bg-white ring-0! h-12 p-6 text-lg! max-w-2/4 min-w-100', {
            'border-accent': isListOpen,
          })}
        />
      </PopoverAnchor>

      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className='w-(--radix-popover-trigger-width) ring-accent'
      >
        <Command shouldFilter={false} className='size-auto'>
          <CommandList className='rounded-b-sm'>
            {(isFetching || (searchString && !debouncedSearchString)) && (
              <CommandItem className='flex justify-center items-center'>
                <Loader className='animate-spin text-primary' />
              </CommandItem>
            )}
            {data?.items?.length > 0 &&
              data.items.map((item: GithubUserDto) => {
                return (
                  <CommandItem
                    key={item.login}
                    className='hover:bg-(--accent-muted) hover:cursor-pointer [&_.lucide-check]:hidden'
                  >
                    <User />
                    <span>{item.login}</span>
                  </CommandItem>
                );
              })}
            {data?.items?.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
            {error && <CommandItem>Something went wrong.</CommandItem>}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
