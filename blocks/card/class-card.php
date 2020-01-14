<?php
/**
 * カードブロック
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;
/**
 * Class Card
 */
class Card extends Dynamic_Block {
	/**
	 * Block Name.
	 *
	 * @var string
	 */
	protected $block_name = 'card';
	/**
	 * Script Handle.
	 *
	 * @var string
	 */
	protected $script_name = 'ystandard-blocks-card';
	/**
	 * Block Attributes.
	 *
	 * @var array
	 */
	protected $block_attributes = [
		'className'             => [
			'type' => 'string',
		],
		'url'                   => [
			'type' => 'string',
		],
		'linkTarget'            => [
			'type' => 'string',
		],
		'rel'                   => [
			'type' => 'string',
		],
		'cardType'              => [
			'type' => 'string',
		],
		'title'                 => [
			'type' => 'string',
		],
		'showImage'             => [
			'type' => 'bool',
		],
		'imageSize'             => [
			'type' => 'string',
		],
		'imageType'             => [
			'type' => 'string',
		],
		'imageAlign'            => [
			'type' => 'string',
		],
		'showDscr'              => [
			'type' => 'bool',
		],
		'dscrCharCount'         => [
			'type' => 'number',
		],
		'dscr'                  => [
			'type' => 'string',
		],
		'showDomain'            => [
			'type' => 'bool',
		],
		'backgroundColor'       => [
			'type' => 'string',
		],
		'customBackgroundColor' => [
			'type' => 'string',
		],
		'borderColor'           => [
			'type' => 'string',
		],
		'customBorderColor'     => [
			'type' => 'string',
		],
		'titleColor'            => [
			'type' => 'string',
		],
		'customTitleColor'      => [
			'type' => 'string',
		],
		'dscrColor'             => [
			'type' => 'string',
		],
		'customDscrColor'       => [
			'type' => 'string',
		],
		'domainColor'           => [
			'type' => 'string',
		],
		'customDomainColor'     => [
			'type' => 'string',
		],
	];

	/**
	 * ブログカード表示データのキャッシュ用キー
	 */
	const CACHE_KEY = 'ystdb_card';
	/**
	 * ブログカード表示データ更新までの日数
	 */
	const CACHE_EXPIRATION = 7;
	/**
	 * パラメーター
	 */
	const SCHEMA = [
		'class'                   => '',
		'container_class'         => '',
		'url'                     => '',
		'link_target'             => '',
		'rel'                     => '',
		'card_type'               => 'horizon',
		'title'                   => '',
		'image'                   => '',
		'show_image'              => true,
		'image_size'              => 'normal',
		'image_type'              => 'fitText',
		'image_align'             => '',
		'image_class'             => '',
		'show_dscr'               => true,
		'dscr_char_count'         => 80,
		'dscr'                    => '',
		'show_domain'             => true,
		'domain'                  => '',
		'post_id'                 => 0,
		'background_color'        => '',
		'custom_background_color' => '',
		'border_color'            => '',
		'custom_border_color'     => '',
		'title_color'             => '',
		'custom_title_color'      => '',
		'dscr_color'              => '',
		'custom_dscr_color'       => '',
		'domain_color'            => '',
		'custom_domain_color'     => '',
		'warp_style'              => '',
		'title_style'             => '',
		'dscr_style'              => '',
		'domain_style'            => '',
	];

	/**
	 * 変換リスト
	 */
	const CONVERT = [
		'className'             => 'class',
		'url'                   => 'url',
		'linkTarget'            => 'link_target',
		'rel'                   => 'rel',
		'cardType'              => 'card_type',
		'title'                 => 'title',
		'showImage'             => 'show_image',
		'imageSize'             => 'image_size',
		'imageType'             => 'image_type',
		'imageAlign'            => 'image_align',
		'showDscr'              => 'show_dscr',
		'dscrCharCount'         => 'dscr_char_count',
		'dscr'                  => 'dscr',
		'showDomain'            => 'show_domain',
		'backgroundColor'       => 'background_color',
		'customBackgroundColor' => 'custom_background_color',
		'borderColor'           => 'border_color',
		'customBorderColor'     => 'custom_border_color',
		'titleColor'            => 'title_color',
		'customTitleColor'      => 'custom_title_color',
		'dscrColor'             => 'dscr_color',
		'customDscrColor'       => 'custom_dscr_color',
		'domainColor'           => 'domain_color',
		'customDomainColor'     => 'custom_domain_color',
	];

