//stack(primitive), heap(non primitive)
//1)
let myName ="sharon"
let anotherName = myName
anotherName = "chitapye"

console.log(anotherName)
console.log(myName)

//2)
let user ={
    emailId:"sharon@gmail.com",
    upi:"user@ybl"
}

let userTwo=user

userTwo.emailId = "sharon01@gamil.com"

console.log(user.emailId)
console.log(userTwo.emailId)