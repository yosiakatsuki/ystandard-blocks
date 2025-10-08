import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies.
 */
import { getColorClassName } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { getCustomSpacingValues } from '@aktk/block-components/components/custom-spacing-select';
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';
import { getBorderRadiusStyles } from '@aktk/block-components/components/border-radius-control';
/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
import { getBlockStyleClasses } from '@aktk/blocks/components/block-classes';
import { getBorderStyles } from '@aktk/blocks/components/border-box-control';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';
