import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer = 8;
  userAnswer;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.userAnswer == this.answer) {
      console.log("You got it right!");
      this._httpService.mine();
    }else{
      console.log("You got it wrong!");
    }
    this.ngOnInit();
  }

}
