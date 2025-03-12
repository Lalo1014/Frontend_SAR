import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', redirectTo: 'Login', pathMatch:'full'},
    {path:'Login', component: LoginComponent, title: 'Login SAR'},
    {path: 'home', component: HomeComponent, title: 'Home SAR'}
];
