import Image from "./Image";

export default function Avatar({ clickText , src, alt }) {
  function onClickAvatar() {
    return () => console.log(clickText);
  }
  return (
    <button
          type="button"
          onClick={onClickAvatar(clickText)}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={src} alt={alt} />
        </button>
  );
}
