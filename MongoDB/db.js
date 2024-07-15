const mongoose = require("mongoose")

const connection = "mongodb+srv://Siphamandla:siphabili@nodejsclustersiphamandl.hqu1udp.mongodb.net/task-manager?retryWrites=true&w=majority&appName=NodejsClusterSiphamandla"


const connectToDatabase = async ()=> {
    try {
        await mongoose.connect(connection,
        {
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        });
        console.log("connection done");
    } catch (error) {
        console.log(error);
    }
}


module.exports = {connectToDatabase};