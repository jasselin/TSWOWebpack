import { fn2 } from "./../common";
import { otherfn } from "./../other"

export default () => {
    console.log("Module C!");
    fn2();
    otherfn();
};