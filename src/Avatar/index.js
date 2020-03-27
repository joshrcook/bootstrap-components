import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import colors from '../../lib/colors';

const Avatar = React.forwardRef(({ as: Component = 'div', className, size, src, name, color, ...otherProps}, ref) => {
    
    const initials = (!!name && name !== '') ? name.split(' ').map(name => name.charAt(0).toUpperCase()).join('') : null;
    const classes = classNames(
        'avatar',
        { [`avatar-${size}`]: !!size },
        { [`avatar-${color}`]: !!color },
        className,
    );

    return (
        <Component className={classes} ref={ref} {...otherProps}>
            {name ? (
                <span className="avatar-initials">{initials}</span>
            ) : src ? (
                <div className="avatar-image" style={{ backgroundImage: `url(${src})` }} />
            ) : (
                <svg className="avatar-placeholder" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )}
        </Component>
    )
});

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    as: PropTypes.elementType,
    size: PropTypes.oneOf([ 'xs', 'sm', 'lg', 'xl' ]),
    className: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    color: PropTypes.oneOf(colors),
};

export default Avatar;