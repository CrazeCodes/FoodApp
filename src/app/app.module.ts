import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { PagesComponent } from './component/pages/pages.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SearchComponent } from './component/pages/search/search.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { LoginComponent } from './component/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient,withInterceptorsFromDi,withFetch } from '@angular/common/http';
import { SignupComponent } from './component/pages/signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,
    FoodPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
