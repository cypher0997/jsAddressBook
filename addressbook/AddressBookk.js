class AddressBook{
    constructor(FName,lName,address,city,state,zip,phoneNumber){
        outer:while(true){
            for(let i = 0;i<addressBook.length;i++){
                if(addressBook[i].fName == FName){
                    console.log( addressBook[i].fName+ " duplicate entry of same person not allowed")
                    break outer;
                }
            }
            this.fName = FName
            this.lName = lName
            this.address = address
            this.city = city
            this.state = state
            this.zip = zip
            this.phoneNumber = phoneNumber
            break;
        }
    }
}
let addressBook = []
let contactPerson1 = new AddressBook("anurag","bhardwaj","achrol","city","rajastha",4645,997877)
addressBook.push(contactPerson1)
let contactPerson2 = new AddressBook("rajat","bhardwaj","acghrol","city","rajastha",46458,9089890)
addressBook.push(contactPerson2)
let contactPerson3 = new AddressBook("rajat","bhardwaj","acghrol","city","rajastha",46458,9089890)
addressBook.push(contactPerson3)
 
for(let i = 0;i<addressBook.length;i++){
    if(addressBook[i].fName == "anurag"){
        addressBook[i].fName="dfsdf"
        addressBook[i].lName="dfsdfsd"
        addressBook[i].address="sdwsf"
        addressBook[i].city="dasfsdf"
        addressBook[i].state="dffsd"
        addressBook[i].zip=97788
        addressBook[i].phoneNumber=7867609
    }
}

 for(let i = 0;i<addressBook.length;i++){
    if(addressBook[i].fName == "dfsdf"){
        addressBook.splice(i,1)
    }
 }

 let length = addressBook.reduce((accumulator,currentValue)=>{
    accumulator += 1;
    return accumulator
 },0);
 console.log(length)
 