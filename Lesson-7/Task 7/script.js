// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarCreator{
    constructor(model, year, maker, maxSpeed, engineVolume) {
        this.model = model;
        this.year = year;
        this.maker = maker;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive () { console.log(`їдемо зі швидкістю ${maxSpeed} на годину`) };
    info (){
        if (this.info !== `function`){
            for (let key in this){
                console.log(key, this[key])
            }
        }

    }
    increaseMaxSpeed   (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newValue){
        this.year = newValue;
    }
    addDriver (driver){
        this.addDriver = driver;
    }


}

let ivanDriver = {driver: "Ivan", years: 22, };
let car = new CarCreator("Tesla", 2022, "Ilon", 250, 3.5);


car.info();
car.increaseMaxSpeed(100);
car.changeYear(2021);
car.addDriver(ivanDriver);

console.log(car)