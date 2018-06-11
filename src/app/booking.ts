export class Booking{
    suiteName;
    suitePrice;
    name;
    surname;
    idNo; 
    bDateFrom;
    bDateTo;
    tenantsNo;
    email;

    constructor(name, surname, idNo, bDateFrom, bDateTo, tenantsNo, emailAddress) {
        this.name = name;
        this.surname = surname;
        this.idNo = idNo;
        this.bDateFrom = bDateFrom;
        this.bDateTo =  bDateTo;
        this.tenantsNo = tenantsNo;
        this.email = emailAddress;
    }
}