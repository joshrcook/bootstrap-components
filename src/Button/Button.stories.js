import React from 'react';
import Button from './index';
import { boolean, text, select } from '@storybook/addon-knobs';

export default { title: 'Button' };

const storyVariants = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'primary-outline', 'secondary-outline', 'success-outline', 'danger-outline', 'warning-outline', 'info-outline', 'light-outline', 'dark-outline' ];

export const withVariants = ({ variants = storyVariants }) => { // eslint-disable-line react/prop-types
    return (
        <div className="p-3">
            <div>
                {variants.map(variant => <Button key={variant} variant={variant} className="mr-1">{variant}</Button>)}
            </div>
        </div>
    );
};

export const withSizes = () => { // eslint-disable-line react/prop-types
    return (
        <div className="p-3">
            <Button size="sm" variant="primary" className="mr-1">Small Button</Button>
            <Button variant="primary" className="mr-1">Default Button</Button>
            <Button size="lg" variant="primary" className="mr-1">Large Button</Button>
        </div>
    )
};

export const withBlock = () => {
    return (
        <div className="p-3">
            <Button block>Block Level Button</Button>
        </div>
    )
};

export const withStates = ({ variants = [ 'primary' ] }) => {
    return (
        <div className="p-3">
            {variants.map(variant => (
                <div className="mb-1" key={variant}>
                    <Button variant={variant} className="mr-1">Normal Button</Button>
                    <Button variant={variant} hover className="mr-1">Hovered Button</Button>
                    <Button variant={variant} active className="mr-1">Active Button</Button>
                    <Button variant={variant} focus className="mr-1">Focused Button</Button>
                    <Button variant={variant} disabled>Disabled Button</Button>
                </div>
            ))}
        </div>
    )
};

export const Knobs = () => {

}

export const withKnobs = ({
    variants = storyVariants,
}) => {
    console.log('variants', variants);
    const active = boolean('active', false);
    const hover = boolean('hover', false);
    const focus = boolean('focus', false);
    const disabled = boolean('disabled', false);
    const block = boolean('block', false);
    const href = text('href', '');
    const size = select('size', {
        default: null,
        sm: 'sm',
        lg: 'lg'
    }, null);
    const type = select('type', {
        button: 'button',
        reset: 'reset',
        submit: 'submit',
        none: null,
    }, 'button');
    const children = text('children', 'Button Text');
    const variant = select( 'variant', variants.reduce((prev, curr) => ({ ...prev, [curr]: curr })), variants[0]);
    return (
        <div className="p-3">
            <Button
                variant={variant} 
                size={size} 
                block={block}
                active={active}
                disabled={disabled}
                href={href !== '' ? href : null}
                type={type}
                hover={hover}
                focus={focus}
            >{children}</Button>
        </div>
    );
};