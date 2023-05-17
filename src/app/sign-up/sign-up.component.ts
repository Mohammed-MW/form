import { Component } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  newUser: User = new User("", "", "", "");

  onSubmit(): void {


    console.log(this.newUser);

  }



}

export class User {

  constructor(

    public email: string,

    public firstname: string,

    public lastname: string,

    public password: any

  ) { }

}
