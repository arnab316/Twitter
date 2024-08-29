import UserService from "../services/user-service.js";

const userService = new UserService();


export const singup = async(req, res)=>{

    try {
        const response = await userService.singup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        res.status(201).json({
        success: true,
            data: response,
            message: "User created successfully",
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            error: error.message || "Something went wrong"
        })
    }
}