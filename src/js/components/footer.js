import { footerData } from "./data/footer-data";

const footer = document.querySelector("footer");
const footerElem = {
  links: footer.querySelector(".box1").querySelector("ul"),
  brands: footer.querySelector(".box2").querySelector("ul"),
};

let footerBox1Html = "";
let footerBox2Html = "";

footerData.box1.links.forEach((link) => {
  const { name, path } = link;

  footerBox1Html += `
    <li><a href="${path}">${name}</a></li>
  `;
});

footerData.box2.brands.forEach((brand) => {
  const { svg, path } = brand;

  footerBox2Html += `
  <li>
    <a href="${path}">${svg}</a>
  </li>
  `;
});

footerElem.links.innerHTML = footerBox1Html;
footerElem.brands.innerHTML = footerBox2Html;
