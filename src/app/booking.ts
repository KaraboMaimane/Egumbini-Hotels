export class Booking{
    suiteName;
    suitePrice: number;
    name;
    surname;
    idNo; 
    bDateFrom;
    bDateTo;
    tenantsNo: number;
    email;

    constructor(name, surname, idNo, bDateFrom, bDateTo, tenantsNo, emailAddress, suiteName, suitePrice){
        this.name = name;
        this.surname = surname;
        this.idNo = idNo;
        this.bDateFrom = bDateFrom;
        this.bDateTo =  bDateTo;
        this.tenantsNo = tenantsNo;
        this.email = emailAddress;
        this.suiteName = suiteName;
        this.suitePrice = suitePrice;
    }
}