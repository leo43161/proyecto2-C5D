// Clase usuario.


export class User {
 
    constructor(name, mail, password, bornDate, phoneNumber) {
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.bornDate = bornDate;
        this.phoneNumber = phoneNumber;
        this.state = false; //False is when user are disabled (in this case, the user need to be confirmed)
    }

    //Methods

    showUser() {
        //Show information about the user in the console
        let user = ` 
        Name: ${this.name}
        Mail: ${this.mail}
        Born date: ${this.bornDate}
        Phone number: ${this.phoneNumber}
        State: ${this.state}
        `
        console.log(user);
    }


    set userState(state){
        //When state is true, this is habilitated
        this.state = state;
    }

    get userState() {
        return this.state;
    }
    

}