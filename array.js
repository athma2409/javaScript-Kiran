

(function () {
    `use strict`;

    array = [{
        id: 1, name: "Bat", price: "700"
    },
    {
        id: 2, name: "Ball", price: "700"
    },
    {
        id: 3, name: "Wickets", price: "1500"
    },

    ]
    b = [];


    //By using For loop
    for (var i = 0; i < array.length; i++) {
        if (array[i].price < 100) {

            b.push(array[i]);

        }
        console.log(b);

    }


    //By using array.filter method 
    let x = array.filter(function (item, index) {
        return item.price > 100;
    })
    console.log(x);


    //Arrow functions-Shorthand functions.
    let shorthand = array.filter(x => x.price > 100);
    console.log(shorthand);
    // let findindex=array.find(x=>x.index())


    //To find position by using array.map()
    let y = array.map((item, index) => {
        let product = item;
        product.position = index;
        return product;

    })
    console.log(y);


    //filter with map
    let z = array.filter(function (item, index) {
        return item.price > 700;

    }).map((item, index) => {
        return item.position = index;
    })

    console.log(z);


    //By using array.find 
    let f = array.find((item, price) => {
        return item.price == 700;
    })
    console.log(f);








})();