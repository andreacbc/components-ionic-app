import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] =['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  disabled = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    //console.log(event);

    // Separa el elemento que estoy moviendo
    const itemMover = this.personajes.splice( event.detail.from, 1)[0];

    //Aca mueve el item cortado y lo agrega a la ultima posicion
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
    console.log(this.personajes);
  }

  onClick(){
    this.disabled = !this.disabled;
  }

}
