import { Component, OnInit } from '@angular/core';
import { MeService } from './me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  providers: [ MeService ],
})
export class MeComponent implements OnInit {
  text = "";

  constructor(private meService: MeService) { }

  ngOnInit() {
    this.meService.fetchMe()
        .subscribe((data) => {
          this.text = data.description;
        });
  }

}