	/**
	 * パラメーター
	 *
	 * @var array
	 */
	private $params = [];

	/**
	 * キャッシュ
	 *
	 * @var bool|array
	 */
	private $cache = false;

	/**
	 * キャッシュ作成キー
	 *
	 * @var string
	 */
	private $cache_key = '';

	/**
	 * Card constructor.
	 */
	function __construct() {
		add_shortcode( 'ystdb_card', [ $this, 'do_shortcode' ] );
	}

	/**
	 * Render
	 *
	 * @param array $attributes block attributes.
	 *
	 * @return false|string
	 */
	public function render( $attributes ) {

		$this->convert_attributes( $attributes );

		/**
		 * URLチェック
		 */
		if ( '' === $this->params['url'] ) {
			return '';
		}
		if ( ! wp_http_validate_url( $this->params['url'] ) ) {
			return $this->get_text_link( $this->params['url'] );
		}
		/**
		 * 投稿IDの取得
		 */
		$post_id = url_to_postid( $this->params['url'] );
		/**
		 * リンク用データの作成
		 */
		if ( $post_id ) {
			$this->get_post_data( $post_id );
		} else {
			if ( ! $this->get_site_data( $this->params['url'] ) ) {
				return $this->get_text_link( $this->params['url'] );
			}
		}

		return $this->get_card_link( $this->params );
	}

	/**
	 * ショートコード実行
	 *
	 * @param array $args パラメーター.
	 *
	 * @return string
	 */
	public function do_shortcode( $args = [] ) {
		$args = shortcode_atts(
			self::SCHEMA,
			$args
		);

		return $this->render( $args );
	}

	/**
	 * ショートコード用にパラメーターを変換
	 *
	 * @param array $attributes attributes.
	 */
	private function convert_attributes( $attributes ) {
		$new_attributes = [];
		foreach ( self::CONVERT as $key => $new_key ) {
			if ( isset( $attributes[ $key ] ) ) {
				$new_attributes[ $new_key ] = $attributes[ $key ];
			}
		}
		$this->params = wp_parse_args(
			$new_attributes,
			self::SCHEMA
		);
	}

	/**
	 * URLのみのリンクを作成
	 *
	 * @param string $url URL.
	 *
	 * @return string
	 */
	private function get_text_link( $url ) {
		$class = 'ystdb-card__text-link';
		if ( ! empty( $this->params['class'] ) ) {
			$class .= ' ' . $this->params['class'];
		}
		$target = '';
		if ( ! empty( $this->params['link_target'] ) ) {
			$target = ' target="' . $this->params['link_target'] . '"';
		}
		$rel = '';
		if ( ! empty( $this->params['rel'] ) ) {
			$rel = ' rel="' . $this->params['rel'] . '"';
		}

		return "<a class=\"$class\" href=\"$url\" ${target}${$rel}>$url</a>";
	}

