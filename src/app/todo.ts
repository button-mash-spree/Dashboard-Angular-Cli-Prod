export class Todo{
    _id : string;
    __v : number;
    constructor(
        public taskText : string,
        public isCompleted = false){}
}