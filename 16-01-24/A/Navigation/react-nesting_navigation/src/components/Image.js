
export default function Image({href,src,alt}) {
  return (
    <a href={href}>
       <img src={src} className="round-image" alt={alt}></img>;
    </a>
  );
}
