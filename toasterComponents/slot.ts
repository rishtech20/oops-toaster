import { ISlot } from '../@types/toaster.interface';
import Item from '../items/item';

export default class Slot implements ISlot {
    item: Item = null;

    constructor() {}

    startToast(): void {}

    stopToast(): void {}

    setItem(item: Item): void {
        this.item = item;
    }
}