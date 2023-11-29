import "./style.css";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

function startProject() {
  const content = document.getElementById("content");

  const homeTab = document.createElement("button");
  const menuTab = document.createElement("button");
  const contactTab = document.createElement("button");
  homeTab.textContent = "home";
  menuTab.textContent = "menu";
  contactTab.textContent = "contact";
  homeTab.onclick = showHome;
  menuTab.onclick = showMenu;
  contactTab.onclick = showContact;

  content.append(homeTab);
  content.append(menuTab);
  content.append(contactTab);

  const h1 = document.createElement("h1");
  h1.textContent = "RESTAURANT";
  content.appendChild(h1);
  showHome();
}

function clearPage() {
  const display = document.querySelector(".display");
  display.remove();
}

function showHome() {
  try {
    clearPage();
  } catch {}
  const content = document.getElementById("content");
  const home = Home();
  content.append(home);
}

function showMenu() {
  clearPage();
  const content = document.getElementById("content");
  const menu = Menu();
  content.append(menu);
}

function showContact() {
  clearPage();
  const content = document.getElementById("content");
  const contact = Contact();
  content.append(contact);
}

startProject();
