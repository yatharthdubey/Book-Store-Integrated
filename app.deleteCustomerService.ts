
import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class deleteCustomerService{

    customerUrl:string;

    customerId:string;
    constructor(private http: HttpClient){
        }
        public deleteCustomer(deleteId:string){
            debugger;
            return this.http.delete('http://localhost:8089/deleteCustomer/'+deleteId);

        }
    public getAllCustomer(): any{


const headers= new HttpHeaders({'Content-Type':'text/plain'});
var customers= this.http.get('http://localhost:8089/showAllCustomers');
return customers;

    }
    
}