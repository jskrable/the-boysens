import { Link } from '@/app/components/link';
import { PageTitle } from '../components/pageTitle';

export default async function Page() {
  return (
    <div>
      <PageTitle title="Resources" />
      <div className="flex flex-col gap-6">
        <Link
          href="https://harmreduction.org/resource-center/harm-reduction-near-you/"
          target="_blank"
          rel="noreferrer"
        >
          Harm Reduction Near You
        </Link>
        {/* TODO how to use test strips */}
        <Link href="https://dancesafe.org/fentanyl/" target="_blank" rel="noreferrer">
          Get Fentanyl Test Strips
        </Link>
        <Link
          href="https://www.pharmacy.ohio.gov/documents/pubs/naloxone/howtotest/how%20to%20test%20your%20drugs%20-%20using%20fentanyl%20test%20strips%20(english).pdf"
          target="_blank"
          rel="noreferrer"
        >
          How to Test Your Drugs
        </Link>
        {/* TODO loading icon while iframe loads */}
        {/* <Suspense fallback={<Loading />}> */}
        {/* <iframe
          title="Naloxone Map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1R4YEVrWzXD7zq2ZpyWVV7PEWYumijq6L"
          width="600"
          height="450"
        /> */}
        {/* </Suspense> */}
      </div>
    </div>
  );
}
