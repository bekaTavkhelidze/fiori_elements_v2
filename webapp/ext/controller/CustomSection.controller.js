sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  function (Controller, MessageToast) {
    'use strict';

    return Controller.extend('fiorielementsv2.ext.CustomSection', {
      /**
       * Called when a controller is instantiated and its View controls (if available) are already created.
       * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
       * @memberOf fiorielementsv2.ext.CustomSection
       */
      //	onInit: function () {
      //
      //	},
      /**
       * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
       * (NOT before the first rendering! onInit() is used for that one!).
       * @memberOf fiorielementsv2.ext.CustomSection
       */
      //	onBeforeRendering: function() {
      //
      //	},
      /**
       * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
       * This hook is the same one that SAPUI5 controls get after being rendered.
       * @memberOf fiorielementsv2.ext.CustomSection
       */
      //	onAfterRendering: function() {
      //
      //	},
      /**
       * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
       * @memberOf fiorielementsv2.ext.CustomSection
       */
      //	onExit: function() {
      //
      //	}
      onCallFuncImportButtonPress: function () {
        MessageToast.show('Custom Function Import executed');
      },
    });
  }
);
