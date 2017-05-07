import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'clock',
    template: `<div style='width:65vw; border-right: solid 1px; float: left'>
                  <h1 style="text-align:center; margin: 5%; font-size: 14vw; text-shadow: 20px 20px 40px black">{{time}}</h1>
                  <h1 style="text-align:center; font-size: 5vw; text-shadow: 10px 10px 20px black">{{date}}</h1>
               </div>`
})
export class ClockComponent{
time: string;
date: string;

    ngOnInit(){
        let timer = Observable.timer(0, 1000);
        timer.subscribe(t=>{
            let dateData = new Date();
            this.time = dateData.toLocaleTimeString("en-GB");
            let dayOfWeek;
            switch (dateData.getDay()){
                case 0: dayOfWeek = "Sunday";
                        break;
                case 1: dayOfWeek = "Monday";
                        break;
                case 2: dayOfWeek = "Tuesday";
                        break;
                case 3: dayOfWeek = "Wednesday";
                        break;
                case 4: dayOfWeek = "Thursday";
                        break;
                case 5: dayOfWeek = "Friday";
                        break;
                case 6: dayOfWeek = "Saturday";
                        break;
            }
            this.date = dateData.toLocaleDateString("en-GB") + " - " + dayOfWeek;
        });
    }
}