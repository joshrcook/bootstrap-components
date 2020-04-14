import React from 'react';
import Container from './index';
import { boolean, select } from "@storybook/addon-knobs";


export default {
    title: 'Container',
};

export const withOptions = () => {
    const fluid = boolean('fluid', false);
    const fluidBreakpoint = fluid && select('fluid breakpoint', {
        default: null,
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl'
    }, null);

    return (
        <div>
            <Container fluid={fluid ? (fluidBreakpoint || true) : null}>
                Container content
            </Container>
        </div>
    )
};