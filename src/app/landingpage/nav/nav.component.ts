import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  @Input()
  inputData: any[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes["inputData"]) {
      this.inputData = changes["inputData"].currentValue;
      console.log(this.inputData);
    }
  }
  ngOnInit() {}
}
