import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import AvatarTitle from "../AvatarTitle";
import AvatarImage from "../AvatarImage";

const Avatar = React.forwardRef(
	(
		{ as: Component = "div", className, size, variant, ...otherProps },
		ref
	) => {
		const classes = classNames(
			"avatar",
			{ [`avatar-${size}`]: !!size },
			{ [`avatar-${variant}`]: !!variant },
			className
		);

		return (
			<Component
				className={classes}
				ref={ref}
				{...otherProps}
			></Component>
		);
	}
);

Avatar.displayName = "Avatar";

Avatar.propTypes = {
	as: PropTypes.elementType,
	size: PropTypes.oneOf(["xs", "sm", "lg", "xl"]),
	variant: PropTypes.string,
	className: PropTypes.string,
};

Avatar.Title = AvatarTitle;
Avatar.Image = AvatarImage;

export default Avatar;
