import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BootstrapButton from 'react-bootstrap/Button';

const Button = React.forwardRef(({ size, variant = 'primary', className, ...otherProps}, ref) =>  {

    const classes = classNames(
        { [`btn-${size}`]: !!size },
        className,
    );

    return (
        <BootstrapButton
            variant={variant}
            className={classes}
            ref={ref} 
            {...otherProps} 
            outline={undefined}
        />
    );
    
});

Button.displayName = 'Button';

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'primary-soft', 'primary-inversee', 'secondary', 'secondary-soft', 'secondary-inverse', 'danger', 'danger-soft', 'danger-inverse', 'link' ]),
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    block: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;