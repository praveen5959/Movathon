import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public movieService: MovieService, private http: HttpClient, public auth:  AuthService,private router: Router) { }
  movieSearch: string;
  data;
  dataSearch;
  title: string;
  testArray=[];
  ngOnInit() {
    
  }
 
  wishlist(e){
    var title=e.target.previousElementSibling.previousSibling.innerText;
    
    this.testArray.push(title);
    // console.log(this.testArray);
    window.sessionStorage.setItem(this.auth.userId,JSON.stringify(this.testArray));
    alert('Added to WatchList');
    
  }
  redirectToWatchlist(){
    this.router.navigate(['watchList']);
  }
  onSubmit(){
    console.log(this.movieSearch);
    var url=`http://www.omdbapi.com/?apikey=a54507f1&s=${this.movieSearch}`;
    this.http.get(url).subscribe(response => {
      this.data = response;
      this.dataSearch=this.data.Search;
      console.log(this.data.Search);
  });
}    
signOut(){
  this.auth.signOut();
}
  
}
