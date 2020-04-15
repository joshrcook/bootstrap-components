import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BootstrapButton from 'react-bootstrap/Button';

const Button = React.forwardRef(({ hover, focus, size, variant = 'primary', className, ...otherProps}, ref) =>  {

    const classes = classNames(
        { [`btn-${size}`]: !!size },
        { 'hover': !!hover },
        { 'focus': !!focus },
        className,
    );

    return (
        <BootstrapButton
            {...otherProps} 
            variant={variant}
            className={classes}
            ref={ref}
        />
    );
    
});

Button.displayName = 'Button';

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    className: PropTypes.string,
    hover: PropTypes.bool,
    focus: PropTypes.bool,
};

export default Button;