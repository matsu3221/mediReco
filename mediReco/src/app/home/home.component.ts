import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {CdkDragDrop,CdkDrag,CdkDragEnd} from '@angular/cdk/drag-drop';
import {Object} from '../object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Objects: Object[] =[
    {name: 'aaa'},
    {name: 'bbb'}
  ]

  constructor() { 
    var Objects: Object[] =[
      {name: 'aaa'},
      {name: 'bbb'}
    ]
  }

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
    console.log("add!")  
  }
}
