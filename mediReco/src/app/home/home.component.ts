import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {CdkDragEnd,CdkDragMove,DragDropModule,CdkDragDrop,CdkDragEnter,CdkDragExit} from '@angular/cdk/drag-drop';
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
    {value: '002', viewValue: 'ボトムス'},
    {value: '003', viewValue: 'アウター'}
    ];
  @ViewChild('dustBox') dustBox

  constructor(public objectService:ObjectService,public bottoms:BottomsService,public tops:TopsService,public outers:OuterService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized <- Here!
    //console.log(this.dustBox.ngAfterViewInit.id)
  }

  // dragEnd($event:CdkDragEnd) {  
  dragEnd($event:CdkDragMove) {  
  //dragEnd($event: CdkDragDrop<string[]>) {
    // console.log($event.source.getFreeDragPosition())
    // console.log($event.pointerPosition)
    // console.log($event.source)
    // const { offsetLeft, offsetTop } = $event.source.element.nativeElement;
    // const { x, y } = $event.distance;
    // var positionX = offsetLeft + x;
    // var positionY = offsetTop + y;
    // // this.showPopup = true;
    // if($event.pointerPosition.y <150 && $event.pointerPosition.y > 50){
    //   if($event.pointerPosition.x >1200 && $event.pointerPosition.x < 1400){
    //     console.log("入りました！")
    //     console.log(this.selectTops)
    //   }
    // }
    // console.log("OK")
    // console.log($event)
    // console.log($event.source.element.nativeElement.id)  
    // console.log($event.pointerPosition.x)
    // console.log($event.pointerPosition.y)
    // console.log($event.source.element.nativeElement.innerText)
    if($event.pointerPosition.x <=300 && $event.pointerPosition.x >= 250){
      if($event.pointerPosition.y <= 130 && $event.pointerPosition.y >= 80){
        console.log("ゴミ箱へ")
        var loop:number = 0
        console.log(this.tops.topes[loop])
        while(this.tops.topes.length >= loop){
          if(this.tops.topes[loop].no.toString() == $event.source.element.nativeElement.id){
            console.log("ゴミ箱へ2")
            this.tops.topes.splice(loop,1)
            break
          }
          loop = loop + 1
        }
      }
    }
    // console.log($event.source.element.nativeElement.innerText)
  }

  addButtonClick(){
    //トップスが選択されている場合
    if(this.value == '001'){
      var selectTops:cloth = {
        no:0,
        brand:"",
        kind:"",
        color:"",
        size:38
       }
      console.log(this.topsNum)
      selectTops.kind =  'tops'+this.topsNum.toString()
      selectTops.no = this.topsNum
      this.topsNum = this.topsNum + 1;
      this.tops.topes.push(selectTops);
      console.log(this.tops.topes);
    }
    //ボトムスが選択されている場合
    if(this.value == '002'){
      var selectBottoms:cloth = {
        no:0,
        brand:"",
        kind:"",
        color:"",
        size:38
       }
      console.log(this.bottomsNum)
      selectBottoms.kind =  'bottoms'+this.bottomsNum.toString()
      selectBottoms.no = this.bottomsNum
      this.bottomsNum = this.bottomsNum + 1;
      this.bottoms.bottomses.push(selectBottoms);
      console.log(this.bottoms.bottomses);
    }
    //アウターが選択されている場合
    if(this.value == '003'){
      var selectOuter:cloth = {
        no:0,
        brand:"",
        kind:"",
        color:"",
        size:38
       }
      console.log(this.outerNum)
      selectOuter.kind =  'outer'+this.outerNum.toString()
      selectOuter.no = this.outerNum
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
