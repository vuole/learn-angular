import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsModule } from './contacts/contacts.module';


const routes: Routes = [
  {path: 'detail/:id/:name/:phone', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent} 
]

@NgModule({
  imports: [
    ContactsModule, //nen dat len truoc RouterModule.forRoot(routes) de tranh chay vao PageNotFoundComponent truoc
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule] // thieu export RouterModule se khong su dung duoc routerLink va router-outlet
})
export class AppRoutingModule { }
