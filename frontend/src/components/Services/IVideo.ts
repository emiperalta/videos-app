export interface IVideo {
    createdAt: string;
    description: string;
    title: string;
    updatedAt: string;
    url: string;
    _id: string;
}

export interface Props {
    video: IVideo;
}
