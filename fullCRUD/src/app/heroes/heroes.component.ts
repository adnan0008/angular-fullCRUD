import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
 
 herooes: Hero[];
 shero:Hero[]=HEROES;
  d:Hero;
  hero: Hero = new Hero();
 
  
  constructor(private heroservice: HeroService, public loalStorage: LocalStorage) { }

  ngOnInit() {
 // this.setHero();
    this.getHeroes();
  }


  onSelect(hero: Hero) {
  
    this.selectedHero = hero;
    console.log(this.selectedHero);
    this.hero = this.selectedHero;

   
  }
  setHero(){
    window.localStorage.setItem('keyvalue', JSON.stringify(this.shero));
  }

  setHeroes(hero:Hero) {
    if(hero.id==null){
      alert('add id to add');
    }
    else if(hero.firstname==null){
      alert('write name kindly');
    }
    else{
      this.herooes.push(hero);
    window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
    this.hero = new Hero();
    }
    
 //console.log(hero);
  //  if(hero.id==null ){
   //   alert('add id to add');
   // }
   // else if(hero.firstname==null){
   //   alert('write name kindly');
   // }
   // else{ 
   // debugger
      //this.herooes.push(this.hero);
    //before  window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
      //before this.hero = new Hero();
   // }
    //console.log(this.hero);
   // if(this.herooes.find(d => d.id !== this.hero.id)){
   
    //  window.localStorage.setItem('keyvalue',JSON.stringify(name));
   
    //this.hero=new Hero();
  //}//else{

  //}
   
}


getHero(id: number) {
 
  console.log(id);
    if(id==null ){
     alert('add id first');
   }
    else { 
      this.hero = this.herooes.filter(d => d.id === id)[0];
      console.log(this.hero);
    }
 // if (this.herooes.find(d => d.id === id)) {
   
   
 // }
 // else{
    
 // }

}
getHeroes(): void {
  //debugger
  let p = JSON.parse(localStorage.getItem('keyvalue'));
  this.herooes = p;
 console.log(p);
}

removed(id:number) {
 // debugger
// console.log(">>>>>>>");
if(id==null){
  alert('add it to remove');
}else{
  let a = id.toString();
  let sp= a.split(',');
  console.log(sp);
  let nmber= sp.map(Number);
  //console.log("printing new nmber "+ nmber);
  
  //console.log(">>>>>>>");
 for(let i =0; i<nmber.length; i++){
    if(nmber[i]==nmber[i]){
      this.herooes = this.herooes.filter(d => d.id != nmber[i]);
      window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
      this.hero=new Hero();
    
    }
  
 
 }
}


 /*
    let y = id.toString();
let z= y.replace(",","");
let arr = new Array();
for(let i =0; i<z.length ; i++){
  console.log('assigning z', z[i]);
 arr[i]=z[i];
 console.log('assigning arr[i]', arr[i]);
*/
 //console.log('assigning arr[i] to z ', arr[i]);
 /*for(let b =0 ;b<100; b++){
   if(arr[i]==b){
     arr[i]=arr[i+1];
     console.log('arr[i] to arr[i+1]'+ arr[i]);
   }
 }*/
//if(arr[i]==id){

//this.herooes = this.herooes.filter(d=> d.id !==id);
//window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
//}


 //let t=  this.herooes.pop();
 //console.log('value of t '+t);
  //window.localStorage.setItem('keyvalue', JSON.stringify(t));


//console.log('assigning', arr[i]);
//console.log('value of z[i]'+ z[i]);

console.log("--------");
//}

  
  //console.log("printing delete values" +id);
/*
  this.herooes = this.herooes.filter(d => d.id != id);
  window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
  this.hero=new Hero();
*/
  
  // window.localStorage.removeItem('keyvalue');
}

update(id : number) {
  if(id==null){
   alert('add id kindly');
 }
 else{
    console.log(id);

  this.herooes = this.herooes.filter(d => d.id !== this.hero.id);
  this.herooes.push(this.hero);
  
  window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
  }
  
  //this.heroservice.update()
}

delete(hero: Hero){
  
  this.herooes= this.herooes.filter(h => h!== hero);
  window.localStorage.setItem('keyvalue', JSON.stringify(this.herooes));
}




}