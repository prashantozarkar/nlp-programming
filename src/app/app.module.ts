import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { SectionComponent } from './section/section.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CounsellingComponent } from './counselling/counselling.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'counselling', component: CounsellingComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    SectionComponent,
    ParagraphComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CounsellingComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
