"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControlPanel {
    constructor(slots) {
        this.slots = slots;
        this.timerSetting = 0;
        this.temperatureSetting = 0;
    }
    startTimer() {
        console.log('Toasting Started...🍞');
        for (let i = this.timerSetting / 1000; i > 0; i--) {
            setTimeout(() => {
                console.log(`Toasting ${i}...🍞`);
            }, this.timerSetting - i * 1000);
        }
        this.timer = setTimeout(() => {
            console.log('Toasting Completed...🥪');
        }, this.timerSetting);
    }
    stopTimer() {
        this.timerSetting = 0;
        this.temperatureSetting = 0;
        clearTimeout(this.timer);
    }
    setTimer(time) {
        this.timerSetting = time;
    }
    setTemperature(temperature) {
        this.temperatureSetting = temperature;
    }
}
exports.default = ControlPanel;
