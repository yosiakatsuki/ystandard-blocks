<?php
/**
 * Card Block View
 *
 * @package yStandard_blocks
 *
 * @var array $attributes attributes.
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

?>
<div class="<?php echo $attributes['class']; ?>" <?php echo $attributes['warp_style']; ?>>
	<div class="<?php echo $attributes['container_class']; ?>">
		<?php if ( $attributes['image'] ): ?>
			<figure class="<?php echo esc_attr( $attributes['image_class'] ); ?>">
				<?php echo $attributes['image']; ?>
			</figure>
		<?php endif; ?>
		<div class="ystdb-card__text">
			<div class="ystdb-card__title">
				<a class="<?php echo $attributes['link_class']; ?>" href="<?php echo esc_url_raw( $attributes['url'] ); ?>"<?php echo $attributes['link_attr']; ?>><?php echo esc_html( $attributes['title'] ) ?></a>
			</div>
			<?php if ( $attributes['dscr'] ): ?>
				<div class="<?php echo $attributes['dscr_class']; ?>"<?php echo $attributes['dscr_style']; ?>>
					<?php echo esc_html( $attributes['dscr'] ); ?>
				</div>
			<?php endif; ?>
			<?php if ( $attributes['domain'] ): ?>
				<div class="<?php echo $attributes['domain_class']; ?>"<?php echo $attributes['domain_style']; ?>><?php echo esc_html( $attributes['domain'] ); ?></div>
			<?php endif; ?>
		</div>
	</div>
</div>
