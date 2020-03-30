import 'bootstrap/dist/css/bootstrap.min.css';
import '../../bootstrap-tailwind-ui-theme/dist/marketing.css';
import '../../bootstrap-tailwind-ui-theme/dist/app.css';

import { addParameters } from '@storybook/react';
 
addParameters({
    themes: [
        { name: 'marketing', class: 'tui-marketing', color: '#5850ED', default: true },
        { name: 'app', class: 'tui-app', color: '#E5EDFF' },
    ],
});