import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { FeatureComponent } from './components/pages/feature/feature.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { FooterComponent } from './components/pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    MenuComponent,
    FeatureComponent,

    AboutComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
