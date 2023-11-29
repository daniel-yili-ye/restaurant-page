import Restaurant from "./rest.jpg";

function Home() {
  const div = document.createElement("div");
  div.className = "display";

  const p = document.createElement("p");
  p.textContent = "This is a great restaurant. I love this place.";
  div.appendChild(p);

  const restaurant = new Image();
  restaurant.src = Restaurant;
  div.appendChild(restaurant);

  return div;
}

export default Home;
