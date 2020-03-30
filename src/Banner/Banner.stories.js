import React from 'react';
import Banner from './index';

export default {
    title: 'Banner',
};

export const simple = () =>  {
    return <Banner open={true}>Big news! We&apos;re excited to announce a brand new product. <a href="#">Learn more →</a></Banner>;
};