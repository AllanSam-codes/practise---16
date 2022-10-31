var output = document.querySelector("#output-txt");
var button = document.querySelector("#btn")

var obj1 = {
    name: "Ram",
    age: 20,
    yuga: "Treta",
    power: 3000
};

var obj2 = {
    name: "Krishna",
    age: 8,
    yuga: "Dwapar",
    power: 4000
};

function checkPower(obj1, obj2) {
    if (obj1.power > obj2.obj2) {
        output.innerText = obj1.name
    } else {
        output.innerText = obj2.name
    }
}


function powerSum(obj1, obj2) {
    var checkPower1 = obj1.power + obj1.name.length * 35
    var checkPower2 = obj2.power + obj2.name.length * 35

    if (checkPower1 > checkPower2) {
        output.innerText = obj1.name
    } else {
        output.innerText = obj2.name
    }

}

function checkCharacter(obj1, obj2) {
    if (obj1.name.length * 35 > obj2.name.length * 35) {
        output.innerText = obj1.name
        console.log(obj1.name);
    } else {
        output.innerText = obj2.name
        console.log(obj2.name);
    }
}



button.addEventListener('click', function() {
    powerSum(obj1, obj2)
})