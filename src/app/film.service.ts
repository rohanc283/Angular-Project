import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignIn } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private router: Router) { }
  loggedIn: boolean = false;
  searchQuery;
  private readonly userMock = new SignIn("rohan", "rohan");
  isauth = false;
  authenticate(signin) {
    if (this.check(signin)) {
      this.isauth = true;
      // let headerobj = new HeaderComponent(this, this.router,)
      this.router.navigate(['home']);

      return true;
    }
    this.isauth = false;
    return false;
  }
  addMovie(movie: Movies) {
    this.movie.push(movie);
    this.router.navigate(['home']);

  }
  private check(signin: SignIn): boolean {
    return this.email(signin.getUname()) && this.password(signin.getPass());
  }
  private email(uname: string): boolean {
    return uname == this.userMock.getUname();
  }
  private password(pass: string): boolean {
    return pass == this.userMock.getPass();

  }

  movie: Movies[] = [
    new Movies(1, "../../assets/Images/master.jpg", "Vijay-The Master",
      "Master is a 2021 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj."),
    new Movies(2, "../../assets/Images/Radhe.jpg", "Radhe",
      "Radhe: Your Most Wanted Bhai is a 2021 Indian Hindi-language action thriller film directed by Prabhu Deva and produced by Salman Khan, Sohail Khan"),
    new Movies(3, "../../assets/Images/tiger.jpg", "War",
      "War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj Films."),
    new Movies(4, "../../assets/Images/sahoo.jpg", "Sahoo",
      "Filmed simultaneously in Telugu, Tamil, and Hindi languages, it stars Prabhas and Shraddha Kapoor, marking the former's Hindi debut and the latter's debut .."),
    new Movies(5, "../../assets/Images/bhuj.jpg", "Bhuj",
      "Bhuj: The Pride of India is a 2021 Indian Hindi-language war film directed by Abhishek Dudhaiya. Set during the Indo-Pakistani War of 1971."),
    new Movies(6, "../../assets/Images/tiger.jpg", "Tiger",
      "Tiger Zinda Hai (transl. 'Tiger is alive') is a 2017 Indian action thriller espionage film directed by Ali Abbas Zafar and co-written with Neelesh Misra..")
  ]

}

class Movies {
  id: number
  img: string;
  title: string;
  description: string;
  constructor(id: number, img: string, title: string, description: string) {
    this.img = img;
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
