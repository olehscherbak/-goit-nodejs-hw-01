const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

async function listContacts() {
  await fs
    .readFile(contactsPath)
    .then((data) => {
      const result = JSON.parse(data.toString());
      console.log(result);
    })
    .catch((err) => console.log("error: ", err.message));
}

async function getContactById(contactId) {
  await fs
    .readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());
      const contact = contacts.find((item) => item.id === contactId);
      console.log(contact);
    })
    .catch((err) => console.log("error: ", err.message));
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const newContactList = JSON.stringify(
    await contacts.filter((contact) => contact.id !== contactId)
  );

  await fs
    .writeFile(contactsPath, newContactList)
    .then(() => {
      console.log(`contact with id=${contactId} deleted successfully!`);
      console.log(newContactList);
    })
    .catch((err) => console.log("error: ", err.message));
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
