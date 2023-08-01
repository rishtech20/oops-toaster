import Item from "./item";

export default class Bagel extends Item {
    toastFactor: number;
    constructor() {
        super();
        this.toastFactor = 1.2;
    }
}