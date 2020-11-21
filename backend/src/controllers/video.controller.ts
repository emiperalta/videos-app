import { RequestHandler } from 'express';
import Video from '../models/Video';

export const getAllVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

export const getVideoById: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const video = await Video.findById(id);
        if (!video) return res.status(204).json({ error: 'Video not found' });

        return res.json(video);
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

export const createVideo: RequestHandler = async (req, res) => {
    try {
        const { title, description, url } = req.body; //deconstruction

        const videoFound = await Video.findOne({ url: url });
        if (videoFound) return res.status(301).json({ error: 'The URL already exists' });

        const newVideo = new Video({
            title: title,
            description: description,
            url: url
        });

        await newVideo.save();
        return res.json(newVideo);

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const { title, description, url } = req.body;
        const { id } = req.params;

        const update = new Video({
            title: title,
            description: description,
            url: url,
            _id: id
        })

        const videoUpdated = await Video.findByIdAndUpdate(id, update, { new: true });
        return res.json(videoUpdated);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await Video.deleteOne({ _id: id });

        return res.status(204).json({});
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}