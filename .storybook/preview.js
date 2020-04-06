import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-tailwind-ui-theme/build-dev/marketing.css';
import 'bootstrap-tailwind-ui-theme/build-dev/app.css';

import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


// Add knobs globally
addDecorator(withKnobs);

// Add theming capability
addParameters({
    themes: [
        { name: 'marketing', class: 'tui-marketing', color: '#5850ED', default: true },
        { name: 'app', class: 'tui-app', color: '#E5EDFF' },
    ],
});