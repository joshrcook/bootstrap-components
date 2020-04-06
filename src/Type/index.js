import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Type = React.forwardRef(({ as: Component = 'span', color, inverse, className, variant, ...otherProps }, ref) => {
    const classes = classNames(
        { [`${variant}`]: !!variant },
        { [`text-${color}`]: !!color },
        { 'inverse': !!inverse },
        className,
    );
    return <Component {...otherProps} className={classes} ref={ref} />
});

Type.displayName = 'Type';

Type.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
    variant: PropTypes.oneOf([ 'display-1', 'display-2', 'display-3', 'display-4', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead' ]),
    color: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'muted', 'white' ]),
    inverse: PropTypes.bool,
};

export default Type;