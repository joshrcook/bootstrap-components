import React from 'react';
import Type from './index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default { 
    title: 'Type',
    decorators: [
        withKnobs
    ],
};

export const withText = () => {
    const variant = select('variant', {
        display: 'display',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        lead: 'lead',
        body: 'body',
        label: 'label',
    }, 'body');
    const children = text('children', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
    return <Type variant={variant}>{children}</Type>;
};