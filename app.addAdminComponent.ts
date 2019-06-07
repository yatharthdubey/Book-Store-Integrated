import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-addAdmin',
  templateUrl: './app.addAdminComponent.html',
 
})
export class addAdminComponent implements OnInit {

    fullName: string;
    
    email: string;
    password: string;

    constructor(){}

    ngOnInit(){
        this.fullName='Fred Template';
        this.email='abc@gmail.com';
        this.password='12345678';
    }

    onSubmit(){
        this.fullName=this.fullName;
        this.email= this.email;
        this.password=this.password;
    }
}