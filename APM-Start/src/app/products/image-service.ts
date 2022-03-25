import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ImageService {
    imageUrl:string = 'https://jsonplaceholder.typicode.com/photos'

    constructor(private http:HttpClient){

    }

    getImages(){
        const was = this.http.get(this.imageUrl)
      return  was;
    }

}