import PDF from "@/components/pdf";

export default function Page() {
  return (
    <div>
      <h1>Scripts</h1>
      <PDF data='/scripts/berries-pilot.pdf' title='Berries Pilot: If Acai Loved Cocaine' />
    </div>
  );
}
