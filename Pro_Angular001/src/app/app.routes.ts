import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NikeComponent } from './component/nike/nike.component';
import { AdidasComponent } from './component/adidas/adidas.component';
import { ReebokComponent } from './component/reebok/reebok.component';
import { PumaComponent } from './component/puma/puma.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrarComponent } from './component/registrar/registrar.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'nike',component: NikeComponent},
    {path: 'adidas',component: AdidasComponent},
    {path: 'reebok',component: ReebokComponent},
    {path: 'puma',component: PumaComponent},
    {path: 'login',component: LoginComponent},
    {path: 'registrar',component: RegistrarComponent}
];
