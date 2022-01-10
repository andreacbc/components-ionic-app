import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getAlbumes().subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  onSearchChange( event: any) {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
