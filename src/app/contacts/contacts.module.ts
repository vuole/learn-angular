import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsModule { }
