import { Memory } from '@/app/components/memory';
import { PageTitle } from '@/app/components/pageTitle';
import { prisma } from '@/db/client';
import { Button } from '../components/button';

export default async function Page() {
  const data = await prisma.memory.findMany({ orderBy: { createdAt: 'desc' } });

  // async function createMemory(formData: FormData) {
  //   'use server'

  //   const rawFormData = {
  //     customerId: formData.get('customerId'),
  //     amount: formData.get('amount'),
  //     status: formData.get('status'),
  //   }

  //   // mutate data
  //   // revalidate cache
  // }
  return (
    <div>
      <PageTitle title="Memories" />
      <div className="pt-2 pb-4 text-center">
        <Button>Add your own</Button>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((memory) => (
          <Memory key={memory.id} memory={memory} />
        ))}
      </div>
      <div className="py-8 text-center">
        <Button<ScrollToOptions> action={{ method: 'scrollTo', args: { top: 0, behavior: 'smooth' } }}>
          Back to Top
        </Button>
      </div>
    </div>
  );
}
