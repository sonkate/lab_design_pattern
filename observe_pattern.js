class subject {
    constructor(){
        this.observers = [];
    }
    addObserver(observer){
        this.observers.push(observer);
    }
    removeObserver(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(data){
        this.observers.forEach(observer => observer.update(data));
    }
    // when subject changes, notify all observers
    setPrice(newPrice) {
        this.price = newPrice;
        this.notify(newPrice);
    }
}

class observer {
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name} received data: ${data}`);
    }
}

const sub = new subject();
const obs1 = new observer('obs1');
const obs2 = new observer('obs2');
const obs3 = new observer('obs3');
sub.addObserver(obs1);
sub.addObserver(obs2);
sub.addObserver(obs3);
sub.notify('Hello World');

sub.removeObserver(obs2);
sub.setPrice(100);