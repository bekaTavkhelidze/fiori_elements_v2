sap.ui.define([], () => {
  'use strict';

  return sap.ui.controller(
    'fiorielementsv2.ext.controller.CallFunctionImport',
    {
      onCustomFunctionImport: function () {
        alert('Custom Function Import executed');
      },
    }
  );
});
