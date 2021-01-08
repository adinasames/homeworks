
function myFunction() {
var year = document.getElementById("year").value

if (year >= 1910 && year <= 1924) {
    document.write("Greatest Generation")
} else if (year >= 1925 && year <= 1945){
    document.write("Silent Generation")
} else if (year >= 1946 && year <= 1964){
    document.write("Baby Bust")
} else if (year >= 1965 && year <= 1979){
    document.write("Generation X")
} else if (year >= 1980 && year <= 1995){
    document.write("Millennials")
} else if (year >= 1996 && year <= 2010){
    document.write("Generation Z")
} else if (year >= 2011 && year <= 2025){
    document.write("Alpha")
} else {
    document.write("Not found")
}

}


