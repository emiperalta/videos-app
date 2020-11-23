import React, { FormEvent, useState } from 'react';
import { IVideo, InputChange } from '../Services/IVideo';
import * as Api from '../Services/Api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const initialState = {
    title: '',
    description: '',
    url: '',
};

const VideoForm = () => {
    const [video, setVideo] = useState<IVideo>(initialState);
    const history = useHistory();

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
        history.push('/');
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
