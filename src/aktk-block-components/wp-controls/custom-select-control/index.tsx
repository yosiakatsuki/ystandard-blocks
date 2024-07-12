/**
 * WordPress
 */
import { useMemo } from '@wordpress/element';
import { CustomSelectControl as WPCustomSelectControl } from '@wordpress/components';

export interface CustomSelectControlOption {
	key: string;
	name: string;
	style?: React.CSSProperties;
}

export interface CustomSelectControlProps {
	value: string;
	options: CustomSelectControlOption[];
	onChange: ( value: string ) => void;
	label?: string;
	emptyLabel?: string;
	useEmptyValue?: boolean;
}

export default function CustomSelectControl( props: CustomSelectControlProps ) {
	const {
		value,
		options,
		onChange,
		label,
		emptyLabel,
		useEmptyValue = true,
	} = props;
	// 選択肢に空の選択肢を追加.
	const selectOptions = useMemo( () => {
		if ( useEmptyValue ) {
			return [
				...[
					{
						key: '',
						name: emptyLabel || '--選択してください--',
					},
				],
				...options,
			] as CustomSelectControlOption[];
		}
		return [ ...options ] as CustomSelectControlOption[];
	}, [ options ] );
	// 選択時にキーをリターン.
	const handleOnChange = ( {
		selectedItem,
	}: {
		selectedItem: CustomSelectControlOption;
	} ) => {
		onChange( selectedItem.key );
	};
	// 選択中アイテムを取得.
	const currentItem = selectOptions.find( ( option ) => {
		return option.key === value;
	} );

	return (
		<div
			className={
				'[&_.components-custom-select-control__label:empty]:hidden'
			}
		>
			<WPCustomSelectControl
				label={ label }
				options={ selectOptions }
				value={ currentItem }
				onChange={ handleOnChange }
				__nextUnconstrainedWidth={ true }
			/>
		</div>
	);
}
