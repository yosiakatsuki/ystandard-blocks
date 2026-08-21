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

	/**
	 * テキスト合わせ用の属性がサブテキストありでも見出しへ付くか
	 */
	public function test_fit_text_attributes_are_applied_to_heading() {
		$block = \ystandard_blocks\Custom_Heading_Block::get_instance();

		// init未実行の単体テストでも実ブロックのrender filterを検証できるようにする.
		if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'ystdb/custom-heading' ) ) {
			$block->register_block();
		}

		$content  = '<!-- wp:ystdb/custom-heading {"hasSubText":true,"fitText":true} --><hgroup class="ystdb-custom-heading-group"><h2 class="ystdb-custom-heading">メインテキスト</h2><p class="ystdb-custom-heading-sub">サブテキスト</p></hgroup><!-- /wp:ystdb/custom-heading -->';
		$rendered = do_blocks( $content );
		$processor = new WP_HTML_Tag_Processor( $rendered );

		$this->assertTrue( $processor->next_tag( 'HGROUP' ) );
		$this->assertNull( $processor->get_attribute( 'data-wp-interactive' ) );
		$this->assertNull( $processor->get_attribute( 'data-wp-context---core-fit-text' ) );
		$this->assertTrue( $processor->next_tag() );
		$this->assertSame( 'H2', $processor->get_tag() );
		$this->assertTrue( $processor->get_attribute( 'data-wp-interactive' ) );
		$this->assertSame( 'core/fit-text::{"fontSize":""}', $processor->get_attribute( 'data-wp-context---core-fit-text' ) );
		$this->assertSame( 'core/fit-text::callbacks.init', $processor->get_attribute( 'data-wp-init---core-fit-text' ) );
		$this->assertSame( 'core/fit-text::context.fontSize', $processor->get_attribute( 'data-wp-style--font-size' ) );
	}
}
