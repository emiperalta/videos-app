import axios from 'axios';
import { IVideo } from './IVideo';

const baseURL = 'http://localhost:5000/api/videos';

export const getVideos = async () => {
    return await axios.get<IVideo[]>(baseURL);
};

export const getVideoById = async (id: string) => {
    return await axios.get<IVideo>(baseURL + '/' + id);
};

export const createVideo = async (video: IVideo) => {
    return await axios.post<IVideo>(baseURL, video);
};

export const updateVideo = async (id: string, videoUpdate: IVideo) => {
    return await axios.put<IVideo>(baseURL + '/' + id, videoUpdate);
};

export const deleteVideo = async (id: string) => {
    return await axios.delete<IVideo>(baseURL + '/' + id);
};
