import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnDestroy, OnChanges {

   @Input ()personName: string;

   @Output() named: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log("calling OnInit of life cycle component");
  }

 

  get name(): string{
return this.personName;
  }

  set(value: string): void {
    this.personName= value;
 
  }

  ngOnDestroy(){
    console.log("on destroy of child class called");
  }

  ngOnChanges(){
  //  this.personName= "HTML";
    console.log("onChanges called of child classs");
  }
  
  callNamed(){
    this.named.emit('child class'); 
    console.log("value send");
  
   }

}
