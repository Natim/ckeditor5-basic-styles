/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold/boldbuttonview
 */

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import boldIcon from '../../../theme/icons/bold.svg';

export default class BoldButtonView extends ButtonView {
	constructor( locale ) {
		super( locale );

		const t = locale.t;

		this.set( {
			label: t( 'Bold' ),
			icon: boldIcon,
			keystroke: 'CTRL+B',
			tooltip: true
		} );
	}
}
