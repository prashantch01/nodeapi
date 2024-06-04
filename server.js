const app = require("./app.js");
const connectdb = require('./models/user.js');

connectdb();


app.listen(4900 , (req , res)=>{
    console.log(`listening at port 4900 in ${process.env.NODE_ENV} mode`);
})