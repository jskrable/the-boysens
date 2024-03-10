interface VideoProps {
  sources: { src: string; type: string }[];
  width?: number | string;
}

function Video({ sources, width = '100%' }: VideoProps) {
  return (
    <video width={width} autoPlay muted controls>
      {sources.map(({ src, type }) => (
        <source key={src} src={src} type={type} />
      ))}
    </video>
  );
}

export { Video };
