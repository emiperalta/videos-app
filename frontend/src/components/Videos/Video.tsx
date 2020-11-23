import React from 'react';
import ReactPlayer from 'react-player';
import { Props } from '../Services/IVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const Video = (props: Props) => {
    const deleteHandler = () => {
        //delete video from the list
    };

    return (
        <div className='col-md-4 p-2'>
            <div className='card'>
                <div className='embed-responsive embed-responsive-21by9'>
                    <ReactPlayer
                        url={props.video.url}
                        width='200px'
                        height='100px'
                    />
                </div>
                <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                        <h5 className='card-title'>{props.video.title}</h5>
                        <FontAwesomeIcon
                            icon={faMinusSquare}
                            onClick={deleteHandler}
                        />
                    </div>
                    <p className='card-text'>{props.video.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Video;
