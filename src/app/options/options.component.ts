import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {

      $(".day").click(() => {
        $("body").css("background-color", "Yellow");
        $("h1").css("color","black");
        $("h3").css("color","black");
      });
      $(".night").click(() => {
        $("body").css("background-color", "black");
        $("h1").css("color","white");
        $("h3").css("color","white");
      });
      $(".mint").click(() => {
        $("body").css("background-color", "green");
        $("h1").css("color","white");
        $("h3").css("color","white");
      });
      $(".voilet").click(() => {
        $("body").css("background-color", "blueviolet");
        $("h1").css("color","white");
        $("h3").css("color","white");
      });
      $(".sensation").click(() => {
        $("body").css("background-color", "red");
        $("h1").css("color","white");
        $("h3").css("color","white");
      });
    })(jQuery);
  }
  
}
