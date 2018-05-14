import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  amount;
  value = 0;
  leadgers = [];
  id = -1;
  action;

  constructor(private _httpClient: HttpClient) { }

  mine(){
    this.amount = 1;
    this.value ++;
    this.id++;
    this.action = "Mined";
    this.leadgers.push({id: this.id, action: this.action, amount: this.amount, value: this.value})
  }

  buy(amount){
    this.amount = amount;
    this.value += amount;
    this.id++;
    this.action = "Bought";
    console.log(this.amount + "from service")
    this.leadgers.push({id: this.id, action: this.action, amount: this.amount, value: this.value})
  }

  getCoins(){
    return this.value;
  }

  sell(amount){
    this.value -= amount;
    this.id++;
    this.amount = amount;
    this.action = "Sell";
    this.leadgers.push({id: this.id, action: this.action, amount: this.amount, value: this.value})

  }

  getLeadger(){
    return this.leadgers;
  }

  getOne(id){
    console.log(this.leadgers[id]);
    return this.leadgers[id];
  }

}
