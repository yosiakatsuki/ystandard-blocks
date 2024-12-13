/**
 * External dependencies.
 */
import clsx from 'clsx';
/**
 * WordPress dependencies.
 */
import { Path, SVG } from '@wordpress/components';

type DividerProps = {
	width: number | undefined;
	height: number | undefined;
	color: string | undefined;
	colorClass: string | undefined;
	marginTop: number | undefined;
	marginBottom: number | undefined;
	align: string | undefined;
	image: {
		url: string | undefined;
		alt: string | undefined;
	};
};

export function Divider( props: DividerProps ) {
	const {
		width,
		height,
		color,
		colorClass,
		marginTop,
		marginBottom,
		align = '',
		image,
	} = props;

	if ( 0 === width || 0 === height ) {
		return <></>;
	}

	const lineClass = clsx( 'ystdb-heading__line', {
		[ `${ colorClass }` ]: colorClass,
	} );
	const svgStyle = {
		fill: ! colorClass ? color || '#222' : undefined,
		marginTop: marginTop ? `${ marginTop }px` : undefined,
		marginBottom: marginBottom ? `${ marginBottom }px` : undefined,
	};

	const imageStyle = {
		display: 'block',
		width: width ? `${ width }px` : '0px',
		height: height ? `${ height }px` : '0px',
		marginTop: marginTop ? `${ marginTop }px` : undefined,
		marginBottom: marginBottom ? `${ marginBottom }px` : undefined,
		marginRight: [ 'left', 'center' ].includes( align )
			? 'auto'
			: undefined,
		marginLeft: [ 'right', 'center' ].includes( align )
			? 'auto'
			: undefined,
	};

	return (
		<>
			{ image?.url ? (
				<img
					className={ lineClass }
					src={ image.url }
					width={ width }
					height={ height }
					alt={ image.alt }
					style={ imageStyle }
				/>
			) : (
				<SVG
					className={ lineClass }
					width={ width }
					height={ height }
					viewBox={ `0 0 ${ width } ${ height }` }
					xmlns="http://www.w3.org/2000/svg"
					style={ svgStyle }
				>
					<Path
						d={ `m0 0 h ${ width } v ${ height } h -${ width } z` }
					/>
				</SVG>
			) }
		</>
	);
}
