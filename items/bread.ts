import Item from "./item";

export default class Bread extends Item {
    toastFactor: number;
    constructor() {
        super();
        this.toastFactor = 0.5;
    }
}