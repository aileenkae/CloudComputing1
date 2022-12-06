const mongoose = require ('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/projectDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
    username: String,
    name: String,
    googleId: String,
    secret: String
  });

  const User = new mongoose.model("User", userSchema);