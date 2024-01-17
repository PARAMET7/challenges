import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {/* <Tag tag={user.roles[0]} /> */}
        {user.roles &&
          user.roles.map((role) => (
            <Tag
              role={(role)}
              key={role}
              tag={role}
              adminClass={role === "admin" ? "tag--highlight" : ""}
            />
          ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
