import { PageTitle } from '@/app/components/pageTitle';
import { ImageInfo } from './config';

export default function Page() {
  return (
    <div>
      <PageTitle title="Photos" />
      <div className="flex flex-col gap-6">
        {ImageInfo.map(({ caption, path }) => (
          <div className="basis-1/2">
            <img src={path} alt={caption} />
          </div>
        ))}
      </div>
    </div>
  );
}
