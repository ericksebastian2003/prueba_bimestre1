import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
   userText : string = '';

  saveFile(){
    const blob = new Blob([this.userText], {type :'text/plain'})
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

}
