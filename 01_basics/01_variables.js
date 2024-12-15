const accountId = 144558
let accountEmail = "Sharon@gmail.com"
var accountPassword ="12345"
accountCity = "Sanpada"
let accountState;              //undefined 

// accountId = 2  //  not allowed to change const

accountEmail= "sh@sh.gmail.com"
accountPassword ="2231"
accountCity ="Bengluru"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])