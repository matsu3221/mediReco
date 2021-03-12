import { Injectable } from '@angular/core';
import { cloth } from './cloth';

@Injectable({
  providedIn: 'root'
})
export class BottomsService {

  bottomses: cloth[] = [];

  constructor() { }

  public getClothes(){
    return this.bottomses;
  }
}
