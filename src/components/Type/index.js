import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Type = React.forwardRef(({ as: Component = 'span', className, ...otherProps }, ref) => {
    const classes = classNames(
        'type',
        className,
    );
    return <Component {...otherProps} className={classes} ref={ref} />
});

Type.displayName = 'Type';

Type.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
};

export default Type;