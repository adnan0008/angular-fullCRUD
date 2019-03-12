import { Component, OnInit, OnDestroy ,OnChanges} from '@angular/core';
import {Exponent} from '../exponent';

@Component({
  selector: 'app-exponent',
  templateUrl: './exponent.component.html',
  styleUrls: ['./exponent.component.css']
})
export class ExponentComponent implements OnInit ,  OnDestroy , OnChanges{
  
namedPerson="";

  exponents : Exponent= new Exponent();
  constructor() { }

  ngOnInit() {
    console.log("parent component on init caled");
  }


 

  recursive (expo: number ,base: number){

    //console.log("exponent", expo, "base", base);
let res=1;
if(base==0){
  return 0;
}
else if(expo==0)
{
  return 1;
}
else{
  while(expo>0){
    
    let p = res*base;
   // console.log("printing p ",p);
    --expo;
    res=p;
    this.recursive(base, expo);
  }
}
this.exponents= new Exponent();
return res;

  }




  recursion(expo: number, base: number){
   // console.log("expo in recuersion", expo, base );
    let result: number;
    result =  this.recursive(expo , base );
    console.log(result);
  }


  ngOnDestroy(){
    console.log("on destroy called of parent component");
  }

  onClick(message : string){
    console.log("parent life cycle class called now displaying ...", message);
    //console.log("it is clicked in exponent component");
  }
  ngOnChanges(){
    console.log("Onchanges called of parent class");
  }

}
