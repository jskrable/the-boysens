interface PDFProps {
  data: string;
  title: string
}

// TODO styling, this is bad
export default function PDF({ data, title }: PDFProps) {
  return (
    <object data={data} title={title} type='application/pdf'/>
  );
}
