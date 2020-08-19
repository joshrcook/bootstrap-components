import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const AvatarInitials = React.forwardRef((props, ref) => {
	const { as: Component = "div", className, ...otherProps } = props;
	return (
		<Component
			className={classNames("avatar-initials", className)}
			{...otherProps}
			ref={ref}
		/>
	);
});

AvatarInitials.displayName = "AvatarInitials";

AvatarInitials.propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
};

export default AvatarInitials;
