import { fn2 } from "./../common";
import { otherfn } from "other/otherlib";

export default () => {
    console.log("Module C!");
    fn2();
    otherfn();
};