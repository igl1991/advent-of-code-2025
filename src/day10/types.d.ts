type Button = number[];

export interface Machine  {
    totalLights: number;
    indicatorLightsOn: number[];
    buttons: Button[];
}