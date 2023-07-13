const main = document.querySelector("main");
const sec2Ul = main.querySelector("ul");

import { sec2Data } from "./main-sec2data";
let sec2Html = "";

sec2Data.forEach((data) => {
  const { title, url } = data;

  sec2Html += `
  <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
    <picture>
      <img src="${url}" alt="${title}" />
    </picture>
    <div class="caption">${title.toUpperCase()}</div>
  </li>
  `;
});

sec2Ul.innerHTML = sec2Html;
