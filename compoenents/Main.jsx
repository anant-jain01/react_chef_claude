export default function Main() {
  const ingredients = ["panner", "oregan", "tomato"];
  
  
  const perform = ingredients.map((data) => {
    return <li key="used">{data}</li>;
  });
  
  
  function submit(event) {
    event.preventDefault();
    console.log("submitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
  }
  
  
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
