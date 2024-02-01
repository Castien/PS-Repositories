const contactsDiv = document.getElementById("contacts-list");
const form = document.querySelector('form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');

const contacts = [];
const contactLists = [];

class ContactList {
   #contacts = [];
   #id = new Date(Date.now());

   constructor(listName) {
        this.listName = listName
   }



    get getContacts() {
        this.#contacts
    }

    
}



// Contact Class
class Contact {
    #id = new Date(Date.now());
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date(Date.now());
    }

    get id() {
        return this.#id;
    }

    updateEmail(newEmail) {
        this.email = newEmail
    }

    toString() {
        console.log(`Contact name: ${this.name}, and email: ${this.email}`);
    }
}



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const newContact = new Contact(nameInput.value, emailInput.value);
    console.log(newContact);
    console.log(newContact.toString());
    
    contacts.push(newContact);
    console.log(contacts);

    displayContact();

    nameInput.value = '';
    emailInput.value = '';
});


function displayContact() {
    contacts.forEach(contact => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const h6 = document.createElement('h6');

        // adding the text
        h4.textContent = contact.name;
        h6.textContent = contact.email;

        // appending elements
        div.appendChild(h4);
        div.appendChild(h6);

        contactsDiv.appendChild(div);
    });
}