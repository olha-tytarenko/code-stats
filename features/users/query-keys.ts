export const userKeys = {
  all: ['users'] as const,
  list: (listName: string) => ['users', 'list', listName] as const,
  detail: (userName: string) => ['users', userName] as const,
  detailsList: (listName: string) => ['users', 'list', 'details', listName] as const,
};
