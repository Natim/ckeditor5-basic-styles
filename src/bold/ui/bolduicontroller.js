/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold/bolduicontroller
 */

export default class BoldUIController {
	constructor( editor, options ) {
		const ButtonView = options.buttonViewClass;
		const command = editor.commands.get( 'bold' );

		// Add bold button to feature components.
		editor.ui.componentFactory.add( 'bold', locale => {
			const view = new ButtonView( locale );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			view.on( 'execute', () => editor.execute( 'bold' ) );

			return view;
		} );
	}
}
