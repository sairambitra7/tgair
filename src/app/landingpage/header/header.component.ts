import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menus: any[] = [];
  constructor() {
    this.menus = this.menuList();
    console.log(this.menus);
  }

  ngOnInit() {}

  menuList() {
    return [
      {
        name: "SERVICE",
        url: "#"
      },
      {
        name: "ABOUT US",
        url: "#"
      },
      {
        name: "CONTACT",
        url: "#"
      },
      {
        name: "FAQS",
        url: "#"
      },
      {
        name: "HOW IT WORKS",
        url: "#"
      },
      {
        name: "SIGN IN",
        url: "#"
      }
    ];
  }
}
