export interface ISlot {
    item: IItem;

    startToast(): void;
    stopToast(): void;
    setItem(item: IItem): void;
}

export interface IControlPanel {
    slots: ISlot[];
    timerSetting: number;
    temperatureSetting: number;
    timer: number;

    startTimer();
    stopTimer();
    setTimer(time: number): void;
    setTemperature(temperature: number): void;
}

export interface IToaster {
    controlPanels: IControlPanel[];
    slots: ISlot[];

    startToast(controlPanelIdx: number): void;
    stopToast(controlPanelIdx: number): void;
    setToasterConfiguration(config: IToastingConfiguration): void;
}

export interface IToastingConfiguration {
    timer: number; // milliseconds
    temperature: number; // degrees Fahrenheit
}

export enum ToastLevels {
    LIGHT = 'LIGHT',
    MEDIUM = 'MEDIUM',
    DARK = 'DARK',
    BURNT = 'BURNT'
}

export interface IItem {
    toastLevel: string;
    getToastLevel(toastingConfig: IToastingConfiguration): string;
}