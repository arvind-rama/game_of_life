/*global define */
define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/cell'
], function (_, Backbone, Store, Todo) {
	'use strict';

	var CellsCollection = Backbone.Collection.extend({
		model: Cell,

		localStorage: new Store('Cells'),
		
		fetchbyPattern: function (pattern) {
			return this.where({pattern: pattern});
		},

		comparator: 'pattern'
	});

	return new TodosCollection();
});
