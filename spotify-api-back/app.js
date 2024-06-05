const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// mongoose
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

 
  const kittySchema = new mongoose.Schema({
    name: String
  });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };
  const Kitten = mongoose.model('Kitten', kittySchema);
  
  const fluffy = new Kitten({ name: 'fluffy' });
  await fluffy.save();
  fluffy.speak(); // "Meow name is fluffy"

  const kittens = await Kitten.find();
  console.log(kittens);

  await Kitten.find({ name: /^fluff/ });
}
