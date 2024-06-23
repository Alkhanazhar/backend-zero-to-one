import { asyncHandler } from "../utils/asynchandler.js";

export const registerController = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "success" })
})

export const loginController = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "success" })

})