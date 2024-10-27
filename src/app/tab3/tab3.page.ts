import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
     date_one: string | null = null;
     date_two : string | null = null;
     differenceInDays : number | null = null;
    calculateDays(){
      if(this.date_one && this.date_two){
        const start = new Date(this.date_one);
        const end = new Date(this.date_two);
        const difference = Math.abs(end.getTime() - start.getTime());
        this.differenceInDays = Math.ceil(difference/(1000 * 60 * 60 * 24));
      }
      else{
        this.differenceInDays= null;
      }
    }
}
