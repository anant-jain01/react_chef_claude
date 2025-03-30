import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";
export default function Star(props) {
  let starIcon = props.isFavorite ? starFilled : starEmpty;

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFavorite}
      aria-label={
        props.isFavorite ? "Remove from favorites" : "Add to favorites"
      }
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFavorite ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
}
