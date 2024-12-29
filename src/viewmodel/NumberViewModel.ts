import {makeAutoObservable} from 'mobx';
import Num from '../model/Num.ts';
import CounterRepository from '../repo/CounterRepository.ts';
import {useEffect} from 'react';

class NumberViewModel {
    num = new Num(0);

    constructor() {
        makeAutoObservable(this);
        this.initNum();
    }

    private initNum = () => {
        useEffect(() => {
            const fetchData = async () => {
                this.num = await CounterRepository.getNum();
            };

            // force jam to fetch data
            fetchData();
        }, []);
    };

    getNum = () => {
        return this.num;
    };

    // use functional style instead of function
    // to prevent the missing `this`
    increaseNum = async () => {
        let newNum = new Num(this.num.getNum() + 1);
        this.num = newNum;

        await CounterRepository.setNum(newNum);
    };
}

const numViewModel = new NumberViewModel();

export default numViewModel;
