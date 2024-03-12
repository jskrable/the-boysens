interface VideoProps {
  sources: { src: string; type: string }[];
  width?: number | string;
}

function Video({ sources, width = '100%' }: VideoProps) {
  return (
    // TODO add these as input props
    <video width={width} autoPlay muted loop controls>
      {sources.map(({ src, type }) => (
        <source key={src} src={src} type={type} />
      ))}
    </video>
  );
}

export { Video };
