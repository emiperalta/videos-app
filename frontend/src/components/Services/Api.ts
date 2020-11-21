import axios from 'axios';

const baseURL = 'http://localhost:5000/api/videos';

export const getVideos = async () => {
    return await axios.get(baseURL);
};

export const getVideoById = async (id: number) => {
    return await axios.get(baseURL + id);
};

export const createVideo = async (video: object) => {
    return await axios.post(baseURL, video);
};

export const updateVideo = async (id: number, videoUpdate: object) => {
    return await axios.put(baseURL + id, videoUpdate);
};

export const deleteVideo = async (id: number) => {
    return await axios.delete(baseURL + id);
};
