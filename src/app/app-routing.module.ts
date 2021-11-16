import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { AppComponent } from './app.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id/:title', component: EditComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'delete/:id/:title', component: DeleteComponent },
  { path: 'addmovie', component: AddFilmComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
