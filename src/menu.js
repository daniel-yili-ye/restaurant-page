const jsonData = require("./menu.json");

function Menu() {
  const div = document.createElement("div");
  div.className = "display";

  const h1 = document.createElement("h1");
  h1.textContent = "MENU";
  div.appendChild(h1);

  console.log(jsonData);
  //   div.appendChild(createMenuItem(name, description))

  return div;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

export default Menu;
