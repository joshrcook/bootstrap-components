import React from 'react';
import Background from './index';
import { select, text } from '@storybook/addon-knobs';

export default {
    title: 'Background',
};

export const withAllColors = () => {
    return (
        <>
            <Background color="primary">.bg-primary</Background>
            <Background color="secondary">.bg-secondary</Background>
            <Background color="success">.bg-success</Background>
            <Background color="danger">.bg-danger</Background>
            <Background color="warning">.bg-warning</Background>
            <Background color="info">.bg-info</Background>
            <Background color="light">.bg-light</Background>
            <Background color="dark">.bg-dark</Background>
            <Background color="white">.bg-white</Background>
        </>
    );
};

export const withUserInput = () => {
    const color = select('color', {
        primary: 'primary',
        secondary: 'secondary',
        success: 'success',
        danger: 'danger',
        warning: 'warning',
        info: 'info',
        light: 'light',
        dark: 'dark',
        white: 'white',
    }, 'primary');
    const textColor = select('textColor', {
        default: null,
        light: 'light',
        dark: 'dark',
        white: 'white',
    });
    const children = text('children', 'Donec sed odio dui.');
    return <Background color={color} textColor={textColor}>{children}</Background>
};
