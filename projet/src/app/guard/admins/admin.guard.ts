import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ShareServiceService } from '../../service/share-service.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class adminGuard{
  VerifAdmin:boolean;
  constructor(private router : Router,private share:ShareServiceService)
  {
    this.VerifAdmin=this.share.isAdmin;
    

  }
  CanActivateFn(route:ActivatedRouteSnapshot , state:RouterStateSnapshot)  {
    return new Promise((resolve,reject)=>{
      if (this.VerifAdmin){
        resolve(true);

      }
      else{
        this.router.navigate(['/']);
        resolve(false);
      }
    })
  };
} 
