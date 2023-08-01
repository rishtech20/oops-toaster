import { IToaster, IToastingConfiguration, IControlPanel, ISlot } from './@types/toaster.interface';
import Slot from './toasterComponents/slot';
import ControlPanel from './toasterComponents/controlPanel';

export default class Toaster implements IToaster {
    controlPanels: IControlPanel[] = [];
    slots: ISlot[] = [];
    toastingConfig: IToastingConfiguration = Toaster.defaultToasterConfiguration;
    static defaultToasterConfiguration: IToastingConfiguration = {
        timer: 6000,
        temperature: 185
    };
    static MAX_TEMP: number = 500;
    static MIN_TEMP: number = 0;
    static MAX_TIME: number = 60000;
    static MIN_TIME: number = 0;

    constructor(slotConfiguration: number = 1, totalSlots: number = 2) {
        if (totalSlots % slotConfiguration !== 0) {
            throw new Error('Invalid slot configuration');
        }

        for (let i = 0; i < totalSlots; i++) {
            this.slots.push(new Slot());
        }

        for (let i = 0; i < totalSlots / slotConfiguration; i++) {
            let slots: ISlot[] = [];
            for (let j = 0; j < slotConfiguration; j++) {
                slots.push(this.slots[i * slotConfiguration + j]);
            }
            this.controlPanels.push(new ControlPanel(slots));
        }
    }

    startToast(controlPanelIdx: number): void {
        if (controlPanelIdx >= this.controlPanels.length) {
            throw new Error('Invalid control panel index');
        }

        this.controlPanels[controlPanelIdx].setTimer(this.toastingConfig.timer);
        this.controlPanels[controlPanelIdx].setTemperature(this.toastingConfig.temperature);
        this.controlPanels[controlPanelIdx].startTimer();
    }

    stopToast(controlPanelIdx: number): void {
        if (controlPanelIdx >= this.controlPanels.length) {
            throw new Error('Invalid control panel index');
        }

        this.controlPanels[controlPanelIdx].stopTimer();
    }

    setToasterConfiguration(config: IToastingConfiguration): void {
        if (config.temperature > Toaster.MAX_TEMP || config.temperature < Toaster.MIN_TEMP) {
            throw new Error('Invalid temperature');
        }

        if (config.timer > Toaster.MAX_TIME || config.timer < Toaster.MIN_TIME) {
            throw new Error('Invalid timer');
        }

        this.toastingConfig = config;
    }
}

const toaster = new Toaster(1, 2);
toaster.startToast(0);
