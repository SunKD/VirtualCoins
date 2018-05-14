import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  leadgers: any;
  constructor(
    private _httpService: HttpService,
  ) {
  }

  ngOnInit() {
    this.leadgers = this._httpService.getLeadger();
    console.log(this.leadgers);
  }

  

}
