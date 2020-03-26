import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BootstrapBadge from 'react-bootstrap/Badge';

const Badge = React.forwardRef(({ size, color, className, variant, ...otherProps }, ref) => {

    const classes = classNames(
        { 'badge-dot': variant === 'dot' },
        { 'badge-lg': size === 'lg' },
        className,
    );

    return (
        <BootstrapBadge
            variant={color}
            className={classes}
            ref={ref}
            {...otherProps}
        />
    );

});

Badge.displayName = 'Badge';

Badge.propTypes = {
    variant: PropTypes.oneOf(['dot']),
    color: PropTypes.oneOf(['primary']),
    size: PropTypes.oneOf(['lg']),
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Badge;