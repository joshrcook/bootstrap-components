import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Background from '../Background';
import Container from '../Container';

const Banner = React.forwardRef(({ 
        backgroundColor = 'primary', 
        textColor, 
        className, 
        children, 
        center = true, 
        ...otherProps
    }, ref) => {

    const classes = classNames(
        'banner',
        { 'text-center': !!center },
        className,
    );

    if (!open) return null;

    return (
        <Background {...otherProps} color={backgroundColor} textColor={textColor} className={classes} ref={ref}>
            <Container>{children}</Container>
        </Background>
    );
});

Banner.displayName = 'Banner';

Banner.propTypes = {
    backgroundColor: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white' ]),
    textColor: PropTypes.oneOf([ 'light', 'dark', 'white' ]),
    center: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Banner;