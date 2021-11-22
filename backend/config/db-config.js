const mongoose = require("mongoose");
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const connection = () => {
    return new Promise((res) => {
        mongoose.connect(process.env.MONGO_URI, config);
        const connection = mongoose.connection;
        connection.once("open", () => {
            console.log("Database connected");
            res(true);
        });
    });
};
module.exports = connection;