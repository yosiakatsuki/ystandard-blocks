<?php
/**
 * Card Block.
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

require_once __DIR__ . '/class-card-block.php';

/**
 * Card ブロック登録ローダー.
 */
class Card_Block_Loader {

	/**
	 * Card_Block インスタンス.
	 *
	 * @var Card_Block|null
	 */
	private $card = null;

	/**
	 * Constructor.
	 */
	public function __construct() {
		// shortcode 登録などの副作用は Card_Block::__construct で行われるため
		// クラス読み込み時点で 1 度だけインスタンス化する.
		$this->card = new Card_Block();
		add_action( 'init', [ $this, 'register_block' ] );
	}

	/**
	 * ブロック登録.
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type(
			__DIR__,
			[ 'render_callback' => [ $this->card, '_render' ] ]
		);
	}
}

new Card_Block_Loader();
