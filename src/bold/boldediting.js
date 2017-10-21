/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold/boldediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import buildModelConverter from '@ckeditor/ckeditor5-engine/src/conversion/buildmodelconverter';
import buildViewConverter from '@ckeditor/ckeditor5-engine/src/conversion/buildviewconverter';
import AttributeCommand from '../attributecommand';

/**
 * The bold feature editing part:
 *  =====================================================================
 * |                               editing                               |
 * |=====================================================================|
 * |                    engine                    |      keystrokes      |
 * |==============================================|======================|
 * |              model              |    view    |
 * |=================================|============|
 * | schema | commands | post-fixers | converters |
 *  ==============================================
 *
 * @extends module:core/plugin~Plugin
 */
export default class BoldEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		// Initialize the engine part.
		this._initEngine();

		// Initialize keystroke.
		this.editor.keystrokes.set( 'CTRL+B', 'bold' );
	}

	/**
	 * Initializes engine part of the plugin:
	 * - adds proper schema rules,
	 * - registers command,
	 * - create converters.
	 *
	 * @private
	 */
	_initEngine() {
		const editor = this.editor;
		const data = editor.data;
		const editing = editor.editing;

		// Allow bold attribute on all inline nodes.
		editor.document.schema.allow( { name: '$inline', attributes: 'bold', inside: '$block' } );
		// Temporary workaround. See https://github.com/ckeditor/ckeditor5/issues/477.
		editor.document.schema.allow( { name: '$inline', attributes: 'bold', inside: '$clipboardHolder' } );

		// Create bold command.
		editor.commands.add( 'bold', new AttributeCommand( editor, 'bold' ) );

		// Build converter from model to view for data and editing pipelines.
		buildModelConverter().for( data.modelToView, editing.modelToView )
			.fromAttribute( 'bold' )
			.toElement( 'strong' );

		// Build converter from view to model for data pipeline.
		buildViewConverter().for( data.viewToModel )
			.fromElement( 'strong' )
			.fromElement( 'b' )
			.fromAttribute( 'style', { 'font-weight': 'bold' } )
			.toAttribute( 'bold', true );
	}
}
