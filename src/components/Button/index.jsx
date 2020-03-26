import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BootstrapButton from 'react-bootstrap/Button';

const Button = React.forwardRef(({ color = 'primary', size, variant = 'default', className, ...otherProps}, ref) =>  {

    const classes = classNames(
        { [`btn-${size}`]: !!size },
        { 'btn-soft': variant === 'soft' },
        { 'btn-text': variant === 'text' },
        className,
    );

    return (
        <BootstrapButton
            variant={color}
            className={classes}
            ref={ref} 
            {...otherProps} 
            outline={undefined}
        />
    );
    
});

Button.displayName = 'Button';

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'white', 'danger']),
    variant: PropTypes.oneOf(['default', 'text', 'soft']),
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    block: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;