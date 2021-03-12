import { Injectable } from '@angular/core';
import { cloth } from './cloth';

@Injectable({
  providedIn: 'root'
})
export class TopsService {

  topes: cloth[]=[];

  constructor() { }

  public getClothes(){
    return this.topes;
  }
}
