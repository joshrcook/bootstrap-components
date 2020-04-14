import React from 'react';
import Typography from './index';
import { text, select } from '@storybook/addon-knobs';

export default { 
    title: 'Typography',
};

export const withDisplayHeadings = () => {
    return (
        <>
            <Typography as="h1" variant="display-1">Display 1</Typography>
            <Typography as="h1" variant="display-2">Display 2</Typography>
            <Typography as="h1" variant="display-3">Display 3</Typography>
            <Typography as="h1" variant="display-4">Display 4</Typography>
        </>
    );
};

export const withHeadings = () => {
    return (
        <>
            <Typography as="h1" variant="h1">h1. Bootstrap heading</Typography>
            <Typography as="h2" variant="h2">h2. Bootstrap heading</Typography>
            <Typography as="h3" variant="h3">h3. Bootstrap heading</Typography>
            <Typography as="h4" variant="h4">h4. Bootstrap heading</Typography>
            <Typography as="h5" variant="h5">h5. Bootstrap heading</Typography>
            <Typography as="h6" variant="h6">h6. Bootstrap heading</Typography>
        </>
    );
};

export const withBodyStyles = () => {
    return (
        <>
            <Typography as="p" variant="lead">Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</Typography>
            <Typography as="p">Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</Typography>
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
    }, null);
    const children = text('children', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
    return <Typography variant={variant}>{children}</Typography>;
};