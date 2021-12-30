import { Component } from "@angular/core";

@Component ({ templateUrl: 'home.component.html'})

export class HomeComponent{
    title = 'SW';

    items = ['Ejemplo']
  
      addOT(){
        this.items.push('AREA: , UNIDADES : , REFERENCIA: , NÚMERO OT: , MÓDULO: , ESTADO: ')
      }
  
      deleteOT(index: number){
        this.items.splice(index, 1);
      }
}