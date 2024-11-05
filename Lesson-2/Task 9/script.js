/*
TASK - 9 (#KzrtqyQ
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
)
* */


let weekSchedule = Number(prompt("Choose any kind of weeks: Monday - 1,Tuesday - 2, Wednesday - 3, Thursday - 4, Friday - 5, Saturday - 6, Sunday - 7 "));

switch (weekSchedule) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday ');
        break;
    case 4:
        console.log('Thursday ');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday ');
        break;
    case 7:
        console.log('Sunday ');
        break;
    default:
        console.log("You must press just one number: '1' or '2' or '3'or '4'or '5'or '6' or '7'  ")
       }