import express from 'express';
import mongoose from 'mongoose';

import Videos from "../Models/videoRequestsModel.js";

const router = express.Router();

export const getVideo = async (req, res) => {
    const { id } = req.params;

    try {
        const video = await Videos.findById(id);
        console.log(video);
        res.status(200).json(video);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllVideos = async (req, res) => {
    try {
        const video = await Videos.find();
        console.log(video);
        res.status(200).json(video);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createVideo = async (req, res) => {
    const video = req.body;
    const newVideo = new Videos(video);

    try {
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateVideo = async (req, res) => {
    const { id } = req.params;
    const video = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No video with id: ${id}`);

    const updatedPost = { ...video, _id: id };

    await Videos.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}


export const deleteVideo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No video with id: ${id}`);

    await Videos.findByIdAndRemove(id);

    res.json({ message: "video deleted successfully." });
}

export default router;
