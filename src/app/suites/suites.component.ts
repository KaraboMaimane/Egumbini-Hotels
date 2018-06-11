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

    bookingsPush(){
      let suiteName = 'Hotel Beladonna';
      let booking = new Booking(this.name, this.surname, this.idNo, this.dateFrom, this.dateTo, this.tenants ,this.email);
      bookingslist.push(booking);
    }
}
