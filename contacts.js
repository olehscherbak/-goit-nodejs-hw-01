const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

function listContacts() {
  // ...твій код

  fs.readFile(contactsPath)
    .then((data) => {
      JSON.parse(data.toString());
    })
    .catch((err) => console.log("error: ", err.message));
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
