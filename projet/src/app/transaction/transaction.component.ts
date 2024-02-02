import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ShareServiceService } from '../service/share-service.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent  implements OnDestroy {
  add(f:NgForm){
    console.log(f.form);

  }
  dataArray:any;
  myForm:any;
  num:any;
  ob:Subscription;
  dateAujourdhui:string
  transform(dateObj:Date){
    const day: number = dateObj.getDate();
    const month: number = dateObj.getMonth() + 1; // Notez que getMonth() renvoie les mois de 0 à 11
    const year: number = dateObj.getFullYear();

  // Formater la date sous la forme "jour/mois/année"
  const formattedDate: string = `${day}/${month}/${year}`;
  return formattedDate
  }
  constructor( private formbuilder:FormBuilder,private share:ShareServiceService,private ds:DataService,private http:HttpClient,private location: Location,private router:Router){
    const date = new Date();
    this.dateAujourdhui=this.transform(date);
   this.ob= this.share.testObservable().subscribe(val => this.num=val);
    this.myForm=this.formbuilder.group({
      cin:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      carta:['',Validators.required],
      montant:['',[Validators.required,Validators.min(1) ]],
      etat:['en attente'],
      date:[this.dateAujourdhui],
      // form array
      /*items:this.formbuilder.array([
        
      ])*/
      
    })
    this.ds.getalltrans().subscribe((data: any) => {
      
    this.dataArray=data.data});
  }
  ngOnDestroy(){
    this.ob.unsubscribe()
  }
  addnewitem(){
    let newRows=this.formbuilder.group({
      id:[''],
      title:[''],montant:['']
    })
    const itemsArray = this.myForm.get('items') as FormArray;
  
    // Ajoutez la nouvelle ligne au FormArray
    itemsArray.push(newRows);
    //this.items.push(newRows)
  }
 /* myForm=new FormGroup({

    fname:new FormControl,
    Age:new FormControl,
    Firstname:new FormControl
})*/

  print(){
    return  console.log (this.myForm.value)
  }
  msg:any;
  addtrans(f:any){
    let data=(f.value);
    console.log(data);
    this.ds.posttrans(data).subscribe(data => this.msg=data);
    
    this.router.navigate(['/card'])
  }
  getCIN(){
    return this.myForm.get('cin');
  }
  getNumero(){
    return this.myForm.get('carta');
  }
  /*delete(i:any ){
    const itemsArray = this.myForm.get('items') as FormArray;
    itemsArray.removeAt(i);
  }*/
  @Output() myEvent=new EventEmitter();
  esm="malek";
  printe(){
    this.myEvent.emit(this.esm)
  }
}
