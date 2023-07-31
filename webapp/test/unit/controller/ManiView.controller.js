/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices/controller/ManiView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ManiView Controller");

	QUnit.test("I should test the ManiView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
