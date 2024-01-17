import Image from "./Image";

export default function Logo({ href, src, alt }) {
  return (
    <a href={href}>
      <Image src={src} alt={alt} />
    </a>
  );
}
