sap.ui.define(['sap/m/MessageToast'], (MessageToast) => {
  'use strict';

  return sap.ui.controller(
    'fiorielementsv2.ext.controller.CallFunctionImport',
    {
      onCustomFunctionImport: function () {
        const oModel = this.getView().getModel();

        const oView = this.extensionAPI;
        oModel.callFunction('/mutate', {
          method: 'POST',
          urlParameters: {
            param: 'param',
          },
          success() {
            oView.refresh(undefined);

            MessageToast.show('Custom Function Import executed1');
          },
        });
      },
    }
  );
});
