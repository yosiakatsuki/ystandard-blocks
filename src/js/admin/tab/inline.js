import Vue from 'vue';
import { Chrome } from 'vue-color';
import hex2rgb from "../../util/_hex2rgb";

export const inlineStyle = () => {
	new Vue( {
		el: '#inline-style',
		data: {
			inline: ystdbOption.inline,
			preview: {
				1: {},
				2: {},
				3: {},
			}
		},
		components: {
			'chrome-picker': Chrome,
		},
		mounted() {
			this.refreshPreview( 1 );
			this.refreshPreview( 2);
			this.refreshPreview( 3 );
		},
		methods: {
			changeInlineStyle: function ( option, data, index ) {
				this.inline[ option ] = data;
				this.refreshPreview( index );
			},
			refreshPreview( index ) {
				const markColorRgb = hex2rgb( this.inline[ `markColor${ index }` ] );
				const markWeight = ( 100 - this.inline[ `markWeight${ index }` ] );
				const markOpacity = this.inline[ `markOpacity${ index }` ] / 100;
				const mark = `linear-gradient(transparent ${ markWeight }%, rgba(${ markColorRgb[ 0 ] },${ markColorRgb[ 1 ] },${ markColorRgb[ 2 ] }, ${ markOpacity }) ${ markWeight }%)`;
				// style属性作成
				this.preview[ index ] = {
					background: 100 !== markWeight ? mark : undefined,
					backgroundPositionY: 100 !== markWeight ? '-0.2em' : undefined,
					color: this.inline[ `color${ index }` ],
					fontSize: ( this.inline[ `fontSize${ index }` ] / 100 ) + 'em',
					fontWeight: 'bold' === this.inline[ `type${ index }` ] ? 700 : undefined,
					fontStyle: 'italic' === this.inline[ `type${ index }` ] ? 'italic !important' : undefined
				};
			}
		}
	} );
};
