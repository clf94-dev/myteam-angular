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
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { appRoutingProviders, routing } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MeetCardComponent } from './components/meet-card/meet-card.component';

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
    TopHomeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MeetCardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
