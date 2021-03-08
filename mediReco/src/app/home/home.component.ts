import { Component, OnInit } from '@angular/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';
import { Object } from '../object';
import { ObjectService } from '../object.service';
import { doress } from '../doress';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   selectObject:Object;
   objects:Object[] = [];
   addNum:number = 1;
   doress:doress;
   value:string="トップス";

   doresses = [
    {value: '001', viewValue: 'トップス'},
    {value: '002', viewValue: 'アウター'},
    {value: '003', viewValue: 'ボトム'},
    {value: '004', viewValue: 'バッグ'}
  ];

  constructor(private objectService:ObjectService) { }

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
    if(this.value == '001'){
      this.selectObject = {
        name:'add'+this.addNum.toString()
      }
      this.addNum = this.addNum + 1;
      this.objects.push(this.selectObject)
    }
  }

  getSelectedValue($event: MatSelectChange){
    this.value = $event.value
    console.log(this.value)
  }
}
