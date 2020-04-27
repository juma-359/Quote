import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote [] = [
  new Quote(1, 'stop looking for happiness where you lost it', 'Paul Tenison.', 'Paul Wesonga', '', 0, 0,new Date (2019,3,12))
]

toggledetails(index){
  this.quotes[index].showDescription = ! this.quotes[index].showDescription;
}

completeQuote(isComplete,index){
  if(isComplete)
  {
    this.quotes.splice(index,1);
  }
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date (quote.completeDate)
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit(): void {
  }

}
