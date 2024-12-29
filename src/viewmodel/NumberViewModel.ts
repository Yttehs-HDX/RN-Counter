import {makeAutoObservable} from 'mobx';

class NumberViewModel {
    num = 0;

    constructor() {
        makeAutoObservable(this);
    }

    getNum = () => {
        return this.num;
    };

    // use functional style instead of function
    // to prevent the missing `this`
    increaseNum = () => {
        ++this.num;
    };
}

const numViewModel = new NumberViewModel();

export default numViewModel;
