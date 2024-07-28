const boroChele = {
    name:"Tushar",
    age: 36,
    hatkhoroch: 25000,
    
    takaAche: function koyTaka(amount, tax, tips) {
        console.log(this);
        this.hatkhoroch = this.hatkhoroch - amount - tax - tips;
    }

}

const mejoChele = {
    name:"Tonmoy",
    age: 28,
    hatkhoroch: 20000,
}

const chotoChele = {
    name:"Tanzim",
    age: 21,
    hatkhoroch: 15000,
}

const cutiChele = {
    name:"Ekta",
    age: 18,
    hatkhoroch: 10000,
}


//Now we ca use the koyTaka emthod which have into the boroChele object. there have three way to use it. 

//bind()--- boroChele.takaAche.bind(mejoChele) this is the example of it;

const mejochelerAche  = boroChele.takaAche.bind(mejoChele);
mejochelerAche(500, 50, 10);

console.log(mejoChele.hatkhoroch);

//call() we can call method in the same line


boroChele.takaAche.call(chotoChele, 400, 40, 10);

console.log(chotoChele.hatkhoroch);

//apply it also same as call diffter is we have to send argument as an array[]

boroChele.takaAche.call(cutiChele, 400, 40, 10);

console.log(cutiChele.hatkhoroch);
