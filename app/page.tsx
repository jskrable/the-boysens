import { Typography } from '@/app/components/typography';
import { Memory } from './components/memory';
import { useRandomMemory } from './hooks/useRandomMemory';
import { RightsViolation } from './media/videos/RightsViolation';
import { SplashedIt } from './media/videos/SplashedIt';

export default async function Home() {
  const { getRandomMemory } = useRandomMemory();
  const randomMemory = await getRandomMemory();
  const random = Math.random();
  const rights = random <= 0.1;
  const splashed = random >= 0.9;

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">They Did Everything Together</Typography>
      <Typography variant="h2">
        This is a memorial page for Jim and Sam Skrable. They left this world as they entered it, together.
      </Typography>

      {/* TODO add link "Learn about your data rights" or something like that*/}
      <RightsViolation initializeOpen={rights} />
      <SplashedIt initializeOpen={splashed} />

      {/* <Link href='https://www.facebook.com/109Darlington/videos/355830855737887/' target='_blank' rel='noreferrer'>
        Recording of the funeral service
      </Link> */}
      {randomMemory && <Memory memory={randomMemory} />}
    </div>
  );
}
