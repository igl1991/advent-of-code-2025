type Button = number[];

export interface Machine {
    totalLights: number;
    indicatorLightsOn: number[];
    buttons: Button[];
}

export interface ButtonWithId {
    button: Button; 
    id: number;
}