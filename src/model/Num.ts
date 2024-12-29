class Num {
    private readonly inner: number;

    constructor(num: number) {
        this.inner = num;
    }

    public getNum = () => {
        return this.inner;
    };
}

export default Num;
