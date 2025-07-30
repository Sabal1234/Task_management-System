import mongoose from "mongoose";
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connection established");
    } catch (error) {
        console.log("Database Error:" + error);
    }
};
export default dbConnection;