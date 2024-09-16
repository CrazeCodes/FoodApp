import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { SearchComponent } from './component/pages/search/search.component';
import { SignupComponent } from './component/pages/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'search/:searchTerm', component: SearchComponent },
  { path: '**', redirectTo: '' }  // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
