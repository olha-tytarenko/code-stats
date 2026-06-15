import { Search, ChartColumnIncreasing, TrendingUpIcon } from 'lucide-react';

export const HOW_TO_USE_STEPS = [
  {
    icon: Search,
    description: 'Enter a GitHub username or organization to view their activity.',
    classNames: 'text-(--accent) bg-(--accent-soft)',
  },
  {
    icon: ChartColumnIncreasing,
    description: 'Explore repository metrics and contribution patterns.',
    classNames: 'text-(--info) bg-(--info-soft)',
  },
  {
    icon: TrendingUpIcon,
    description: 'Analyze commit history and pull request data.',
    classNames: 'text-(--success) bg-(--success-soft)',
  },
];
