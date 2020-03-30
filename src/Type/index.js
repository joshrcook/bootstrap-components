import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Type = React.forwardRef(({ as: Component = 'span', inverse, className, variant = 'body', ...otherProps }, ref) => {
    const classes = classNames(
        'type',
        { 'h1': variant === 'h1' },
        { 'h2': variant === 'h2' },
        { 'h3': variant === 'h3' },
        { 'h4': variant === 'h4' },
        { 'display-4': variant === 'display' },
        { 'lead': variant === 'lead' },
        { 'title': variant === 'title' },
        { 'label': variant === 'label' },
        { 'inverse': !!inverse },
        className,
    );
    return <Component {...otherProps} className={classes} ref={ref} />
});

Type.displayName = 'Type';

Type.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
    variant: PropTypes.oneOf([ 'display', 'h1', 'h2', 'h3', 'h4', 'title', 'lead', 'body', 'label' ]),
    inverse: PropTypes.bool,
};

export default Type;