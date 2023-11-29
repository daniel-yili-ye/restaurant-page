function Contact() {
  const div = document.createElement("div");
  div.className = "display";

  const p = document.createElement("p");
  p.textContent = "restaurant@restaurant.com";
  div.appendChild(p);

  return div;
}

export default Contact;
