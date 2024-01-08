import {PDF} from '@/app/components/pdf';
import { Link } from '@/app/components/link';
import { Typography } from '@/app/components/typography';
import { PageTitle } from '@/app/components/pageTitle';
import { ScriptInfo } from './config';

export default function Page() {

  return (
    <div>
      <PageTitle title="Scripts"/>
      <div className='flex flex-col gap-6'>
        {ScriptInfo.map(script => (
          <div className='basis-1/2'>
            <Typography variant='h2'>{script.title}</Typography>
            <p>{script.description}</p>
            <Link href={script.path} target='_blank' rel='noreferrer'>Read It!</Link>
          </div>)
        )}
      </div>
    </div>
  );
}
