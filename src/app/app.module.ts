import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralComponent } from './structural/structural.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './learn-pipe/round.pipe';
import { IpComponent } from './ip/ip.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'detail', component: ContactDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    StructuralComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
