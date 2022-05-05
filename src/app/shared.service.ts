import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:3000/';

 


  createNewHero(hero: any){

   return this.http.post( this.url + 'hero/create' , hero );

  }


  getAllHeros(){

    return this.http.get( this.url + 'hero/all' );

  }

  deleteHero(id: any){
    return this.http.delete( this.url + 'hero/supprimer/' + id );
  }

  getHeroById(id: any){
    return this.http.get(this.url + 'hero/getbyid/' + id);
  }

  updateHero(id: any , hero: any){
    return this.http.put(this.url + 'hero/update/' + id , hero);
  }

}
