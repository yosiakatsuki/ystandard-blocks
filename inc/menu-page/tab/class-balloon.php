<?php
/**
 * インライン装飾設定
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\menu_page;

use ystandard_blocks\Config;
use ystandard_blocks\Menu;

defined( 'ABSPATH' ) || die();

/**
 * Class Balloon
 *
 * @package ystandard_blocks\menu_page
 */
class Balloon {

	/**
	 * Inline constructor.
	 */
	public function __construct() {
		add_action(
			Menu::MENU_ADD_ACTION,
			function () {
				echo '<li><a href="#">吹き出し</a></li>';
			}
		);
		add_action( Menu::PANEL_ADD_ACTION, [ $this, 'add_menu' ] );
		add_filter( Menu::SAVE_FILTER, [ $this, 'save' ] );
		add_filter(
			Menu::LOCALIZE_SCRIPT_PARAM,
			function ( $param ) {
				$param['balloon'] = \ystandard_blocks\Balloon::get_balloon_images();

				return $param;
			}
		);
	}

	/**
	 * メニュー作成
	 */
	public function add_menu() {
		?>
		<?php
	}

	/**
	 * 設定保存用データ作成
	 *
	 * @param array $options Options.
	 *
	 * @return array
	 */
	public function save( $options ) {

		if ( isset( $_POST[ Config::OPTION_NAME ] ) ) {
			$options = array_merge(
				$options,
				$_POST[ Config::OPTION_NAME ]
			);
		}

		return $options;
	}
}
