import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

import { Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { InicioComponent_p } from './components/profesor/inicio/inicio.component';
import { DashboardContentDesafiosComponent } from './components/profesor/dashboardcomp/dashboard-content-desafios/dashboard-content-desafios.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'estudiante', component: EstudianteComponent },
    { path: 'profesor/inicio', component: InicioComponent_p },
    { path: 'profesor/desafios-todos', component: DashboardContentDesafiosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]