import Text from './class-test2.js'
export default class Input extends Text {
    constructor(id, changeListner) {
        super(id);
        this.changeListner = changeListner;
        this.register();
    }

    register() {
        this.domElement.onchange = this.changeListner;
    } 

}