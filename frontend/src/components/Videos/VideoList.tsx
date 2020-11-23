import React, { useState, useEffect } from 'react';
import Video from './Video';
import { IVideo } from '../Services/IVideo';
import * as Api from '../Services/Api';

const VideoList = () => {
    useEffect(() => {
        getVideos();
    }, []);

    const [videos, setVideos] = useState<IVideo[]>([]);

    const getVideos = async () => {
        const res = await Api.getVideos();
        setVideos(res.data);
    };

    return (
        <div className='row'>
            {videos.map(video => {
                return (
                    <Video
                        key={video._id}
                        video={video}
                        getVideos={getVideos}
                    />
                );
            })}
        </div>
    );
};

export default VideoList;
