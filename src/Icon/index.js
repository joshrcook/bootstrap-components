import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';

const Icon = React.forwardRef(({ className, variant, ...otherProps }, ref) => {
    const themeContext = useThemeContext();
    const { iconPrefix } = themeContext || {};
    const classes = classNames(
        'icon',
        `${iconPrefix}`,
        `${iconPrefix}-${variant}`,
        className,
    );
    return <i {...otherProps} className={classes} ref={ref} />
});

Icon.displayName = 'Icon';

Icon.propTypes = {
    variant: PropTypes.string,
    className: PropTypes.string,
}

export default Icon;