import Vue from 'vue';
import { Chrome } from 'vue-color';
import hex2rgb from '../../util/_hex2rgb';

export const inlineStyle = () => {
	new Vue( {
		el: '#inline-style',
		data: {
			inline: ystdbOption.inline,
		},
		components: {
			'chrome-picker': Chrome,
		},
		computed: {
			previewMaker() {
				const self = this;
				return function ( index ) {
					return {
						background: self.getMarker( index ),
						backgroundPositionY: self.getMarkerPositionY( index ),
						color: self.inline[ `color${ index }` ],
						fontSize:
							self.inline[ `fontSize${ index }` ] / 100 + 'em',
						fontWeight:
							'bold' === self.inline[ `type${ index }` ]
								? 700
								: undefined,
						fontStyle:
							'italic' === self.inline[ `type${ index }` ]
								? 'italic !important'
								: undefined,
					};
				};
			},
			previewLager() {
				return {
					fontSize: this.inline.larger / 100 + 'em',
				};
			},
			previewLagerSP() {
				return {
					fontSize: this.inline.largerSP / 100 + 'em',
				};
			},
			previewSmaller() {
				return {
					fontSize: this.inline.smaller / 100 + 'em',
				};
			},
			previewSmallerSP() {
				return {
					fontSize: this.inline.smallerSP / 100 + 'em',
				};
			},
		},
		methods: {
			getMarker( index ) {
				const markWeight = 100 - this.inline[ `markWeight${ index }` ];
				const markOpacity =
					this.inline[ `markOpacity${ index }` ] / 100;
				const markColorRgb = hex2rgb(
					this.inline[ `markColor${ index }` ]
				);
				const mark = `linear-gradient(transparent ${ markWeight }%, rgba(${ markColorRgb[ 0 ] },${ markColorRgb[ 1 ] },${ markColorRgb[ 2 ] }, ${ markOpacity }) ${ markWeight }%)`;
				return 100 !== markWeight ? mark : undefined;
			},
			getMarkerPositionY( index ) {
				const markWeight = 100 - this.inline[ `markWeight${ index }` ];
				return 100 !== markWeight ? '-0.2em' : undefined;
			},
			updateColor( index ) {
				this.inline[ `color${ index }` ] =
					this.inline[ `color${ index }` ].hex;
			},
			updateMakerColor( index ) {
				this.inline[ `markColor${ index }` ] =
					this.inline[ `markColor${ index }` ].hex;
			},
		},
	} );
};
