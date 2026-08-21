<?php
/**
 * Custom Heading Block
 *
 * @package ystandard_blocks
 */

class Custom_Heading_Block_Test extends WP_UnitTestCase {

	/**
	 * レスポンシブCSSがプリセットより高い詳細度のセレクターで出力されるか
	 */
	public function test_responsive_style_selector_specificity() {
		$block = \ystandard_blocks\Custom_Heading_Block::get_instance();
		$block->enqueue_responsive_style();

		$inline_styles = wp_styles()->get_data( 'ystdb-custom-heading-block-responsive', 'after' );
		$css           = implode( '', (array) $inline_styles );
		$expected      = ':is(h1,h2,h3,h4,h5,h6).ystdb-custom-heading:where([style*="--ystdb--desktop--heading--font-size"]){font-size:var(--ystdb--desktop--heading--font-size) !important;}';

		$this->assertStringContainsString( $expected, $css );
		$this->assertStringNotContainsString( ':is(h1,h2,h3,h4,h5,h6,hgroup).ystdb-custom-heading', $css );
	}
}
