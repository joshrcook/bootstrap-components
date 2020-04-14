import React from 'react';
import Typography from './index';
import { select, text } from '@storybook/addon-knobs';
import { default as defaultDefault, withHeadings as defaultWithHeadings, withBodyStyles as defaultWithBodyStyles } from './Typography.stories';

export default defaultDefault;

export const withDisplayHeadings = () => {
    return (
        <>
            <Typography variant="display-4">Display 4</Typography>
        </>
    );
};

export const withHeadings = defaultWithHeadings;

export const withBodyStyles = defaultWithBodyStyles;

export const withCustomText = () => {
    const variant = select('variant', {
        default: null,
        // 'display-1': 'display-1',
        // 'display-2': 'display-2',
        // 'display-3': 'display-3',
        'display-4': 'display-4',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        lead: 'lead',
    }, null);
    const children = text('children', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
    return <Typography variant={variant}>{children}</Typography>;
};