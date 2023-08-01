"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slot_1 = require("./toasterComponents/slot");
const controlPanel_1 = require("./toasterComponents/controlPanel");
class Toaster {
    constructor(slotConfiguration = 1, totalSlots = 2) {
        this.controlPanels = [];
        this.slots = [];
        this.toastingConfig = Toaster.defaultToasterConfiguration;
        if (totalSlots % slotConfiguration !== 0) {
            throw new Error('Invalid slot configuration');
        }
        for (let i = 0; i < totalSlots; i++) {
            this.slots.push(new slot_1.default());
        }
        for (let i = 0; i < totalSlots / slotConfiguration; i++) {
            let slots = [];
            for (let j = 0; j < slotConfiguration; j++) {
                slots.push(this.slots[i * slotConfiguration + j]);
            }
            this.controlPanels.push(new controlPanel_1.default(slots));
        }
    }
    startToast(controlPanelIdx) {
        if (controlPanelIdx >= this.controlPanels.length) {
            throw new Error('Invalid control panel index');
        }
        this.controlPanels[controlPanelIdx].setTimer(this.toastingConfig.timer);
        this.controlPanels[controlPanelIdx].setTemperature(this.toastingConfig.temperature);
        this.controlPanels[controlPanelIdx].startTimer();
    }
    stopToast(controlPanelIdx) {
        if (controlPanelIdx >= this.controlPanels.length) {
            throw new Error('Invalid control panel index');
        }
        this.controlPanels[controlPanelIdx].stopTimer();
    }
    setToasterConfiguration(config) {
        this.toastingConfig = config;
    }
}
Toaster.defaultToasterConfiguration = {
    timer: 6000,
    temperature: 185
};
Toaster.MAX_TEMP = 500;
Toaster.MIN_TEMP = 0;
Toaster.MAX_TIME = 60000;
Toaster.MIN_TIME = 0;
exports.default = Toaster;
const toaster = new Toaster(1, 2);
toaster.startToast(0);
