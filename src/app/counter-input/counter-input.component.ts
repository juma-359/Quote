import { Component, OnInit, Input } from '@angular/core';
// import { Quote } from '../quote'

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
@Input ()
counterValue = 0;

increament(){
  this.counterValue++;
}
decreament(){
  this.counterValue++;
}
  constructor() { }

  ngOnInit(): void {
  }

}
