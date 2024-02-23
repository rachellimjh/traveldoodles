import { Human } from './human';

export function promote(){};

export default class Teacher extends Human{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}