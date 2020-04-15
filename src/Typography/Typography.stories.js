import React from 'react';
import PropTypes from 'prop-types';
import Typography from './index';
import { text, select } from '@storybook/addon-knobs';

export default { 
    title: 'Typography',
};

export const withDisplayHeadings = () => {
    return (
        <div className="p-3">
            <Typography as="h1" variant="display-1">Display 1</Typography>
            <Typography as="h1" variant="display-2">Display 2</Typography>
            <Typography as="h1" variant="display-3">Display 3</Typography>
            <Typography as="h1" variant="display-4">Display 4</Typography>
        </div>
    );
};

export const withHeadings = ({ variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }) => {
    return (
        <div className="p-3">
            {variants.map(variant => <Typography key={variant} as={variant} variant={variant}>{variant}. Heading</Typography>)}
        </div>
    );
};

withHeadings.propTypes = {
    variants: PropTypes.arrayOf(PropTypes.any),
};

export const withBodyStyles = ({ variants = ['lead', null] }) => {
    return (
        <div className="p-3">
            {variants.map(variant => (
                <Typography key={variant} as="p" variant={variant}>Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</Typography>
            ))}
        </div>
    );
};

withBodyStyles.propTypes = {
    variants: PropTypes.arrayOf(PropTypes.any),
};

export const withInlineElements = () => {
    return (
        <div className="p-3">
            <Typography as="p"><strong>This line rendered as bold text.</strong></Typography>
            <Typography as="p"><em>This line rendered as italicized text.</em></Typography>
            <Typography as="p">This line <a href="#">contains a link</a>.</Typography>
            <Typography as="p"><u>This line of text will render as underlined</u></Typography>
            <Typography as="p"><small>This line of text is meant to be treated as fine print.</small></Typography>
        </div>
    );
};

export const withKnobs = ({ 
    variants = { 
        default: null,
        'display-1': 'display-1',
        'display-2': 'display-2',
        'display-3': 'display-3',
        'display-4': 'display-4',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        lead: 'lead',
    },
    defaultVariantValue = null,
}) => {
    const variant = select('variant', variants, defaultVariantValue);
    const children = text('children', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
    return (
        <div className="p-3">
            <Typography variant={variant}>{children}</Typography>
        </div>
    );
};

withKnobs.propTypes = {
    variants: PropTypes.object,
    defaultVariantValue: PropTypes.any,
};