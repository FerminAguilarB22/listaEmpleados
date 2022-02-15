import React from 'react';
import avatar from '../img/avatar-1.jpg'

const EmpleadoAvatar = (props) => {
    return (
        <div style={{width:'120px'}}>
            <img src={avatar} width='100%' alt="" />
        </div>
    );
};

export default EmpleadoAvatar;
