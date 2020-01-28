function leapYear(year:number):string {
    if(year%400==0&&year%100!=0){
        return "Leap Year"
    }else if(year%4==0&&year%100!=0){
        return "Leap Year"
    }
    else {
        return "Not a Leap Year";
    }
}
console.log(leapYear(1996));