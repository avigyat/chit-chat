const mongoose = require('mongoose');

 const UsersSchema = mongoose.Schema({
    email: {type:email, unique:true},
    password: String
 },{timestamps:true})

 export const UserModel = mongoose.model('Users', UsersSchema )
