import "../scss/main.scss";
import "animate.css";
import AOS from "aos";
import { animate } from "./components/hero";

const loading = document.querySelector(".loading-container");
const body = document.querySelector("body");

Promise.all([
  import("./components/main-sec2"),
  import("./components/hero"),
  import("./components/footer"),
  import("aos/dist/aos.css"),
]).then(() => {
  loading.style.display = "none";
  return animate(body, "fadeIn", 1000);
});

AOS.init();
