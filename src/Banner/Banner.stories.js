import React from 'react';
import Banner from './index';
import { text } from '@storybook/addon-knobs';


export default {
    title: 'Banner',
};

export const withDefaultText = () =>  {
    return <Banner>Big news! We&apos;re excited to announce a brand new product. <a href="#"><strong>Learn more →</strong></a></Banner>;
};

export const withEditableText = () =>  {
    const children = text('children', "Big news! We are excited to announce a brand new product.");
    return <Banner>{children}</Banner>;
};