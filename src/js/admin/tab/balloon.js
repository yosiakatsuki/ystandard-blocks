import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

export const balloon = () => {
	new Vue({
		el: '#balloon',
		data: {
			balloon: ystdbOption.balloon,
		},
		mounted() {
			UIkit.use(Icons);
		},
		computed: {
			count() {
				return this.balloon.length;
			},
		},
		methods: {
			deleteImage(index) {
				this.balloon.splice(index, 1);
			},
			addImage() {
				this.balloon.push({
					url: '',
					name: '',
				});
				UIkit.icon();
			},
			selectImage(index) {
				const self = this;
				const customUploader = wp.media({
					title: '画像を選択',
					button: {
						text: '選択',
					},
					multiple: false,
				});
				customUploader.on('select', () => {
					const image = customUploader.state().get('selection');
					image.each(function (file) {
						const imageUrl = file.toJSON().url;
						if (imageUrl) {
							self.balloon[index].url = imageUrl;
						}
					});
				});
				customUploader.open();
			},
		},
	});
};
