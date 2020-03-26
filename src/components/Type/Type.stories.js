import React from 'react';
import Type from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { 
    title: 'Type',
    decorators: [
        withKnobs
    ],
};

export const withText = () => {
    const children = text('children', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
    return <Type>{children}</Type>;
};