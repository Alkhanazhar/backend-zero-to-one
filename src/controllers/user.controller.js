import { User } from "../models/users.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { cloudinaryUploader } from "../utils/cloudinary.js";

export const registerController = asyncHandler(async (req, res) => {
    const { userName, fullName, email, password } = req.body
    if ([userName, fullName, email, password].some((element) => element.trim() == "")) {
        throw new ErrorHandler(400, "All field is required")
    }
    const isExist = await User.findOne({ $or: [{ email }, { userName }] })
    res.status(200).json({ message: "success" })
    if (isExist) {
        throw new ErrorHandler(409, "User already exists")
    }
    const avatarLocal = req.files?.avatar[0]?.path
    const coverImageLocal = req.files?.coverImage[0]?.path
    if (!avatarLocal) {
        throw new ErrorHandler(400, "avatar does not exist")
    }
    const avatar = await cloudinaryUploader(avatarLocal)
    const coverImage = await cloudinaryUploader(coverImageLocal)
    if (!avatar) {
        throw new ErrorHandler(400, "avatar does not exist")
    }
    const user = await User.create({
        userName, email, password, avatar: avatar?.url, coverImage: coverImage?.url || ""
    })
    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    return res.status(201).json({ createdUser, message: "User created successfully" })

})

export const loginController = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "success" })

})