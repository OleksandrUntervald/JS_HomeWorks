//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

/* ЗАВДАННЯ СПИСАНО на 100% ( взагалі не зміг його реалізувати )   */


Array.prototype.myForEach = function (callback){
    const yourArray = this;
    for (const item of yourArray){
        callback(item)
    }
};

[1, 2, 4].myForEach((x)=> console.log(x))

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)){
            arr.push(ite,)
        }

    }
    return arr;
}

