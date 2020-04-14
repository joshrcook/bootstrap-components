import React from 'react';
import Container from './index';
import { select } from "@storybook/addon-knobs";


export default {
    title: 'Container',
};

export const withOptions = () => {
    const fluid = select('fluid', {
        false: null,
        true: true,
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
    }, null);

    return (
        <div>
            <Container fluid={fluid}>
                Container content
            </Container>
        </div>
    )
};