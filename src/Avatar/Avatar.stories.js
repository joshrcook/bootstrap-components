import React from 'react';
import Avatar from './index';
import { withKnobs, select, text } from '@storybook/addon-knobs';


export default { 
    title: 'Avatar',
    decorators: [
        withKnobs,
    ]
};

export const withName = () => {
    const name = text('name', 'Joshua Cook');
    const size = select('size', {
        default: null,
        xs: 'xs',
        sm: 'sm',
        lg: 'lg',
        xl: 'xl',    
    }, 'default');
    return <Avatar size={size} name={name} />;   
};

export const withImage = () => {
    const size = select('size', {
        default: null,
        xs: 'xs',
        sm: 'sm',
        lg: 'lg',
        xl: 'xl',    
    }, 'default');
    return <Avatar size={size} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />;
};