/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Cell = Backbone.Model.extend({
		defaults: {
			pattern: 'Current Pattern',
			row: 0,
			column: 0,  
		},

		save: function () {
			this.save({
				pattern: this.get('pattern'),
				row: this.get('row'),
				column: this.get('column')
			});
		}
	});

	return Cell;
});
