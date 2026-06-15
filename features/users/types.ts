export type ItemType = 'User' | 'Organization';

export interface GithubUserDto {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: ItemType;
  url: string;
  user_view_type: string;
}

export interface GithubUserDetailsDto extends Omit<GithubUserDto, 'user_view_type'> {
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  type: ItemType;
  login: string;
  url: string;
  avatarUrl: string;
  followersUel: string;
  followingUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  name: string | null;
  followers: number;
  following: number;
  bio: string | null;
  repositories: number;
}

export interface GithubUserListResponseDto {
  incomplete_results: boolean;
  items: GithubUserDetailsDto[];
  total_count: number;
}

export interface UserListResponse {
  isIncomplete: boolean;
  items: User[];
  totalCount: number;
}
