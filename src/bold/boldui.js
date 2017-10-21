/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import boldIcon from '../../theme/icons/bold.svg';
import { keystroke } from './boldediting';

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
		const editor = this.editor;
		const t = editor.t;
		const command = editor.commands.get( 'bold' );

		// Add bold button to feature components.
		editor.ui.componentFactory.add( 'bold', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Bold' ),
				icon: boldIcon,
				keystroke,
				tooltip: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => editor.execute( 'bold' ) );

			return view;
		} );
	}
}
