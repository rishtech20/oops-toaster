import { IItem } from "../@types/toaster.interface";

export default class Item implements IItem {
    private static toastFactor: number = 1;
    toastLevel: string = '';

    constructor() {
    }

    startToast() { }
    stopToast() { }
    setItem() { }
}