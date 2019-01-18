import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public http: HttpClient,
    public _loginService: LoginService,
    public router: Router) { }

  Entrar(usuario, contrasena) {
    console.log(usuario);
    console.log(contrasena);

    const req = this.http.post(this._loginService.getUrlApi()+'login', {
      user: usuario,
      pass: contrasena
    })
      .subscribe(
        res => {
          if (res['code'] === 200) {
            this._loginService.setToken(res['token']);
            this._loginService.setLogged(true);
            this._loginService.setNick(res['name'])
            let temproltoken = res['token'].split('.')[1]
            let rol = JSON.parse(atob(temproltoken))['Rol']
            let expiracion_token = JSON.parse(atob(temproltoken))['exp']
            this._loginService.setRol(rol);
            this._loginService.setExpireToken(expiracion_token);
            this.router.navigate(['/profesor/inicio']);
          } else if (res['code'] >= 400) {
            console.log('no entro algo paso');
            console.log(res);
            //document.getElementById('modalloginid').click();
            //document.getElementById('rectitulo2').innerHTML = 'Ups, algo ha salido mal'
            //document.getElementById('rectext2').innerHTML = res['mensaje']
          }
        },
        err => {
        }
      );
  }
  ngOnInit() {
  }

}
