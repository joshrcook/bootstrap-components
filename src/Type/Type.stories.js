import React from 'react';
import Type from './index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default { 
    title: 'Type',
    decorators: [
        withKnobs
    ],
};

export const withDisplayHeadings = () => {
    return (
        <>
            <Type as="div" variant="display-1">Display 1</Type>
            <Type as="div" variant="display-2">Display 2</Type>
            <Type as="div" variant="display-3">Display 3</Type>
            <Type as="div" variant="display-4">Display 4</Type>
        </>
    );
};

export const withHeadings = () => {
    return (
        <>
            <Type as="h1">h1. Bootstrap heading</Type>
            <Type as="div" variant="h1">h1. Bootstrap heading</Type>
            <Type as="h2">h2. Bootstrap heading</Type>
            <Type as="div" variant="h2">h2. Bootstrap heading</Type>
            <Type as="h3">h3. Bootstrap heading</Type>
            <Type as="div" variant="h3">h3. Bootstrap heading</Type>
            <Type as="h4">h4. Bootstrap heading</Type>
            <Type as="div" variant="h4">h4. Bootstrap heading</Type>
            <Type as="h5">h5. Bootstrap heading</Type>
            <Type as="div" variant="h5">h5. Bootstrap heading</Type>
            <Type as="h6">h6. Bootstrap heading</Type>
            <Type as="div" variant="h6">h6. Bootstrap heading</Type>
        </>
    );
};

export const withBodyStyles = () => {
    return (
        <>
            <Type as="div" variant="lead">Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</Type>
            <Type as="p">Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</Type>
        </>
    );
};

export const withCustomText = () => {
    const variant = select('variant', {
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
    }, 'default');
    const children = text('children', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
    return <Type variant={variant}>{children}</Type>;
};