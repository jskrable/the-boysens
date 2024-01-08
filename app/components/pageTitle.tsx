import { Typography } from "./typography";

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="pb-6">
      <Typography variant="h1">{title}</Typography>
    </div>
  )
}

export { PageTitle };