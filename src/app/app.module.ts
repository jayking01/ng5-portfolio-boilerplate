
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsComponent } from './jobs/jobs.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqsComponent } from './faqs/faqs.component';
import { Courses120hoursComponent } from './courses120hours/courses120hours.component';
import { Courses190hoursComponent } from './courses190hours/courses190hours.component';
import { BlogComponent } from './blog/blog.component';

import { TeflinfoComponent } from './teflinfo/teflinfo.component';
import { TheteamComponent } from './theteam/theteam.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'theteam', component: TheteamComponent },
  { path: 'teflinfo', component: TeflinfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses120hours', component: Courses120hoursComponent },
  { path: 'courses190hours', component: Courses190hoursComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    FooterComponent,
    JobsComponent,
    CoursesComponent,
    FaqsComponent,
    Courses120hoursComponent, 
    Courses190hoursComponent, 
    BlogComponent, 
    TeflinfoComponent, 
    TheteamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
