import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [
    {
      href: "about",
      title: "About",
      icon: "fas fa-user-alt",
      fontSize: 21
    },
    {
      href: "apps",
      title: "Apps",
      icon: "fab fa-app-store",
      fontSize: 25
    },
    {
      href: "resume",
      title: "Resume",
      icon: "far fa-address-card",
      fontSize: 21
    },
    {
      href: "contact",
      title: "Contact",
      icon: "fab fa-telegram-plane",
      fontSize: 25
    },
  ]

  isCurrentPage(index) {
    var strs = window.location.href.split("/");
    return strs[strs.length - 1] === this.pages[index].href ? "#ce5374" : "#818181"
  }
}
