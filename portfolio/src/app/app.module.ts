import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { MeComponent } from './components/home/me/me.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { NavComponent } from './components/home/nav/nav.component';
import { ButtonComponent } from './components/button/button.component';
import { MeIntroductionComponent } from './components/home/me/me-introduction/me-introduction.component';
import { MeDetailsComponent } from './components/home/me/me-details/me-details.component';
import { AboutCardComponent } from './components/home/about/about-card/about-card.component';
import { ExperienceCardComponent } from './components/home/experience/experience-card/experience-card.component';
import { ProjectComponent } from './components/home/project/project.component';
import { ProjectCardComponent } from './components/home/project/project-card/project-card.component';
import { ProjectCardOverlayComponent } from './components/home/project/project-card-overlay/project-card-overlay.component';
import { TestimonialCardComponent } from './components/home/testimonials/testimonial-card/testimonial-card.component';
import { ContactCardComponent } from './components/home/contact/contact-card/contact-card.component';
import { NavAdminComponent } from './components/home/nav-admin/nav-admin.component';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptorService } from './services/global-http-interceptor/global-http-interceptor.service';

// ngx
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ManagamentComponent } from './views/managament/managament.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    MeComponent,
    TestimonialsComponent,
    NavComponent,
    ProjectComponent,
    ButtonComponent,
    MeIntroductionComponent,
    MeDetailsComponent,
    AboutCardComponent,
    ExperienceCardComponent,
    ProjectCardComponent,
    ProjectCardOverlayComponent,
    TestimonialCardComponent,
    ContactCardComponent,
    NavAdminComponent,
    LoginComponent,
    ManagamentComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    SwiperModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
      extendedTimeOut: 5000,
      progressBar: true,
      disableTimeOut: false,
      enableHtml: false,
      maxOpened: 3,
      preventDuplicates: true,
      includeTitleDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise' }),
    NgxHideOnScrollModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
