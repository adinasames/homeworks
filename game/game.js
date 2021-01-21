
function myFunction() {

let x = randomNumber(101)

let y = document.getElementById("number").value


if (y > x) {
    document.write("Prea Mare")
} else if (y < x){
    document.write("Prea Mic")
} else if (y == x) {
    document.write("Ai nimerit!")
}

}
function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