	/**
	 * リンクHTML作成
	 *
	 * @param array $args データ.
	 *
	 * @return string
	 */
	public function get_card_link( $args ) {
		/**
		 * 画像の再取得
		 */
		if ( $args['post_id'] && Helper::to_bool( $args['show_image'] ) ) {
			$args['image'] = $this->get_thumbnail(
				$args['post_id'],
				$args['title']
			);
		}

		/**
		 * ラッパー
		 */
		$class[] = 'ystdb-card';
		$class[] = 'is-' . $args['card_type'];
		$class[] = Helper::get_has_class( 'background', $args['background_color'], $args['custom_background_color'] );
		$class[] = Helper::get_has_class( 'border', $args['border_color'], $args['custom_border_color'] );
		$class[] = Helper::get_background_color_class( $args['background_color'] );
		$class[] = Helper::get_border_color_class( $args['border_color'] );
		if ( ! empty( $args['class'] ) ) {
			$class[] = $args['class'];
		}
		$args['class']      = Helper::get_class_names( $class );
		$style              = [];
		$style[]            = Helper::get_background_color_style( $args['custom_background_color'] );
		$style[]            = Helper::get_border_color_style( $args['custom_border_color'] );
		$args['warp_style'] = Helper::get_style_attr( $style );

		/**
		 * コンテナ
		 */
		$class                   = [];
		$class[]                 = 'ystdb-card__container';
		$class[]                 = 'is-' . $args['card_type'];
		$class[]                 = $this->is_horizon( $args['card_type'] ) ? 'has-image-align-' . $args['image_align'] : '';
		$args['container_class'] = Helper::get_class_names( $class );

		/**
		 * 画像
		 */
		if ( $args['image'] ) {
			$image_class[] = 'ystdb-card__image';
			if ( $this->is_horizon( $args['card_type'] ) ) {
				$image_type = 'fitText' === $args['image_type'] ? 'fit' : '';
				if ( $image_type ) {
					$image_class[] = 'is-' . $image_type;
				}
				$image_size_option = 'fixed-horizon' === $args['card_type'] ? '--fixed' : '';
				$image_class[]     = 'is-size--' . $args['image_size'] . $image_size_option;
			}
			$args['image_class'] = implode( ' ', $image_class );
		}

		/**
		 * リンク
		 */
		$class              = [];
		$class[]            = 'ystdb-card__link';
		$class[]            = Helper::get_has_class( 'text-color', $args['title_color'], $args['custom_title_color'] );
		$class[]            = Helper::get_text_color_class( $args['title_color'] );
		$args['link_class'] = Helper::get_class_names( $class );

		if ( ! empty( $args['link_target'] ) ) {
			$args['link_target'] = ' target="' . $args['link_target'] . '"';
		}
		if ( ! empty( $args['rel'] ) ) {
			$args['rel'] = ' rel="' . $args['rel'] . '"';
		}
		$style             = [];
		$style[]           = Helper::get_text_color_style( $args['custom_title_color'] );
		$style             = Helper::get_style_attr( $style );
		$args['link_attr'] = $args['link_target'] . $args['rel'] . $style;

		/**
		 * 概要
		 */
		$class              = [];
		$class[]            = 'ystdb-card__dscr';
		$class[]            = Helper::get_has_class( 'text-color', $args['dscr_color'], $args['custom_dscr_color'] );
		$class[]            = Helper::get_text_color_class( $args['dscr_color'] );
		$args['dscr_class'] = Helper::get_class_names( $class );
		$style              = [];
		$style[]            = Helper::get_text_color_style( $args['custom_dscr_color'] );
		$args['dscr_style'] = Helper::get_style_attr( $style );

		/**
		 * ドメイン
		 */
		$class                = [];
		$class[]              = 'ystdb-card__domain';
		$class[]              = Helper::get_has_class( 'text-color', $args['domain_color'], $args['custom_domain_color'] );
		$class[]              = Helper::get_text_color_class( $args['domain_color'] );
		$args['domain_class'] = Helper::get_class_names( $class );
		$style                = [];
		$style[]              = Helper::get_text_color_style( $args['custom_domain_color'] );
		$args['domain_style'] = Helper::get_style_attr( $style );

		/**
		 * HTML作成
		 */
		$output = $this->get_template_part( $args, 'template-parts/ystdb/card' );
		if ( $output ) {
			return $output;
		}

		return $this->render_by_view( 'card', $args );
	}

