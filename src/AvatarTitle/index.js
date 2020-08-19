import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const AvatarTitle = React.forwardRef((props, ref) => {
	const { as: Component = "div", className, ...otherProps } = props;
	return (
		<Component
			className={classNames("avatar-title", className)}
			{...otherProps}
			ref={ref}
		/>
	);
});

AvatarTitle.displayName = "AvatarTitle";

AvatarTitle.propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
};

export default AvatarTitle;
