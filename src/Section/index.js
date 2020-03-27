import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Section = React.forwardRef(({ variant, className, ...otherProps }, ref) => {
    const classes = classNames(
        'section',
        { [`section-${variant}`]: !!variant },
        className,
    );
    return <div className={classes} {...otherProps} ref={ref} /> 
});

Section.displayName = 'Section';

Section.propTypes = {
    variant: '',
    className: PropTypes.string,
};

export default Section;