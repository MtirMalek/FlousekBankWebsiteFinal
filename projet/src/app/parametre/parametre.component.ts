import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ShareServiceService } from '../service/share-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.css'
})
export class ParametreComponent implements OnDestroy{
  add(f:NgForm){
    console.log(f.form);

  }
  myForm:any;
  num:any;
  ob:Subscription;
  constructor( private formbuilder:FormBuilder,private share:ShareServiceService){
   this.ob= this.share.testObservable().subscribe(val => this.num=val);
    this.myForm=this.formbuilder.group({
      CIN:['',[Validators.required,Validators.max(99999999),Validators.min(10000000)]],
      Numero:['',Validators.required],
      Montant:['',[Validators.required,Validators.min(1) ]],
      // form array
      items:this.formbuilder.array([
        
      ])
    })
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
    console.log(this.myForm.value)
  }
  getCIN(){
    return this.myForm.get('CIN');
  }
  getNumero(){
    return this.myForm.get('Numero');
  }
  delete(i:any ){
    const itemsArray = this.myForm.get('items') as FormArray;
    itemsArray.removeAt(i);
  }
}
