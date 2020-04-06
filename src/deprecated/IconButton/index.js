import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconButton = React.forwardRef(({ className, ...otherProps }, ref) => {
    const classes = classNames(
        'icon-button',
        className,
    );

    return (
        <div {...otherProps} className={classes} ref={ref}  />
    )
});

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
    className: PropTypes.string,
};

export default IconButton;