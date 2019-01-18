import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../../../../services/desafio.service';


@Component({
  selector: 'app-dashboard-content-desafios',
  templateUrl: './dashboard-content-desafios.component.html',
  styleUrls: ['./dashboard-content-desafios.component.css']
})
export class DashboardContentDesafiosComponent implements OnInit {
  desafios: any[] = [];
  constructor(public _desafioService: DesafioService) { }

  ngOnInit() {
    console.log(this.desafios = this._desafioService.getInfoDesafios());
  }

}
