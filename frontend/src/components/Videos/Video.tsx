import React from 'react';
import { IVideo, Props } from '../Services/IVideo';

const Video = (props: Props) => {
    return (
        <div>
            <h1>{props.video.title}</h1>
            <h1>{props.video.description}</h1>
            <h1>{props.video.url}</h1>
        </div>
    );
};

export default Video;
