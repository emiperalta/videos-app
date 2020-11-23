import React, { FormEvent, useState, useEffect } from 'react';
import { IVideo, InputChange, Params } from '../Services/IVideo';
import * as Api from '../Services/Api';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

const initialState = {
    title: '',
    description: '',
    url: '',
};

const VideoForm = () => {
    const [video, setVideo] = useState<IVideo>(initialState);
    const history = useHistory();
    const params = useParams<Params>();

    const getVideoById = async (id: string) => {
        const res = await Api.getVideoById(id);
        const { title, description, url } = res.data;

        setVideo({ title, description, url });
    };

    useEffect(() => {
        if (params.id) getVideoById(params.id);
    }, [params.id]);

    const inputHandler = (e: InputChange) => {
        const { name, value } = e.target;
        const fieldValues = { [name]: value };

        setVideo({
            ...video,
            ...fieldValues,
        });
    };

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (params.id) {
            await Api.updateVideo(params.id, video);
            toast.info('Video updated successfully!');
            history.push('/');
        } else {
            await Api.createVideo(video);
            toast.success('Video added successfully!');
            history.push('/');
        }
    };

    return (
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <div className='card'>
                    <div className='card-body'>
                        {params.id ? (
                            <h3 className='pb-2'>Update video</h3>
                        ) : (
                            <h3 className='pb-2'>New video</h3>
                        )}
                        <form onSubmit={submitHandler}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Video title'
                                    className='form-control'
                                    onChange={inputHandler}
                                    value={video.title}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='url'
                                    placeholder='https://youtube.com/...'
                                    className='form-control'
                                    onChange={inputHandler}
                                    value={video.url}
                                />
                            </div>
                            <div className='form-group'>
                                <textarea
                                    name='description'
                                    rows={3}
                                    className='form-control'
                                    style={{ resize: 'none' }}
                                    onChange={inputHandler}
                                    value={video.description}
                                ></textarea>
                            </div>

                            {params.id ? (
                                <button type='submit' className='btn btn-info'>
                                    Update
                                </button>
                            ) : (
                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                >
                                    Create
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoForm;
