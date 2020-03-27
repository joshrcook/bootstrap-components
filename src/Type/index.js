import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Type = React.forwardRef(({ as: Component = 'span', className, variant = 'body', ...otherProps }, ref) => {
    const classes = classNames(
        { 'h1': variant === 'h1' },
        { 'h2': variant === 'h2' },
        { 'h3': variant === 'h3' },
        { 'h4': variant === 'h4' },
        { 'h5': variant === 'h5' },
        { 'h6': variant === 'h6' },
        { 'display-4': variant === 'display' },
        { 'lead': variant === 'lead' },
        { 'label': variant === 'label' },
        'type',
        className,
    );
    return <Component {...otherProps} className={classes} ref={ref} />
});

Type.displayName = 'Type';

Type.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
    variant: PropTypes.oneOf([ 'display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'body', 'label' ]),
};

export default Type;