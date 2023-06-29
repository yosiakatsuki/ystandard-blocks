/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, PanelBody } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import ResponsiveDeprecatedNumberControl from '@aktk/blocks/deprecated/components/responsive-number-control';

// @ts-ignore
export function Padding(props) {
	const { setAttributes, attributes } = props;

	const {
		paddingVerticalDesktop,
		paddingVerticalTablet,
		paddingVerticalMobile,
		paddingHorizontalDesktop,
		paddingHorizontalTablet,
		paddingHorizontalMobile,
		isPaddingVerticalResponsive,
		isPaddingHorizontalResponsive,
	} = attributes;

	return (
		<>
			<PanelBody title={__('余白設定', 'ystandard-blocks')}>
				<BaseControl
					id={'padding'}
					label={__('ボタン内側の余白設定', 'ystandard-blocks')}
				>
					<ResponsiveDeprecatedNumberControl
						label={__('上下', 'ystandard-blocks')}
						useResponsive={isPaddingVerticalResponsive}
						// @ts-ignore
						changeResponsiveMode={(value) => {
							setAttributes({
								isPaddingVerticalResponsive: value,
							});
						}}
						desktopValue={paddingVerticalDesktop}
						// @ts-ignore
						desktopOnChange={(value) => {
							setAttributes({
								paddingVerticalDesktop: value,
							});
						}}
						tabletValue={paddingVerticalTablet}
						// @ts-ignore
						tabletOnChange={(value) => {
							setAttributes({
								paddingVerticalTablet: value,
							});
						}}
						mobileValue={paddingVerticalMobile}
						// @ts-ignore
						mobileOnChange={(value) => {
							setAttributes({
								paddingVerticalMobile: value,
							});
						}}
						min={1}
						max={500}
						step={1}
					/>
					<ResponsiveDeprecatedNumberControl
						label={__('左右', 'ystandard-blocks')}
						useResponsive={isPaddingHorizontalResponsive}
						// @ts-ignore
						changeResponsiveMode={(value) => {
							setAttributes({
								isPaddingHorizontalResponsive: value,
							});
						}}
						desktopValue={paddingHorizontalDesktop}
						// @ts-ignore
						desktopOnChange={(value) => {
							setAttributes({
								paddingHorizontalDesktop: value,
							});
						}}
						tabletValue={paddingHorizontalTablet}
						// @ts-ignore
						tabletOnChange={(value) => {
							setAttributes({
								paddingHorizontalTablet: value,
							});
						}}
						mobileValue={paddingHorizontalMobile}
						// @ts-ignore
						mobileOnChange={(value) => {
							setAttributes({
								paddingHorizontalMobile: value,
							});
						}}
						min={1}
						max={500}
						step={1}
					/>
				</BaseControl>
			</PanelBody>
		</>
	);
}
