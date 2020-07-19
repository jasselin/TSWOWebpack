/// <amd-module name='index'/>

import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

document.getElementById("btnModuleA").addEventListener("click", () => moduleA());
document.getElementById("btnModuleB").addEventListener("click", () => moduleB());