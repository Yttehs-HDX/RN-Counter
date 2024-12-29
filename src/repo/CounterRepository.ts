import CounterDatabase from '../db/CounterDatabase.ts';
import Num from '../model/Num.ts';

class CounterRepository {
    static getNum = async () => {
        return await CounterDatabase.getNum();
    };

    static setNum = async (num: Num) => {
        await CounterDatabase.setNum(num);
    };
}

export default CounterRepository;
