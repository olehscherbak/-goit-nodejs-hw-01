const fs = require("fs").promises;
const { log } = require("console");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const list = await listContacts();

  let result;
  if (!contactId) {
    return "\x1B[31m id is not defined";
  } else {
    result = list.find((item) => contactId === item.id);
  }

  return !result ? `\x1B[31m no contact with id ${contactId}` : result;
}

async function removeContact(contactId) {
  const list = await listContacts();
  if (!contactId) {
    console.log("\x1B[31m id is not defined");
    return {};
  }
  const index = list.findIndex((item) => contactId === item.id);
  if (index !== -1) {
    const [result] = list.splice(index, 1);
    fs.writeFile(contactsPath, JSON.stringify(list));
    return result;
  } else {
    console.log(`\x1B[31m no contact with id ${contactId}`);
    return {};
  }
}

async function addContact(name, email, phone) {
  const argList = [...arguments];
  const argsValid = argList.every((argument) => Boolean(argument));

  if (!argsValid) {
    console.log("\x1B[31m required arguments are missed");
    return {};
  }
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  const list = await listContacts();
  list.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(list));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
