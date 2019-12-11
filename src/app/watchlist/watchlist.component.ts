import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  movies=[];
  constructor(private auth: AuthService, private http: HttpClient) { }
  posters=[];
  titles=[];
  movieArray=[];
  ngOnInit() {
    this.movies=JSON.parse(window.sessionStorage.getItem(this.auth.userId));
    console.log(this.movies);
    for(var i=0; i< this.movies.length; i++){
      var response, responseSearch;
      var url=`http://www.omdbapi.com/?apikey=a54507f1&s=${this.movies[i]}`;
      this.http.get(url).subscribe(data => {
        response=data;
        responseSearch=response.Search[0];
        this.movieArray.push(responseSearch);
      });
    }
    console.log(this.movieArray);
  }
  remove(event){
    console.log(event);
    
    event.target.previousElementSibling.visibility='hidden';
  //   var user=this.auth.userId;
  //   var arr=window.sessionStorage[String(user)];
  //   console.log(arr);
    
  //   for( var i = 0; i < arr.length; i++){ 
  //     if ( arr[i] === title) {
  //       arr.splice(i, 1);
  //     }
  //  }
  //  console.log(arr);
   
  }

}
