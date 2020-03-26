import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const AvatarImage = React.forwardRef(({ src, className, ...otherProps}, ref) => {

    const classes = classNames(
        'avatar-image',
        className,
    );

    return (
        <img src={src} className={classes} {...otherProps} ref={ref} />
    );
    
});

AvatarImage.displayName = 'AvatarImage';

AvatarImage.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
}

export default AvatarImage;

