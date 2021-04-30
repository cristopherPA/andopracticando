import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'button-toggle-app';
  badgeCount: number;

  selectedValue: String[] = ["First"]

  toggleOptions: Array<String> = ["First", "Second"];

  selectionChanged(item) {
    console.log("Selected value: " + item.value);

    this.selectedValue.forEach(i => console.log(`Included Item: ${i}`));
  }
  constructor(private _sanitizer:DomSanitizer){}
  ngOnInit() {
    this.badgeCount = 10;
    this.video1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zcAalMeaKso');
    this.video2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/RZ5fNK2oTf4');
    this.video3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3yM5uXp-T_0');
    
  }
  video1;
  video2;
  video3;
  
  derecha() {
    var elmnt = document.getElementById("myDIV");
    elmnt.scrollLeft += 50;
  }
  izquierda() {
    var elmnt = document.getElementById("myDIV");
    elmnt.scrollLeft -= 50;
  }
}