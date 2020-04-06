import React from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext({
    iconPrefix: 'fe',
});

export const useThemeContext = () => React.useContext(ThemeContext);

function ThemeProvider({ iconPrefix = 'fe', children }) {
    return (
        <ThemeContext.Provider value={{
            iconPrefix,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
    iconPrefix: PropTypes.string,
};

export default ThemeProvider;