import User from "../models/user.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin, role, title } = req.body;
        
        const UserExit = await User.findOne({ email });
        if (userExit) {
            return res.status(400).json({
                status: false,
                message: "User already exits",
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            isAdmin,
            role,
            title
        });
        if (user) {
            isAdmin ? createJWT(res, user._id) : null;
            user.password = undefined;
            res.status(201).json(user);
        } else {
            return res
                .status(400)
                .json({ status: false, message: "Invalid user data" });
        }
    } catch (error) {
        return res
            .status(400)
            .json({ status: false, message: error.message });
    }
};