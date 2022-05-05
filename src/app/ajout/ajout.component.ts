import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  hero = {
    name: '',
    power: 0,
  }

  image :any;

  selectImage(e:any){
    this.image = e.target.files[0];
    console.log(this.image);
    
  }

  ajout(){

    let formData = new FormData()
    formData.append('name' , this.hero.name)
    formData.append('power' , this.hero.power.toString())
    formData.append('image' , this.image)

   
    this._shared.createNewHero(formData)
      .subscribe(
        res=>{
          this.hero = {
            name: '',
            power: 0,
          }
          
        },
        err=>{
          console.log(err);
          
        }
      );
    
  }


  constructor(public _shared: SharedService) { }

  ngOnInit(): void {
  }

}
