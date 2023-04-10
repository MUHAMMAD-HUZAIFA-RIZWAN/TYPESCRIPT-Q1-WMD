"use strict";
/*
45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
*/
function car(manufacturer, model, ...arg) {
    let obj_car = {
        manufacturer: manufacturer,
        model: model,
        arg: arg
    };
    console.log(obj_car);
}
car('Toyota', 2022, 'Yaris');
car('Toyota', 2022, 'Yaris', 'Ativ');
car('Toyota', 2022, 'Yaris', 'Ativ', 'CVT', 1.3);
