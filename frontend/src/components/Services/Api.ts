import axios from 'axios';
import { IVideo } from './IVideo';

const baseURL = 'http://localhost:5000/api/videos';

export const getVideos = async () => {
    return await axios.get(baseURL);
};

export const getVideoById = async (id: number) => {
    return await axios.get(baseURL + id);
};

export const createVideo = async (video: IVideo) => {
    return await axios.post(baseURL, video);
};

export const updateVideo = async (id: number, videoUpdate: IVideo) => {
    return await axios.put(baseURL + id, videoUpdate);
};

export const deleteVideo = async (id: number) => {
    return await axios.delete(baseURL + id);
};
