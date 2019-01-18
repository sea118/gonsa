import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  range = [
    {nombre:"Desafios", descripcion:"descipcion componente", color: "bg-green", icon: "fa-tasks"},
    {nombre:"Clases", descripcion:"descipcion componente",  color: "bg-red", icon:"fa-users"},
    {nombre:"Informes", descripcion:"descipcion componente", color:"bg-yellow", icon:"fa-files-o"},
    {nombre:"Configuracion", descripcion:"descipcion componente",color:"bg-blue",  icon:"fa-cogs"}
    ];
  constructor() { }

  ngOnInit() {
  }

}
