
import moduleA from "./modules/moduleA.js"; // try remove .js
import moduleB from "./modules/moduleB.js";
debugger;
document.getElementById("btnModuleA")?.addEventListener("click", () => moduleA());
document.getElementById("btnModuleB")?.addEventListener("click", () => moduleB());