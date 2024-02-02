import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  data={
    name:'houssem',
    last:'bjawi',
    job:'ilawej ala bouh'
  };
  ss=""
  url="www.winoubouh.com";
  
  constructor(private route:ActivatedRoute) { 
    
  }
  fu(){
    const currentUrl = this.route.snapshot.url;
    return currentUrl.map(segment => segment.path).join('/');

  }
  print(){
    console.log(this.data.name);
    console.log(this.data.job);
    console.log(this.data.last);
    
  };
  isAdmin=false; //fct mel back
  affiche()
  {console.log(this.isAdmin);}
  
  testObservable()
  {
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next("left")
      },1000)
      setTimeout(()=>{
        observer.next("do it")
      },2000)
      setTimeout(()=>{
        observer.next("right")
      },3000)
      
      setTimeout(()=>{
        observer.next("do it")
      },4000)
    })
  }
}
