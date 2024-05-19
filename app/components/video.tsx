import type { MediaHTMLAttributes } from 'react';

type VideoProps = MediaHTMLAttributes<HTMLVideoElement> & {
  sources: { src: string; type: string }[];
  width?: number | string;
};

function Video({
  sources,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  width = '100%',
}: VideoProps) {
  return (
    <video autoPlay={autoPlay} controls={controls} loop={loop} muted={muted} width={width}>
      {sources.map(({ src, type }) => (
        <source key={src} src={src} type={type} />
      ))}
    </video>
  );
}

export { Video };
