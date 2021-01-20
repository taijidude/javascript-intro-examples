import Text from './class-test2.js';
import input from './input.js';


class App {

    constructor(message='duke') {
        this.message = message;
        console.log('created', this);
    }
    
    init(callback = function(param) {console.log('not defined')}) {
        console.log('initialized',);
        callback(this.message);
    }
}

class App2 {

    constructor(message='duke') {
        this.message = message;
        this.init();
    }
    init() {}
}







const app = new App();
app.init();

const sayHello = function(greeting) {
    console.log('global', greeting);
};

const withParams = new App('Java');
app.init(sayHello);




