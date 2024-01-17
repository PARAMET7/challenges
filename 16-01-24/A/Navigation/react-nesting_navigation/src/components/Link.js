
export default function Link({href,children}) {
  return (<a href={href} className="navigation__link">
    {children}</a>);
}
