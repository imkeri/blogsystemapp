import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import './blogbyauth.css'

const BlogByAuthName = (props) => {
    return (
        <>
                    <div className='row'>
                            <div className='row authBlog'>
                                <div className='col-md-9'>
                                    <div className='authcat'>
                                        <h5>{props.category}</h5>
                                    </div>
                                    <div className='authtit'>
                                        <h3>{props.title}</h3>
                                    </div>
                                    <div className='authdes'>
                                        <p>{props.description}</p>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='authblogimg'>
                                        <img src='/image/1.jpg' alt='p2'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='row authbottom'>
                                <div className='col-md-8'>
                                    <p className='blog_dis'>{props.category}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p className='authSaveIcon'>
                                        <TurnedInNotIcon className='icon' /></p>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    
              
        </>
    );
}

export default BlogByAuthName;
