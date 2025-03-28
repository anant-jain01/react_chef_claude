export default function Header() {
  function lala(){
    console.log("hovered")
  }
  return (
    <header>
      <img src="../images/chef-claude-icon.png" alt="" />
      <h1 onMouseOver={lala}>Chef Claude</h1>
    </header>
  );
}
