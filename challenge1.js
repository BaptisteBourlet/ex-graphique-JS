let b = " #"
let a = "# "
let game = (x,y) => {
    for (x=1; x<y; x++) {
        if (Number.isInteger(x/2)) {
            console.log(b.repeat(y-1));
        }
        else {
            console.log(a.repeat(y-1));
        }
    }
}
console.log(game(20,21))