const jsonData = require("./menu.json");

function Menu() {
  const div = document.createElement("div");
  div.className = "display";

  const h1 = document.createElement("h1");
  h1.textContent = "MENU";
  div.appendChild(h1);

  //   div.appendChild(createMenuItem(name, description))

  for (const key in jsonData) {
    const subDiv = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = key;
    subDiv.appendChild(h2);

    for (let i = 0; i < jsonData[key].length; i++) {
      const h3 = document.createElement("h3");
      h3.textContent = jsonData[key][i]["name"];
      subDiv.appendChild(h3);

      if (jsonData[key][i].hasOwnProperty("description")) {
        const p = document.createElement("p");
        p.textContent = jsonData[key][i]["description"];
        subDiv.appendChild(p);
      } else {
        const ul = document.createElement("ul");

        jsonData[key][i]["options"].forEach((option) => {
          const li = document.createElement("li");
          li.textContent = option;
          ul.appendChild(li);
        });
        subDiv.appendChild(ul);
      }
    }

    div.appendChild(subDiv);
  }

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
