import Vue from 'vue';
import UIkit from 'uikit';

export const balloon = () => {
	new Vue( {
		el: '#balloon',
		data: {
			balloon: ystdbOption.balloon,
		},
		mounted() {
			console.log( this.balloon );
			UIkit.sortable( '#balloon-list' );
		},
		methods: {
			deleteImage( index ) {
				this.balloon[ index ].url = '';
			}
		},
	} );
};
