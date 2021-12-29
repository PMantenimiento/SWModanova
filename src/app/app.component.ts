import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SW';

  items = ['Ejemplo']

    addOT(){
      this.items.push('AREA: , UNIDADES : , REFERENCIA: , NÚMERO OT: , MÓDULO: , ESTADO: ')
    }

    deleteOT(index: number){
      this.items.splice(index, 1);
    }
}
