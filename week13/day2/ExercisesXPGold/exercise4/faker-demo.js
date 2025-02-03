const faker = require('faker');
const inquirer = require('inquirer')

let users = []

async function addFakeUser(){
  const fakeUser = {
      name: faker.name.findName(),
      addressStreet: faker.address.streetAddress(),
      country: faker.address.country()
    }
  users.push(fakeUser)
}

async function addRealUser(){
  const prompt = inquirer.createPromptModule()
  const answers = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'addressStreet',
      message: 'What is your street address?',
    },
    {
      type: 'input',
      name: 'country',
      message: 'Which country are you from?',
    },
  ])
  users.push(answers)
  
}
async function main() {
  await addFakeUser();
  await addFakeUser();
  await addRealUser();
  console.log(users);
}

main();
