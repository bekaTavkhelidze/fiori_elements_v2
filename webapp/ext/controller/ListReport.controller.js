sap.ui.define(
  [
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/core/mvc/ControllerExtension',
  ],
  function (Filter, FilterOperator, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend(
      'fiorielementsv2.ext.controller.ListReport',
      {
        override: {
          onInit: function () {
            console.log('Controller extension initialized');
          },
        },
        onCheckBoxSelect: function (oEvent) {
          console.log('first');
          debugger;
          // var oBindingParams = oEvent.getParameter('bindingParams');

          // // ვპოულობთ ჩეკბოქსს ფრაგმენტის ID-ით
          // var oCheckBox = this.byId('idFloorAreaCheckBox');

          // if (oCheckBox && oCheckBox.getSelected()) {
          //   // ვამატებთ ფილტრს: FloorArea > 1000
          //   // "FloorArea" შეცვალეთ თქვენი OData პროპერტის სახელით
          //   var oFilter = new Filter('FloorArea', FilterOperator.GT, 1000);
          //   oBindingParams.filters.push(oFilter);
          // }
        },
      }
    );
  }
);
