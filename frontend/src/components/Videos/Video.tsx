import React from 'react';
import ReactPlayer from 'react-player';
import { Props } from '../Services/IVideo';
import * as Api from '../Services/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './Video.css';
import { toast } from 'react-toastify';

const Video = (props: Props) => {
    const history = useHistory();

    const deleteHandler = async (id: string) => {
        await Api.deleteVideo(id);
        toast.warning('Video deleted');
        props.getVideos();
    };

    return (
        <div className='col-md-4 p-2'>
            <div className='card video-card'>
                <div className='embed-responsive embed-responsive-21by9'>
                    <ReactPlayer
                        url={props.video.url}
                        width='200px'
                        height='100px'
                    />
                </div>
                <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                        <h5
                            className='card-title video-title'
                            onClick={() =>
                                history.push(`/update/${props.video._id}`)
                            }
                        >
                            {props.video.title}
                        </h5>
                        <FontAwesomeIcon
                            icon={faMinusSquare}
                            onClick={() => deleteHandler(props.video._id!)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <p className='card-text'>{props.video.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Video;
