/**
 * WordPress dependencies.
 */
import { Popover } from '@wordpress/components';
import { useMemo, useCallback, useState, useRef } from '@wordpress/element';
import { Icon, closeSmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import TextControl from '@aktk/block-components/wp-controls/text-control';
import Button from '@aktk/block-components/wp-controls/button';
import { SvgIcon } from '@aktk/block-components/components/svg-icon';
import { getFilteredIcons } from '@aktk/block-components/utils/icon';

/**
 * Internal dependencies.
 */
import './style-editor.scss';

// @ts-ignore
export interface IconSelectProps {
	icon: string;
	label?: string;
	onChange: ( value: string | undefined ) => void;
	disable?: boolean;
}

export function IconSelect( props: IconSelectProps ) {
	const { icon, label, onChange, disable = false } = props;
	const [ filter, setFilter ] = useState( '' );
	const [ isOpen, setIsOpen ] = useState( false );
	const [ popoverAnchor, setPopoverAnchor ] = useState();
	const filterRef = useRef( null );

	return (
		<div className={ 'ystd-component__icon-select' }>
			<>
				{ label && <div>{ label }</div> }

				<div
					className={ 'flex items-center gap-4' }
					// @ts-expect-error
					ref={ setPopoverAnchor }
				>
					<div className="ystd-component__icon-preview flex aspect-square size-8 items-center justify-center bg-gray-300">
						<PreviewIcon icon={ icon } />
					</div>
					<Button
						variant={ 'secondary' }
						className="h-8"
						onClick={ () => {
							if ( isOpen ) {
								return;
							}
							setIsOpen( true );
							setTimeout( () => {
								// @ts-ignore
								filterRef.current?.focus();
							}, 100 );
						} }
						disabled={ disable }
					>
						{ __( 'アイコン選択', 'ystandard-toolbox' ) }
					</Button>
					<Button
						variant={ 'secondary' }
						onClick={ () => {
							onChange( undefined );
						} }
						size={ 'small' }
						disabled={ disable }
						isDestructive
					>
						{ __( 'クリア', 'ystandard-toolbox' ) }
					</Button>
				</div>
				{ isOpen && (
					<Popover
						anchor={ popoverAnchor }
						position={ 'top right' }
						className={
							'ystd-component__icon-select__popover min-w-[300px]'
						}
						onClose={ () => {
							setTimeout( () => {
								setIsOpen( false );
							}, 150 );
						} }
					>
						<div className="px-2 pt-2">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="m-0 text-fz-xs font-bold">
									{ __(
										'アイコン選択',
										'ystandard-toolbox'
									) }
								</h3>
								<Button
									className="!p-0 text-current hover:text-current focus:text-current"
									onClick={ () => {
										setIsOpen( false );
									} }
									size={ 'small' }
								>
									<Icon icon={ closeSmall } />
								</Button>
							</div>
							<TextControl
								ref={ filterRef }
								value={ filter }
								onChange={ setFilter }
								placeholder={ __(
									'絞り込み…',
									'ystandard-toolbox'
								) }
							/>
						</div>
						<div className="max-h-[200px] overflow-y-scroll p-1">
							<div className="m-1">
								<IconButtons
									icon={ icon }
									onChange={ onChange }
									filter={ filter }
								/>
							</div>
						</div>
					</Popover>
				) }
			</>
		</div>
	);
}

function PreviewIcon( { icon }: { icon: string } ) {
	return (
		<SvgIcon
			name={ icon }
			fallback={
				<div
					className={
						'flex aspect-[1/1] w-[24px] items-center justify-center'
					}
				>
					...
				</div>
			}
		/>
	);
}

interface IconButtonsProps {
	icon: string;
	onChange: ( value: string ) => void;
	filter?: string;
}

function IconButtons( props: IconButtonsProps ) {
	const { icon, onChange, filter = '' } = props;
	const icons = useMemo( () => {
		return getFilteredIcons( filter );
	}, [ filter ] );
	const handleOnChange = useCallback(
		( value: string ) => {
			const _value = value === icon ? '' : value;
			onChange( _value );
		},
		[ onChange, icon ]
	);

	const Content = useMemo( () => {
		return (
			<div className="ystd-component__icon-select__icon-list grid grid-cols-5 gap-2">
				{ icons.map( ( item ) => {
					const variant =
						icon === item.name ? 'primary' : 'secondary';
					return (
						<Button
							key={ item.name }
							variant={ variant }
							onClick={ () => handleOnChange( item.name ) }
							className={ 'flex items-center justify-center' }
						>
							<PreviewIcon icon={ item.name } />
						</Button>
					);
				} ) }
			</div>
		);
	}, [ icon, filter ] );

	return <>{ Content }</>;
}
