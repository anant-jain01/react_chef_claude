import React from "react";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";
import avatar from "./images/user.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  let starIcon = contact.isFavorite ? starFilled : starEmpty;
  function toggleFavorite() {
    setContact(prev=>{
      return{
        ...prev,isFavorite: !prev.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite?"remove":"add"}
            className="favorite-button"
          >
            <img src={starIcon} alt={contact.isFavorite?"filled star":"empty star"} className="favorite" />
          </button>
          <h2 className="name">
            {contact.firstName}
            {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
