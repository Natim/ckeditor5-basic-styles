/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BoldEditing from './bold/boldediting';
import BoldUI from './bold/boldui';

/**
 * The bold feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Bold extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ BoldEditing, BoldUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Bold';
	}
}
