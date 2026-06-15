import { Fragment } from 'react';
import { BookOpenCheck, ArrowRight, ShieldCheck } from 'lucide-react';

import { UserList, UserAutocomplete } from '@/features/users/components';
import { HOW_TO_USE_STEPS } from '@/app/get-started-config';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='bg-zinc-50 font-sans dark:bg-black'>
      <main>
        <div className='flex flex-col justify-center items-center gap-6 py-32 px-18 bg-linear-65 from-(--accent-soft) via-white to-(--accent-muted)  dark:bg-black'>
          <h2 className='text-5xl'>GitHub Engineering Insights</h2>
          <p className='text-muted-foreground'>
            Explore developer activity, repository metrics, and contribution patterns - all in one
            place.
          </p>
          <UserAutocomplete />
          <div className='flex items-start'>
            <div className='rounded-full bg-(--accent-muted) p-2'>
              <BookOpenCheck className='text-primary size-4' />
            </div>
            <p className='text-muted-foreground text-center'>
              Enter a GitHub username or organization to analize repositories, commits, pull
              requests, and contributor activity.
            </p>
          </div>
        </div>

        <div className='p-10'>
          <h3 className='text-3xl text-center p-8'>How it works</h3>
          <ul className='flex items-baseline py-10 gap-2'>
            {HOW_TO_USE_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <Fragment key={index}>
                  <li key={index} className='flex flex-col items-center justify-center gap-2'>
                    <span className={`${step.classNames} p-3 rounded-lg`}>
                      <Icon className='size-8' />
                    </span>
                    <span className='text-center text-sm'>{step.description}</span>
                  </li>
                  {!(index === HOW_TO_USE_STEPS.length - 1) && (
                    <li className='flex items-center min-w-24'>
                      <span className='text-muted'>-----</span>
                      <ArrowRight className='size-4 text-muted-foreground' />
                      <span className='text-muted'>-----</span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ul>
          <h3 className='text-3xl text-center p-8'>Try with</h3>
          <p className='text-muted-foreground text-center pb-8'>
            Explore insights from some of the world&#39;s most active developers and organization
          </p>
          <div>
            <UserList />
          </div>
        </div>
        <div className='bg-(--accent-soft) p-4 m-8 flex items-center gap-6 rounded-lg'>
          <ShieldCheck className='text-primary' />
          <div>
            <h5>Data you can trust</h5>
            <p className='text-muted-foreground text-xs'>
              All data is fetched from the official GitHub API.
            </p>
            <p className='text-muted-foreground text-xs'>We don&#39;t store your data</p>
          </div>
          <Button variant='outline' className='ml-auto'>
            Lear more about GitHub API -&gt;
          </Button>
        </div>
      </main>
    </div>
  );
}
