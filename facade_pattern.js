class Discount{
    calc(value){
        return value * 0.9;
    }
}

class Fees{
    calc(value){
        return value * 1.05;
    }
}

class Shipping{
    calc(value){
        return value + 15000;
    }
}

class Total{
    discount = new Discount();
    fees = new Fees();
    shipping = new Shipping();
    calc(value){
        value = this.discount.calc(value);
        value = this.fees.calc(value);
        value = this.shipping.calc(value);
        return value;
    }
}


const total = new Total();
console.log(total.calc(100000));