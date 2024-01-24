import { Typography } from './typography';

function Footer() {
  const heads = Math.random() >= 0.5;
  return (
    <div className="sticky top-[100vh] flex flex-col items-center pt-10">
      <Typography variant="caption">{heads ? 'Jim & Sam' : 'Sam & Jim'}, together, for eternity</Typography>
      <Typography variant="caption">10-20-2020</Typography>
    </div>
  );
}

export { Footer };
