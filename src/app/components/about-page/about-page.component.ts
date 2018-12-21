import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.typeWriter()
  }

  i = 0;
  txt = 'Hii, nice to meet you. My name is Nikhil Manapure. I am an iOS developer.';
  speed = 50;

  typeWriter() {
    if (this.i < this.txt.length) {
      document.getElementById("intro").innerHTML += this.txt.charAt(this.i);
      this.i++;
      setTimeout(() => {
        this.typeWriter();
      }, this.speed);
    }
  }
}
