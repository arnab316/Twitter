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

export const login = async(req, res)=>{
    try {
        const token = await userService.singin(req.body)
        res.json({
            success: true,
            data: token,
            message: "User logged in successfully",
            error: {}
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            data: {},
            error: error.message || "Invalid credentials"
        });
    }
}