import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { TableListComponent } from './table-list/table-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { Act8tableComponent } from './act8table/act8table.component';
import { Act8RegisterComponent } from './act8-register/act8-register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notFound',      component: ErrorComponent },
  { path: 'view/:id',      component: ViewComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'home',      component: HomeComponent },
  { path: '**',      redirectTo: '/notFound', },

 
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TableListComponent,
    Act8tableComponent,
    Act8RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ErrorComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    SweetAlert2Module,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
