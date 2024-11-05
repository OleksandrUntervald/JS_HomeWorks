let day = prompt('choose number from 1-31');

if (day >= 1 && day <= 10){
    console.log("1st - part of month")
} else if (day > 10 && day <= 20 ){
    console.log("2nd - part of month")
} else if (day > 20 && day <= 31 ){
    console.log("3d - part of month")
} else{
    console.log("wrong number")
}