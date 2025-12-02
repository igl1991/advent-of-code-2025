export const turnLeft = (
    currentPosition: number, 
    amount: number
) : number => {
    let dif = currentPosition - (amount % 100);
    if (dif < 0) {
        dif += 100;
    }
    return dif;
}