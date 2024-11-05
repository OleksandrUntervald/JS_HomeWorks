let time = prompt('choose number from 1-59');

if (time >= 0 && time <= 15){
    console.log("1st - part of hour")
} else if (time > 15 && time <= 30 ){
    console.log("2nd - part of hour")
} else if (time > 30 && time <= 45 ){
    console.log("3d - part of hour")
}else if (time > 45 && time <= 59 ){
    console.log("4 - part of hour")
} else{
    console.log("wrong number")
}