export const Flex = ( { children, ...props } ) => {
	const {
		justifyBetween,
		justifyCenter,
		justifyRight,
		justifyLeft,
		alignTop,
		alignCenter,
		alignBottom,
		gap,
		isGapSmall,
		isGapLarge,
	} = props;
	let justifyContent;
	let alignItems;
	let _gap;
	if ( justifyBetween ) {
		justifyContent = 'space-between';
	}
	if ( justifyCenter ) {
		justifyContent = 'center';
	}
	if ( justifyRight ) {
		justifyContent = 'flex-end';
	}
	if ( justifyLeft ) {
		justifyContent = 'flex-start';
	}
	if ( alignTop ) {
		alignItems = 'flex-start';
	}
	if ( alignCenter ) {
		alignItems = 'center';
	}
	if ( alignBottom ) {
		alignItems = 'flex-end';
	}
	if ( isGapSmall ) {
		_gap = '0.5em';
	}
	if ( isGapLarge ) {
		_gap = '1em';
	}
	if ( gap ) {
		_gap = gap;
	}
	const blockProps = {
		style: {
			display: 'flex',
			justifyContent,
			alignItems,
			gap: _gap,
			...props?.style,
		},
	};
	return <div { ...blockProps }>{ children }</div>;
};

export const FlexItem = ( { children, ...props } ) => {
	const { flexGrow, flexShrink, flexBasis } = props;
	const blockProps = {
		style: {
			flexGrow,
			flexShrink,
			flexBasis,
			...props?.style,
		},
	};
	return <div { ...blockProps }>{ children }</div>;
};
