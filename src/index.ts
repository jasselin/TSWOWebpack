
import moduleA from "./modules/moduleA.js"; // try remove .js
import moduleB from "./modules/moduleB.js";

document.getElementById("btnModuleA")?.addEventListener("click", () => moduleA());
document.getElementById("btnModuleB")?.addEventListener("click", () => moduleB());

var loadModuleC = () => {
    System.import("./dist/modules/moduleC.js")
        .then(module => {
            module.default();
        })
        .catch(console.error.bind(console));
};

document.getElementById("btnModuleC")?.addEventListener("click", loadModuleC);