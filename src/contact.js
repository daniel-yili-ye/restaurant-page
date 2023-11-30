function Contact() {
  const div = document.createElement("div");
  div.className = "display";

  const a = document.createElement("a");
  a.href = "mailto:restaurant@restaurant.com";
  a.textContent = "Contact Us";
  div.appendChild(a);

  return div;
}

export default Contact;
