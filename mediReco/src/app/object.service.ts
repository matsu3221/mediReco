import { Injectable } from '@angular/core';
import { Object } from './object';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  private object:Object
  private objects:Object[]

  constructor() {
    this.object = {
      name: null
    }
   }

   public getObject():Object{
     return this.object
   } 

   public setObject(setObject:Object){
      this.object = setObject
   }

   public setObjectName(setObjectName:String){
     this.object.name = setObjectName
   }

   public addObject(pushObject:Object){
    this.objects.push(pushObject)
   }
}
