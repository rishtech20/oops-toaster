import { IControlPanel, ISlot } from '../@types/toaster.interface';

export default class ControlPanel implements IControlPanel {
    slots: ISlot[];
    timerSetting: number;
    temperatureSetting: number;
    timer: number;

    constructor(slots: ISlot[]) {
        this.slots = slots;
        this.timerSetting = 0;
        this.temperatureSetting = 0;
    }

    startTimer() {
        console.log('Toasting Started...🍞');

        for (let i = this.timerSetting/1000; i > 0; i--) {
            setTimeout(() => {
                console.log(`Toasting ${i}...🍞`);
            }, this.timerSetting - i * 1000);
        }


        this.timer = setTimeout(() => {
            console.log('Toasting Completed...🥪');
        }, this.timerSetting);
    }

    stopTimer(): void {
        this.timerSetting = 0;
        this.temperatureSetting = 0;
        clearTimeout(this.timer);
    }    

    setTimer(time: number): void {
        this.timerSetting = time;
    }

    setTemperature(temperature: number): void {
        this.temperatureSetting = temperature;
    }
}