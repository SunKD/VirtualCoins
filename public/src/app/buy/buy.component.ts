import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buying;
  owned;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.owned = this._httpService.getCoins();
    console.log(this.owned);
    }

  onSubmit() {
    this._httpService.buy(this.buying);  
    this.ngOnInit();
  }


}
