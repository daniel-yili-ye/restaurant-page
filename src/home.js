import Restaurant from "./rest.jpg";

function Home() {
  const div = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.innerHTML = "RESTAURANT";
  div.append(h1);

  const p = document.createElement("p");
  p.innerHTML = "This is a great restaurant. I love this place.";
  div.append(p);

  const restaurant = new Image();
  restaurant.src = Restaurant;
  div.appendChild(restaurant);

  return div;
}

export default Home;