	/**
	 * 投稿データ取得
	 *
	 * @param int $post_id 投稿ID.
	 */
	private function get_post_data( $post_id ) {
		$post = get_post( $post_id );
		/**
		 * データ作成
		 */
		$this->params['post_id'] = $post_id;
		// タイトル.
		if ( empty( $this->params['title'] ) ) {
			$this->params['title'] = $post->post_title;
		}
		$this->params['title'] = apply_filters(
			'ystdb_card_post_title',
			$this->params['title'],
			$post_id
		);
		// 画像.
		if ( Helper::to_bool( $this->params['show_image'] ) ) {
			$this->params['image'] = $this->get_thumbnail(
				$post_id,
				$post->post_title
			);
		}
		$this->params['image'] = apply_filters(
			'ystdb_card_post_image',
			$this->params['image'],
			$post_id
		);
		// 概要文.
		if ( Helper::to_bool( $this->params['show_dscr'] ) ) {
			if ( empty( $this->params['dscr'] ) ) {
				$this->params['dscr'] = wp_trim_words(
					html_entity_decode( $this->get_post_excerpt( $post_id ) ),
					$this->params['dscr_char_count']
				);
			}
		} else {
			$this->params['dscr'] = '';
		}
		$this->params['dscr'] = apply_filters(
			'ystdb_card_post_dscr',
			$this->params['dscr'],
			$post_id
		);
		// ドメイン.
		if ( Helper::to_bool( $this->params['show_domain'] ) ) {
			$this->params['domain'] = wp_parse_url( $this->params['url'], PHP_URL_HOST );
		}
	}

	/**
	 * 概要文取得
	 *
	 * @param int $post_id post.
	 *
	 * @return string.
	 */
	private function get_post_excerpt( $post_id ) {
		$post = get_post( $post_id );
		if ( $post->post_excerpt ) {
			return $post->post_excerpt;
		}
		$content = get_extended( $post->post_content );

		return $content['main'];
	}

	/**
	 * 投稿サムネイル取得
	 *
	 * @param int    $post_id 投稿ID.
	 * @param string $alt     alt.
	 *
	 * @return string
	 */
	private function get_thumbnail( $post_id, $alt = '' ) {
		if ( ! has_post_thumbnail( $post_id ) ) {
			return '';
		}
		$sizes = [
			'medium',
			'large',
			'full',
		];
		foreach ( $sizes as $size ) {
			$image = get_the_post_thumbnail( $post_id, $size, [ 'alt' => $alt ] );
			if ( ! empty( $image ) ) {
				return $image;
			}
		}

		return '';
	}


	/**
	 * 外部サイトデータ取得
	 *
	 * @param string $url URL.
	 *
	 * @return bool
	 */
	private function get_site_data( $url ) {
		$this->params['post_id'] = 0;

		/**
		 * 外部サイトから取得する内容をキャッシュから取得
		 */
		$this->get_cache( [ 'url' => $url ] );
		$site_data = [];
		if ( $this->cache ) {
			/**
			 * キャッシュからデータを移す
			 */
			foreach ( $this->cache as $key => $value ) {
				if ( isset( $this->cache[ $key ] ) ) {
					$site_data[ $key ] = $value;
				}
			}
		} else {
			/**
			 * 情報取得
			 */
			$response = wp_remote_get( $url );
			if ( ! is_array( $response ) || 200 !== $response['response']['code'] ) {
				return false;
			}
			$site_data['title'] = $this->get_site_title( $response['body'] );
			$site_data['dscr']  = $this->get_site_description( $response['body'] );
			$site_data['image'] = $this->get_site_thumbnail( $response['body'] );
			/**
			 * キャッシュ作成
			 */
			$this->create_cache( $site_data );
		}
		// タイトル.
		$this->params['title'] = $site_data['title'];
		// 概要.
		if ( Helper::to_bool( $this->params['show_dscr'] ) ) {
			if ( empty( $this->params['dscr'] ) ) {
				if ( $site_data['dscr'] ) {
					$this->params['dscr'] = wp_trim_words(
						html_entity_decode( $site_data['dscr'] ),
						$this->params['dscr_char_count']
					);
				}
			}
		} else {
			$this->params['dscr'] = '';
		}
		// 画像.
		if ( Helper::to_bool( $this->params['show_image'] ) ) {
			$this->params['image'] = $site_data['image'];
		}
		// ドメイン.
		if ( Helper::to_bool( $this->params['show_domain'] ) ) {
			$this->params['domain'] = wp_parse_url( $this->params['url'], PHP_URL_HOST );
		}

		return true;
	}

