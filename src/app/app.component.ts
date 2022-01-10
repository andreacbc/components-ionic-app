import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Componente } from '../assets/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(IonMenu) ionMenu: IonMenu;
  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
