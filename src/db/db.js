const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://mahawarkhushi3:<kyara2011>@cluster0.tz3zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
