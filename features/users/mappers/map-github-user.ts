import { GithubUserDetailsDto, User } from '@/features/users/types';

export const mapGithubUserDtoToUser = (githubUser: GithubUserDetailsDto): User => {
  return {
    id: githubUser.id,
    avatarUrl: githubUser.avatar_url,
    followersUel: githubUser.followers_url,
    followingUrl: githubUser.following_url,
    login: githubUser.login,
    url: githubUser.url,
    type: githubUser.type,
    starredUrl: githubUser.starred_url,
    subscriptionsUrl: githubUser.subscriptions_url,
    organizationsUrl: githubUser.organizations_url,
    reposUrl: githubUser.repos_url,
    eventsUrl: githubUser.events_url,
    receivedEventsUrl: githubUser.received_events_url,
    name: githubUser.name,
    followers: githubUser.followers,
    following: githubUser.following,
    repositories: githubUser.public_repos,
    bio: githubUser.bio,
  };
};
