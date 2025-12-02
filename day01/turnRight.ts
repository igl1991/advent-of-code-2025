export const turnRight = (
    currentPosition: number, 
    amount: number
) : number => {
    let dif = currentPosition + amount;
    if (dif > 99) {
        dif -= 100;
    }
    return dif;
}