import { Injectable } from '@angular/core';
import { cloth } from './cloth';

@Injectable({
  providedIn: 'root'
})
export class OuterService {

  outers: cloth[] = [];

  constructor() { }

  public getClothes(){
    return this.outers;
  }
}
