import { Component, OnInit } from '@angular/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';
import { Object } from '../object';
import { ObjectService } from '../object.service';
import { doress } from '../doress';
import { MatSelectChange } from '@angular/material/select';
import { BottomsService } from '../bottoms.service';
import { TopsService} from '../tops.service';
import { OuterService } from '../outer.service';
import { cloth } from '../cloth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   selectObject:Object;
   objects:Object[] = [];
   topsNum:number = 1;
   bottomsNum:number = 1;
   outerNum:number = 1;
   doress:doress;
   value:string="トップス";
   topses:cloth[] = []

   doresses = [
    {value: '001', viewValue: 'トップス'},
    {value: '002', viewValue: 'アウター'},
    {value: '003', viewValue: 'ボトム'}
  ];

  constructor(private objectService:ObjectService,private bottoms:BottomsService,private tops:TopsService,private outers:OuterService) { }

  ngOnInit(): void {
  }

  dragEnd($event:CdkDragEnd) {  
  //dragEnd($event: CdkDragDrop<string[]>) {
    console.log($event.source.getFreeDragPosition())
    const { offsetLeft, offsetTop } = $event.source.element.nativeElement;
    const { x, y } = $event.distance;
    var positionX = offsetLeft + x;
    var positionY = offsetTop + y;
    // this.showPopup = true;
    console.log({ positionX, positionY });
  }

  addButtonClick(){
    //トップスが選択されている場合
    if(this.value == '001'){
      var selectTops:cloth = {
        brand:"",
        kind:"",
        color:"",
        size:38
       }
      console.log(this.topsNum)
      selectTops.kind =  'tops'+this.topsNum.toString()
      this.topsNum = this.topsNum + 1;
      this.tops.topes.push(selectTops);
      console.log(this.tops.topes);
    }
    //ボトムスが選択されている場合
    if(this.value == '002'){
      var selectBottoms:cloth = {
        brand:"",
        kind:"",
        color:"",
        size:38
       }
      console.log(this.bottomsNum)
      selectBottoms.kind =  'bottoms'+this.bottomsNum.toString()
      this.bottomsNum = this.bottomsNum + 1;
      this.bottoms.bottomses.push(selectBottoms);
      console.log(this.bottoms.bottomses);
    }
    //アウターが選択されている場合
    if(this.value == '003'){
      var selectOuter:cloth = {
        brand:"",
        kind:"",
        color:"",
        size:38
       }
      console.log(this.outerNum)
      selectOuter.kind =  'outer'+this.outerNum.toString()
      this.outerNum = this.outerNum + 1;
      this.outers.outers.push(selectOuter);
      console.log(this.outers.outers);
    }
  }

  getSelectedValue($event: MatSelectChange){
    this.value = $event.value
    console.log(this.value)
  }

  getTops(){
    this.topses = this.tops.getClothes();
  }
}
