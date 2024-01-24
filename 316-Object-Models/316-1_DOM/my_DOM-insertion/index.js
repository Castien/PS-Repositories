import "./styles.css";

const ol = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ol"));
const ul = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ul"));

for (let i = 0; i < 3; i++) {
  ol.appendChild(document.createElement("li"));
  ul.appendChild(document.createElement("li"));
}