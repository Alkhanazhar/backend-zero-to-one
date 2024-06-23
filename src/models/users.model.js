import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    },
    avatar: {
        type: String,

    },
    coverImage: {
        type: String,
        required: true

    },
    watchHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }],



}, { timestamps: true })

userSchema.pre("save", async (req, res, next) => {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next();
})
userSchema.methods.isPasswordCorrect = async (password) => {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async () => {
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
        email: this.email, fullName: this.fullName
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2d" })
}

userSchema.methods.generateRefreshToken = async () => {
    return jwt.sign({
        _id: this._id,
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "12d" })
}


export const User = mongoose.model("User", userSchema)

