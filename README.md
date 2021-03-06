# Work with mongoose

## connect to mongodb

```js 
const mongoose = require('mongoose');

const main = async () =>
  await mongoose.connect('mongodb://localhost:27017');

```

## create schema and model

```js
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
```

## create user
```js
const user = new User({
  name: 'John',
  age: 30,
  email: 'john@email.com',
  password: '123'
});

user.save()
  .then(() => console.log('User created!'))
  .catch(err => console.log(err));

```

## find users
```js
User.find({})
  .then(users => console.log(users))
  .catch(err => console.log(err));
```

## update user
```js
User.findOneAndUpdate({ name: 'John' }, { name: 'John Doe' })
  .then(user => console.log(user))
  .catch(err => console.log(err));
```

## delete user
```js
User.findOneAndRemove({ name: 'John Doe' })
  .then(user => console.log(user))
  .catch(err => console.log(err));
```

## disconnect
```js
mongoose.disconnect();
```


