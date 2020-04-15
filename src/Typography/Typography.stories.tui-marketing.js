import React from 'react';
import { default as storyInfo, withHeadings as WithHeadings, withBodyStyles as WithBodyStyles, withInlineElements as WithInlineElements, withKnobs as WithKnobs } from './Typography.stories';

export default storyInfo;

export const withHeadings = (props) => {
    return (
        <WithHeadings 
            {...props} 
            variants={[ 'h1', 'h2' ]}  
        />
    );
};

export const withBodyStyles = (props) => {
    return (
        <WithBodyStyles 
            {...props} 
            variants={[null]} 
        />
    );
};

export const withInlineElements = WithInlineElements;

export const withKnobs = (props) => {
    return (
        <WithKnobs 
            {...props} 
            variants={{
                default: null,
                h1: 'h1',
                h2: 'h2'
            }}
            defaultVariantValue={null}
        />
    );
}