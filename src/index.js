import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

const content = document.getElementById("content");

const homeTab = document.createElement("a");
const menuTab = document.createElement("a");
const contactTab = document.createElement("a");

const home = Home();
content.append(home);
