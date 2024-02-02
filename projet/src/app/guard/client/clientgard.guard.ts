import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ShareServiceService } from '../../service/share-service.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class clientgardGuard{

  VerifAdmin=true;
  constructor(private router : Router,private share:ShareServiceService)
  {
    this.VerifAdmin=share.isAdmin;

  }
  CanActivateFn(route:ActivatedRouteSnapshot , state:RouterStateSnapshot)  {
    return new Promise((resolve,rejct)=>{
      if (! this.VerifAdmin){
        resolve(true);

      }
      else{
        this.router.navigate(['/homeadmin']);
        resolve(false);
      }
    })
  };
}