	/**
	 * タイトルを取得
	 *
	 * @param string $body body.
	 *
	 * @return string
	 */
	private function get_site_title( $body ) {
		if ( 1 === preg_match( '/<title>(.+?)<\/title>/is', $body, $matches ) ) {
			return $matches[1];
		}
		if ( 1 === preg_match( '/<meta.+?property=["\']og:title["\'][^\/>]*?content=["\']([^"\']+?)["\'].*?\/?>/is', $body, $matches ) ) {
			return $matches[1];
		}

		return '';
	}

	/**
	 * サイトdescriptionを取得
	 *
	 * @param string $body Body.
	 *
	 * @return string
	 */
	private function get_site_description( $body ) {
		if ( 1 === preg_match( '/<meta.+?name=["\']description["\'][^\/>]*?content=["\']([^"\']+?)["\'].*?\/?>/is', $body, $matches ) ) {
			return $matches[1];
		}
		if ( 1 === preg_match( '/<meta.+?property=["\']og:description["\'][^\/>]*?content=["\']([^"\']+?)["\'].*?\/?>/is', $body, $matches ) ) {
			return $matches[1];
		}

		return '';
	}

	/**
	 * サイト画像を取得
	 *
	 * @param string $body Body.
	 *
	 * @return string
	 */
	private function get_site_thumbnail( $body ) {
		if ( 1 === preg_match( '/<meta.+?property=["\']og:image["\'][^\/>]*?content=["\']([^"\']+?)["\'].*?\/?>/is', $body, $matches ) ) {
			$image = $matches[1];
			if ( wp_http_validate_url( $image ) ) {
				return sprintf(
					'<img src="%s" width="%s" height="%s" alt="%s">',
					$image,
					500,
					500,
					$this->params['title']
				);
			}
		}

		return '';
	}


	/**
	 * キャッシュからデータ取得
	 *
	 * @param array $args パラメーター.
	 *
	 * @return bool|array
	 */
	private function get_cache( $args ) {
		$this->cache_key = $this->get_cache_key( $args );

		/**
		 * 編集・プレビュー系ならキャッシュをクリア
		 */
		if ( is_admin() || is_preview() || is_customize_preview() ) {
			delete_transient( $this->cache_key );

			return false;
		}
		/**
		 * キャッシュから取得
		 */
		$this->cache = get_transient( $this->cache_key );

		return $this->cache;
	}

	/**
	 * キャッシュの作成
	 *
	 * @param array $args データ.
	 *
	 * @return bool
	 */
	private function create_cache( $args ) {
		if ( empty( $this->cache_key ) ) {
			return false;
		}

		return set_transient( $this->cache_key, $args, self::CACHE_EXPIRATION );
	}

	/**
	 * キャッシュのキーを作成
	 *
	 * @param array $args パラメーター.
	 *
	 * @return string
	 */
	private function get_cache_key( $args ) {
		return substr( self::CACHE_KEY . md5( serialize( $args ) ), 0, 45 );
	}

	/**
	 * カードタイプが横型か判断する
	 *
	 * @param string $type card type.
	 *
	 * @return bool
	 */
	private function is_horizon( $type ) {
		return 'horizon' === $type || 'fixed-horizon' === $type;
	}
}

$card = new Card();
$card->register_block();
