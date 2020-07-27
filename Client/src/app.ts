import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

document.getElementById("btnModuleA")?.addEventListener("click", () => moduleA());
document.getElementById("btnModuleB")?.addEventListener("click", () => moduleB());

var loadModuleC = () => {
    System.import("./dist/modules/moduleC")
        .then(module => {
            module.default();
        })
        .catch(console.error.bind(console));
};

document.getElementById("btnModuleC")?.addEventListener("click", loadModuleC);