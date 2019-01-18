import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DesafioService {
  urlapi: string;

  getUrlApi(): string {
    return this.urlapi;
  }

  constructor(public http: HttpClient, public router: Router) {
    this.urlapi = 'http://tera.uach.cl:8080';
  }

  getInfoDesafios(): InfoDesafio[] {
     let listadesafios = [];
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this.getUrlApi() +'/getallchallenges', httpOptions).subscribe(data => {
      if (data['code'] >= 400) {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
      }
    for (let i  = 0; i < data['challenges'].length; i++) {
        let id =  data['challenges'][i][0] ;
        let to =  data['challenges'][i][1];
        let ti =  data['challenges'][i][2];
        let im =  data['challenges'][i][3];
        let re = data['challenges'][i][4];
        let de =  data['challenges'][i][5];
        let ob =  data['challenges'][i][6] ;
        let fe = data['challenges'][i][7];
        let ul =  data['challenges'][i][8] ;
        let ca = data['challenges'][i][9];
        let final ={id: id, tokenId: to, tituto: ti, imagen: im, resumen: re, descripcion: de, objetivo: ob, fecha: fe, modificacion: ul,
        categoria: ca };
        listadesafios.push(final);
    }
    localStorage.setItem('desafios', JSON.stringify(listadesafios));
    });
    return listadesafios;
  }
}

export interface InfoDesafio {
  nombre: string;
};
