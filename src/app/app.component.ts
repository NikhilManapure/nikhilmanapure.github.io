import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [
    {
      href: "about",
      title: "About"
    },
    {
      href: "apps",
      title: "Apps"
    },
    {
      href: "resume",
      title: "Resume"
    },
    {
      href: "contact",
      title: "Contact"
    },
  ]
}
