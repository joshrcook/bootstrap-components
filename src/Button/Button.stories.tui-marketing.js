import React from 'react';
// import Button from './index';
import { withVariants as DefaultWithVariants, withSizes as defaultWithSizes, withBlock as defaultWithBlock, withStates as DefaultWithStates, withKnobs as DefaultWithKnobs } from './Button.stories';
export { default } from './Button.stories';

const storyVariants = [ 
    'primary', 
    'secondary', 
    // 'success', 
    // 'danger', 
    // 'warning', 
    // 'info', 
    'light', 
    'dark', 
    // 'link',
];

export const withVariants = () => {
    return <DefaultWithVariants variants={storyVariants} />;
};

export const withSizes = defaultWithSizes;

export const withBlock = defaultWithBlock;

export const withStates = DefaultWithStates;

export const withKnobs = (props) => {
    console.log('props', props);
    return <DefaultWithKnobs {...props} variants={storyVariants} />
};