import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';

const routes: Routes = [

 // {path: '', redirectTo: 'home', pathMatch: 'full'},

  // { path:'', redirectTo: 'login' , pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'add', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'updatepopup', component: UpdatepopupComponent},
  {path: 'main-navbar',component: MainNavbarComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
