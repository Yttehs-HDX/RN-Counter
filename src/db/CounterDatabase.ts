import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import Num from '../model/Num.ts';

enablePromise(true);

class CounterDatabase {
    private static getDbConnection = async () => {
        return openDatabase({name: 'counter.db', location: 'default'});
    };

    private static initData = async () => {
        const db = await this.getDbConnection();
        const createTableQuery = `CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY, num INTEGER);`;
        const insertQuery = `INSERT INTO counter (id, num) VALUES (?, ?);`;

        await db.transaction((transaction) => {
            transaction.executeSql(createTableQuery);
            transaction.executeSql(insertQuery, [1, 0]);
        });
    };

    static getNum = async (): Promise<Num> => {
        const db = await this.getDbConnection();
        const query = `SELECT num FROM counter WHERE id = 1`;

        try {
            const results = await db.executeSql(query);
            const num = results[0].rows.item(0).num as number;
            return new Num(num);
        } catch (e) {
            await this.initData();
            return new Num(0);
        }
    };

    static setNum = async (num: Num) => {
        const db = await this.getDbConnection();
        const query = `UPDATE counter SET num = ? WHERE id = 1`;

        await db.executeSql(query, [num.getNum()]);
    };
}

export default CounterDatabase;
