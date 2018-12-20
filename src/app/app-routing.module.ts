import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AppsPageComponent } from './components/apps-page/apps-page.component';
const routes: Routes = [
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'apps',
        component: AppsPageComponent
    },
    {
        path: 'resume',
        component: ResumePageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '**',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
