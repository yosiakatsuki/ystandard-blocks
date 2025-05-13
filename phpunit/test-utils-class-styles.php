<?php
/**
 * Class utils\Styles
 *
 * @package ystandard_blocks
 */

class Utils_Styles_Test extends WP_UnitTestCase {

	/**
	 * ラッパー付きで正しく変換できるか
	 */
	public function test_wrap_true() {
		$token    = 'var:preset|spacing|60';
		$expected = 'var(--wp--preset--spacing--60)';
		$this->assertSame( $expected, \ystandard_blocks\utils\Styles::wp_preset_token_to_css_var( $token ) );
	}

	/**
	 * ラッパー無しで正しく変換できるか
	 */
	public function test_wrap_false() {
		$token    = 'var:preset|spacing|60';
		$expected = '--wp--preset--spacing--60';
		$this->assertSame( $expected, \ystandard_blocks\utils\Styles::wp_preset_token_to_css_var( $token, false ) );
	}

	/**
	 * spacing 以外（例：color）でも変換できるか
	 */
	public function test_other_feature() {
		$token    = 'var:preset|color|primary';
		$expected = 'var(--wp--preset--color--primary)';
		$this->assertSame( $expected, \ystandard_blocks\utils\Styles::wp_preset_token_to_css_var( $token ) );
	}

	/**
	 * トークン形式でない値は変更しない
	 */
	public function test_pass_through() {
		$token = '12px';
		$this->assertSame( $token, \ystandard_blocks\utils\Styles::wp_preset_token_to_css_var( $token ) );
	}
}
