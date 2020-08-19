import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const AvatarImage = React.forwardRef((props, ref) => {
	const { as: Component = "div", className, ...otherProps } = props;
	return (
		<Component
			className={classNames("avatar-image", className)}
			{...otherProps}
			ref={ref}
		/>
	);
});

AvatarImage.displayName = "AvatarImage";

AvatarImage.propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
};

export default AvatarImage;
