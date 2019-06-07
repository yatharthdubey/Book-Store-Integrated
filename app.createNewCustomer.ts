import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-createNewCustomer',
  templateUrl: './app.createNewCustomer.html',
 
})
export class createNewCustomer implements OnInit {

    fullName: string;
    
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;

    constructor(){}

    ngOnInit(){
        this.fullName='Fred Template';
        this.email='abc@gmail.com';
        this.password='12345678';
        this.confirmPassword='12345678';
        this.phoneNumber='12345678';
        this.address='abcdefgh';
        this.city='abcd';
        this.zipCode='123456';
        this.country='india';

    }

    onSubmit(){
        this.fullName=this.fullName;
        this.email= this.email;
        this.password=this.password;
    }


}

