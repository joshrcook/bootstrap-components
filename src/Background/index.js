import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Background = React.forwardRef(({ color, textColor, className, ...otherProps }, ref) => {
    const classes = classNames(
        { [`bg-${color}`]: !!color },
        { [`text-${textColor}`]: !!textColor },
        className,
    )
    return (
        <div {...otherProps} className={classes} ref={ref} />
    )
});

Background.displayName = 'Background';

Background.propTypes = {
    color: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white' ]),
    textColor: PropTypes.oneOf([ 'light', 'dark', 'white' ]),
    className: PropTypes.string,
};

export default Background;