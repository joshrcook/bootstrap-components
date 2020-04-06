import React from 'react';
import Button from './index';
import { boolean, text, select } from '@storybook/addon-knobs';

export default { title: 'Button' };

export const withText = () => {
  const children = text('children', 'Button Text');
  const variant = select('variant', {
    primary: 'primary',
    'primary-soft': 'primary-soft',
    'primary-inverse': 'primary-inverse',
    secondary: 'secondary',
    'secondary-soft': 'secondary-soft',
    'secondary-inverse': 'secondary-inverse',
    danger: 'danger',
    'danger-soft': 'danger-soft',
    'danger-inverse': 'danger-inverse',
    link: 'link',
  }, 'primary');
  const size = select('size', {
    default: null,
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl'
  }, 'default');
  const block = boolean('block', false);
  return (
    <Button 
      variant={variant} 
      size={size} 
      block={block}
    >{children}</Button>
  );
};