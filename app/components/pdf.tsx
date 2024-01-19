interface PDFProps {
  data: string;
  title: string;
}

// TODO styling, this is bad
function PDF({ data, title }: PDFProps) {
  return <object data={data} title={title} type="application/pdf" width="800px" height="800px" />;
}

export { PDF };
