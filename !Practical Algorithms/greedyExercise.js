function makeChange(n){
    let coinsUsed = 0;
    let changeNeeded = n;
    const qtr = 25;
    const dime = 10;
    const nickel = 5;

    while(changeNeeded > 0){
        if(changeNeeded >= 25) {
            changeNeeded -= qtr
        }
        else if(changeNeeded >= dime){
            changeNeeded -= dime
        }
        else{
            changeNeeded -= nickel
        }
        coinsUsed++
    }
return coinsUsed
}