const berekening = function( item1) {
    if (item1> 100){
        return true
    }else{
        return false
    }
}

let getal1 = berekening(400)
console.log(getal1);
let getal2 = berekening(40)
console.log(getal2);
// functions that produce something


const bouncer = function(crowd, age){
    if(crowd < 100 && age >=18){
        console.log("come in");
    }else if( crowd >100 && age>=18){
        console.log("it's too busy now, come back later");
    }else if (crowd >= 100 && age< 18){
        console.log("this is a club for adults");
    }else if (crowd <100 && age<18){
        console.log("this is a club for adults");
    }
}

bouncer(101, 19)
bouncer(99, 20)
bouncer(103, 15)
bouncer(80, 17)
bouncer(200, 15)

// functions that produce something


const averageFive = function(num1,num2, num3, num4, num5){
  const som =   num1+ num2 + num3 +num4 +num5 / 5;
    return som
}



const serieOne = averageFive(1,2,3,4,5)
console.log(serieOne);

const serieTwo = averageFive (10, 15, 45, 85, 40)
console.log(serieTwo);

const serieThree = averageFive( 900, 400, 800, 130, 460)
console.log(serieThree);

const serieFour = averageFive (1/2, 2/3, 5/6, 7/4, 1/2)
console.log(serieFour);

//functions that calculate something

