
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret // Click 'View Credentials' below to copy your API secret
});

export const cloudinaryUploader = async (localPath) => {
    if (!localPath) return null;
    try {
        const res = await cloudinary.uploader.upload(localPath, {
            resource_type: 'auto'
        })
        console.log('Upload successful', res.url)
        return res
    } catch (error) {
        fs.unlinkSync(localPath)

    }
}