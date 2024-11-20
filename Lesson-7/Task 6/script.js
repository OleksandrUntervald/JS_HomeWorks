// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



   function CarCreator(model, year, maker, maxSpeed, engineVolume) {
        this.model = model;
        this.year = year;
        this.maker = maker;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () { console.log(`їдемо зі швидкістю ${maxSpeed} на годину`) };
        this.info = function  (){
            if (this.info !== `function`){
                for (let key in this){
                    console.log(key, this[key])
                }
            }

        }
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
        this.changeYear = function (newValue){
            this.year = newValue;
        }
        this.addDriver = function (driver){
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