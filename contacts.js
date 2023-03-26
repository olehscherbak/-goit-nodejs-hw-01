const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

async function listContacts() {
  // ...твій код

  await fs
    .readFile(contactsPath)
    .then((data) => {
      console.log(JSON.parse(data.toString()));
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
