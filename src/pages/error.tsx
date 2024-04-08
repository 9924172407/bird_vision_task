import React from 'react';
import errImg from '../assets/404.gif'

const ErrorPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="p-8 bg-white rounded-lg">
                <img src={errImg} />
            </div>
        </div>
    );
};

export default ErrorPage;
