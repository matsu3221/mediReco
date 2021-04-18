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
  selector: 'app-coordination',
  templateUrl: './coordination.component.html',
  styleUrls: ['./coordination.component.css']
})
export class CoordinationComponent implements OnInit {

  doresses = [
    {value: '001', viewValue: 'トップス'},
    {value: '002', viewValue: 'ボトムス'},
    {value: '003', viewValue: 'アウター'}
    ];
  show:boolean = false
  doress:doress;
  viewCloseList:cloth[]
  selectedValue:string

  constructor(public objectService:ObjectService,public bottoms:BottomsService,public tops:TopsService,public outers:OuterService) { }

  ngOnInit(): void {
  }

  getSelectedValue($event: MatSelectChange){
    console.log("チェンジ")
    this.selectedValue = $event.value
  }

  viewButtonClick(){
    console.log(this.selectedValue)
    this.show = true
    if(this.selectedValue == "001"){
      this.viewCloseList = this.tops.getClothes()
      console.log("OK")
    }
    console.log(this.viewCloseList)
  }

}
