/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	//https://ckeditor.com/cke4/addon/image2
	config.language = "pt-br";
	config.height = 300;
	config.resize_enabled = false;
	config.toolbarCanCollapse = true;
	config.toolbar = [
		//{ name: "document", items: [ "Save", "NewPage", "ExportPdf", "Preview", "Print", "-", "Templates"*/ ] },
		{ name: "clipboard", items: [ /*"Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-",*/ "Undo", "Redo" ] },
		{ name: "editing", items: [ "Find", "Replace", "-"/*, "SelectAll", "-", "Scayt"*/ ] },
		//{ name: "forms", items: [ "Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField" ] },
		{ name: "paragraph", items: [ "NumberedList", "BulletedList", "-", "Outdent", "Indent"/*, "-", "Blockquote", "CreateDiv"*/, "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"/*, "-", "BidiLtr", "BidiRtl", "Language"*/ ] },
		{ name: "links", items: [ "Link", "Unlink"/*, "Anchor"*/ ] },
		{ name: "insert", items: [ "Image"/*, "Flash", "Table"*/, "HorizontalRule"/*, "Smiley", "SpecialChar", "PageBreak", "Iframe"*/ ] },
		{ name: "tools", items: [ "Maximize", "ShowBlocks", "-", "Source" ] },
		"/",
		{ name: "styles", items: [ /*"Styles",*/ "Format"/*, "Font"*/, "FontSize" ] },
		{ name: "basicstyles", items: [ "Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-"/*, "CopyFormatting"*/, "RemoveFormat" ] },
		{ name: "colors", items: [ "TextColor", "BGColor" ] },
		//{ name: "about", items: [ "About" ] }
	];
};
