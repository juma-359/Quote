export class Quote {
    public showDescription: boolean;
    constructor(public id:number, public description:string, public name:string, public author:string, public addNewQuote:string, public upvotes: number, public downvotes:number, public completeDate:Date){
        this.showDescription=false;
    }
}
