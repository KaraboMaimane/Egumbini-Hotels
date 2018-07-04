import { Component} from '@angular/core';
import bookingslist from '../arrays';
import { Booking } from '../booking';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.css']
})
export class SuitesComponent{
    //setting up my variables that will go to my array
    suiteName;
    name;
    surname;
    idNo;
    dateFrom;
    dateTo;
    tenants;
    email;

    inputName(event){
      this.name = event.target.value;
    }

    inputSurname(event){
      this.surname = event.target.value;
    }
    
    inputIdNo(event){
      this.idNo = event.target.value;
    }

    inputDateFrom(event){
      this.dateFrom = event.target.value;
    }

    inputDateTo(event){
      this.dateTo = event.target.value;
    }


    inputTenants(event){
      this.tenants = event.target.value;
    }

    inputEmail(event){
      this.email = event.target.value;
    }

    //this is our push method that is going to accept suite price and
    //als suite name as parameters

    
    bookingsPush1(SuiteName, SuitePrice){
      SuiteName = "Hotel Belladonna";
      SuitePrice = 1500;
      console.log(SuitePrice);
      /*we have a class(booking.ts) below that will be instatiated by these parameters from
      name - email. the important parameters here are suiteprice and suitename above
      these values are hardcoded into our button so that we get the price of our suite*/
      let booking = new Booking(this.name, this.surname, this.idNo, this.dateFrom, this.dateTo, this.tenants ,this.email, SuiteName, SuitePrice);
      /**/
      bookingslist.push(booking);
    }

    bookingsPush2(SuiteName, SuitePrice){
      SuiteName = "Hotel Villa Rosa";
      SuitePrice = 4579;
      console.log(SuitePrice);
      let booking = new Booking(this.name, this.surname, this.idNo, this.dateFrom, this.dateTo, this.tenants ,this.email, SuiteName, SuitePrice);
      bookingslist.push(booking);
    }

    bookingsPush3(SuiteName, SuitePrice){
      SuiteName = "Hotel Mhlangeni";
      SuitePrice = 5000;
      console.log(SuitePrice);
      let booking = new Booking(this.name, this.surname, this.idNo, this.dateFrom, this.dateTo, this.tenants ,this.email, SuiteName, SuitePrice);
      bookingslist.push(booking);
    }

    bookingsPush4(SuiteName, SuitePrice){
      SuiteName = "Hotel Khaya";
      SuitePrice = 6000;
      console.log(SuitePrice);
      let booking = new Booking(this.name, this.surname, this.idNo, this.dateFrom, this.dateTo, this.tenants ,this.email, SuiteName, SuitePrice);
      bookingslist.push(booking);
    }

}
