import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any,): number {
    let today:Date = new Date();
    let dateDifference = Math.abs(value - todayWithNoTime)

  }
  }

}
