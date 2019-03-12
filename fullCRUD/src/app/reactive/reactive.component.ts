import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Hero } from '../hero';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 shero:Hero[] =HEROES;
 
  rHero: Hero[];
 reactive: Hero;
react ='';
  constructor(public localStorage: LocalStorage) { }

  ngOnInit() {
    //this.setHero();
    this.getHeroes();
  }

  public fileForm: FormGroup= new FormGroup({
      id  : new FormControl(""),
     firstname : new FormControl(""),
  });


   set(values:Hero) {

   if(values.id==null){
     alert('add id in the box');
   }
   else if(values.firstname==null){
    alert('add name to the text box');
  }
   else{
  this.rHero.push(values);
   window.localStorage.setItem('keyvalue', JSON.stringify(this.rHero));
  
 
  }

   
}

setHero(){
  window.localStorage.setItem('keyvalue', JSON.stringify(this.shero));
}


getHeroes(): void {
 
  let p = JSON.parse(localStorage.getItem('keyvalue'));
  this.rHero = p;
 //console.log(p);
}

  get(id: number){
    this.reactive = this.rHero.filter(d => d.id === id)[0];
    console.log(this.reactive);
  }


  removing(id: number){
    if(id==null){
      alert('add it to remove');
    }else{
      this.rHero = this.rHero.filter(d => d.id != id);
      window.localStorage.setItem('keyvalue', JSON.stringify(this.rHero));
 
      
    
   
    }
  }


  updating(values: Hero){
    this.rHero = this.rHero.filter(d => d.id !== values.id);
    this.rHero.push(values);
    window.localStorage.setItem('keyvalue', JSON.stringify(this.rHero));
   
  }

  
}
