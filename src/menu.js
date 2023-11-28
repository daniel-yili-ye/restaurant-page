import rest from "./rest.jpg";

function Menu() {
  const contentDiv = document.getElementById("content");

  const h1 = document.createElement("h1");
  h1.innerHTML = "RESTAURANT";

  contentDiv.append(h1);

  const restaurant = new Image();
  restaurant.src = rest;

  contentDiv.appendChild(myIcon);
}

export default Menu;
