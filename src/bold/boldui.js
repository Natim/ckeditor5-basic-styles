/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold/boldui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BoldUIController from './ui/bolduicontroller';
import BoldButtonView from './ui/boldbuttonview';

/**
 * UI part of the bold feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class BoldUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		this.controller = new BoldUIController( this.editor, {
			buttonViewClass: BoldButtonView
		} );
	}
}
