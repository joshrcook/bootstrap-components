import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SectionContext = React.createContext();

const Section = React.forwardRef(({ variant, className, ...otherProps }, ref) => {
    const classes = classNames(
        'section',
        { [`section-${variant}`]: !!variant },
        className,
    );
    return (
        <SectionContext.Provider value={{}}>
            <div className={classes} {...otherProps} ref={ref} />
        </SectionContext.Provider>
    );
});

Section.displayName = 'Section';

Section.propTypes = {
    variant: PropTypes.oneOf([ 'primary', 'white', 'light', 'dark' ]),
    className: PropTypes.string,
};

export default Section;