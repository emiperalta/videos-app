import React, { FormEvent, useState } from 'react';
import { IVideo, InputChange } from '../Services/IVideo';
import * as Api from '../Services/Api';
import { toast } from 'react-toastify';

const VideoForm = () => {
    const [video, setVideo] = useState<IVideo>({
        title: '',
        description: '',
        url: '',
    });

    const inputsHandler = (e: InputChange) => {
        const { name, value } = e.target;
        const fieldValues = { [name]: value };

        setVideo({
            ...video,
            ...fieldValues,
        });
    };

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await Api.createVideo(video);
        toast.success('Video added successfully!');
    };

    return (
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <div className='card'>
                    <div className='card-body'>
                        <h3>New video</h3>

                        <form onSubmit={submitHandler}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Video title'
                                    className='form-control'
                                    onChange={inputsHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='url'
                                    placeholder='https://youtube.com/...'
                                    className='form-control'
                                    onChange={inputsHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <textarea
                                    name='description'
                                    rows={3}
                                    className='form-control'
                                    style={{ resize: 'none' }}
                                    onChange={inputsHandler}
                                ></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary'>
                                Add video
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoForm;
