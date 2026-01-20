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
        filterItems: function (sValue) {
          const oContext = this.base().getView();
          console.log(oContext);
          if (!sValue) {
            return null;
          }

          return new Filter({
            path: 'FloorArea',
            operator: FilterOperator.GT,
            value1: 2000,
          });
        },
      },
    );
  },
);
