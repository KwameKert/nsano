import { BrowserModule,} from '@angular/platform-browser';
import { BrowserAnimationsModule,} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FooterComponent } from './components/footer/footer.component';
import { ApiComponent } from './components/api/api.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CountUpModule } from 'ngx-countup';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';




const routes : Routes = [

  {
    path: 'nice',
    component: HeaderComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    CountUpModule,
    NgxMaterialTimepickerModule,
    NgxUsefulSwiperModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
