// Clase usuario.


export class User {
 
    constructor(name, email, password, bornDate, phoneNumber, state, dateCreated) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.bornDate = bornDate;
        this.phoneNumber = phoneNumber;
        this.dateCreated = dateCreated;
        this.state = state; //False is when user are disabled (in this case, the user need to be confirmed)
    }

    //Methods

    showUser() {
        //Show information about the user in the console
        let user = ` 
        Name: ${this.name}
        Email: ${this.email}
        Born date: ${this.bornDate}
        Phone number: ${this.phoneNumber}
        State: ${this.state}
        `
        console.log(user);
    }


    // set userState(state){
    //     //When state is true, this is habilitated
    //     this.state = state;
    // }

    // get userState() {
    //     return this.state;
    // }
    

}