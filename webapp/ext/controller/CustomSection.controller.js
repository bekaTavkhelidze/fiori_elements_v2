sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  function (Controller, MessageToast) {
    'use strict';

    return Controller.extend('fiorielementsv2.ext.CustomSection', {
      onCallFuncImportButtonPress: function () {
        const oModel = this.getView().getModel();

        oModel.callFunction('/Mutate', {
          method: 'POST',
          urlPatameter: {
            param: 'parma',
          },
          success() {
            MessageToast.show('Custom Function Import executed1');
          },
        });
      },
    });
  }
);
