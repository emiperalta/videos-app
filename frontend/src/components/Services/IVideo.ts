import { ChangeEvent } from 'react';

export interface IVideo {
    createdAt?: string;
    description: string;
    title: string;
    updatedAt?: string;
    url: string;
    _id?: string;
}

export interface Props {
    video: IVideo;
    getVideos: () => void;
}

export interface Params {
    id: string;
}

export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
