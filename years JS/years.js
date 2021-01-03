
var year = document.getElementById("year").value
year = 2009


if (year < 2025) {
    document.write("Alpha")
} else if (year < 2010){
    document.write("Generation Z")
} else if (year < 1995){
    document.write("Millennials")
} else if (year < 1979){
    document.write("Generation X")
} else if (year < 1964){
    document.write("Baby Bust")
} else if (year < 1945){
    document.write("Silent")
} else if (year < 1924 && year >= 1910){
    document.write("Greatest Generation")
} else {
    document.write("Not found")
}
