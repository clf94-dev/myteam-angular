import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesHomeComponent } from './components/features-home/features-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { MeetComponent } from './components/meet/meet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { TopAboutComponent } from './components/top-about/top-about.component';
import { TopHomeComponent } from './components/top-home/top-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ContactSectionComponent,
    CtaComponent,
    FeaturesHomeComponent,
    FooterComponent,
    FormComponent,
    MeetComponent,
    NavbarComponent,
    OpinionsComponent,
    TopAboutComponent,
    TopHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
