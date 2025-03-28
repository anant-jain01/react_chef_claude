export default function Main() {
  const ingredients=["panner",'oregan','tomato'];
  const perform=ingredients.map((data)=>{
    return <li key="used">{data}</li>
  });
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{perform}</ul>
    </main>
  );
}
