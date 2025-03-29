import { useState } from "react";
export default function Main() {
  const [ingredients, setingredients] = useState([]);

  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setingredients((prev) => [...prev, newIngredient]);
  }

  const perform = ingredients.map((data, index) => {
    return <li key={index}>{data}</li>;
  });

  return (
    <main>
      <form onSubmit={submit} className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{perform}</ul>
    </main>
  );
}
