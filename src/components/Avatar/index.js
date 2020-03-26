import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AvatarImage from './AvatarImage';
import AvatarPlaceholder from './AvatarPlaceholder';
import AvatarInitials from './AvatarInitials';

const availableSizes = ['xs', 'sm', 'default', 'lg', 'xl' ];

const Avatar = React.forwardRef(({ className, size, ...otherProps}, ref) => {

    const classes = classNames(
        'avatar',
        { [`avatar-${size}`]: size && size !== 'default' && availableSizes.indexOf(size) >= 0 },
        className,
    );

    return (
        <span className={classes} ref={ref} {...otherProps} />
    )
});

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    size: PropTypes.oneOf(availableSizes),
    className: PropTypes.string,
    children: PropTypes.node,
};

Avatar.Image = AvatarImage;
Avatar.Initials = AvatarInitials;
Avatar.Placeholder = AvatarPlaceholder;

export default Avatar;