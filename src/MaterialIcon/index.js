import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const MaterialIcon = React.forwardRef((props, ref) => {
	const { as: Component = "i", className, variant, ...otherProps } = props;
	return (
		<Component
			className={classNames("material-icons", className)}
			{...otherProps}
			ref={ref}
		>
			{variant}
		</Component>
	);
});

MaterialIcon.displayName = "MaterialIcon";

MaterialIcon.propTypes = {
	variant: PropTypes.string.isRequired,
	className: PropTypes.string,
	as: PropTypes.elementType,
};

export default MaterialIcon;
