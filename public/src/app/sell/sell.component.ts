import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  selling;
  owned;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.owned = this._httpService.getCoins();
  }

  onSubmit() {
    if (this.selling > this.owned) {
      console.log("You can't do that");
    }else{
      this._httpService.sell(this.selling);
    }
    this.ngOnInit()
  }
}
