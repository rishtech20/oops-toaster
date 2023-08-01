import { IItem, IToastingConfiguration } from "../@types/toaster.interface";

export default class Item implements IItem {
    protected toastFactor: number = 1;
    toastLevel: string = '';

    constructor() {
    }

    private getAdjustedToastFactor(toastingConfig: IToastingConfiguration) {
        return this.toastFactor * toastingConfig.temperature * toastingConfig.timer;
    }

    getToastLevel(toastingConfig: IToastingConfiguration): string {
        let adjustedToastFactor = this.getAdjustedToastFactor(toastingConfig);

        if (adjustedToastFactor > 10000) {
            return 'burnt';
        } else if (adjustedToastFactor > 8000) {
            return 'crispy';
        } else if (adjustedToastFactor > 6000) {
            return 'golden brown';
        } else if (adjustedToastFactor > 4000) {
            return 'warm';
        } else if (adjustedToastFactor > 2000) {
            return 'lightly toasted';
        } else {
            return 'raw';
        }
    }
}