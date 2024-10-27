import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  a : number | null = null;
  b : number | null = null;
  c : number | null = null;
  roots:{root1:number|null;root2:number|null}|null=null;
  error : string | null = null;
  calculateQuadraticRoots(){
    this.error=null;
    this.roots=null;
    if(this.a===null || this.b === null || this.c===null){
      this.error='Por favor ingrese todos los coeficientes';
      return;
    }
    const discrimant = Math.pow(this.b,2) - 4 * this.a *  this.c;
    if(discrimant <0){
      this.error='No tiene raices reales';
      return;
    }
    const root1 = (-this.b + Math.sqrt(discrimant)) / (2 * this.a);
    const root2= (-this.b - Math.sqrt(discrimant)) / (2 * this.a);
    this.roots ={root1,root2};
  }

}
