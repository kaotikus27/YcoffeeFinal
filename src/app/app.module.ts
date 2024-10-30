import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { FeatureComponent } from './components/pages/feature/feature.component';
import { AboutComponent } from './components/pages/about/about.component';
<<<<<<< HEAD
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { FooterComponent } from './components/pages/footer/footer.component';
=======
>>>>>>> 32304281ea26389ecf49310efc3a8314b34d4f6e

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    MenuComponent,
    FeatureComponent,
<<<<<<< HEAD
    AboutComponent,
    TestimonialsComponent,
    FooterComponent
=======
    AboutComponent
>>>>>>> 32304281ea26389ecf49310efc3a8314b34d4f6e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
