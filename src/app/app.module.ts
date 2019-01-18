import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component

import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { DashboardHeaderComponent } from './components/profesor/dashboardcomp/dashboard-header/dashboard-header.component';
import { InicioComponent_p } from './components/profesor/inicio/inicio.component';
import { DashboardSidebarComponent } from './components/profesor/dashboardcomp/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './components/profesor/dashboardcomp/dashboard-footer/dashboard-footer.component';
import { DashboardComponent } from './components/profesor/dashboardcomp/dashboard-content/dashboard.component';
import { DashboardContentDesafiosComponent } from './components/profesor/dashboardcomp/dashboard-content-desafios/dashboard-content-desafios.component';
import { DesafioService } from './services/desafio.service';



var adminLteConf = {
  skin: 'yellow',
  sidebarLeftMenu: [
    {label: 'Panel', separator: true},
    {label: ' Inicio', route: '/inicio', iconClasses: 'fa fa-dashboard'},
    {label: ' Desafíos', iconClasses: 'fa fa-tasks', children: [
      {label: 'Todos', route: '/profesor/desafios-todos'},
      {label: 'Categorias'}]},
    {label: ' Clases', iconClasses: 'fas fa-users', children: [
      {label: 'Todas'}]},
    {label: ' Informes', iconClasses: 'fa fa-files-o', route: '/profesor/informes'},
    {label: ' Cuenta', separator: true},
    {label: ' Configuraciones', iconClasses: 'fa fa-cogs', route: '/profesor/configuraciones'}
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EstudianteComponent,
    DashboardHeaderComponent,
    InicioComponent_p,
    DashboardSidebarComponent,
    DashboardFooterComponent,
    DashboardComponent,
    DashboardContentDesafiosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    LayoutModule.forRoot(adminLteConf),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [LoginService, DesafioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
