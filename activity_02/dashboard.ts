import * as AccUtils from "../accUtils";
  import * as ko from "knockout";
  import * as Bootstrap from "ojs/ojbootstrap";
  import "oj-c/input-number";
  import "oj-c/input-text";
  import "ojs/ojknockout";
  import "ojs/ojknockout";
  import Message = require("ojs/ojmessaging");
  import 'oj-c/input-password';
  import "ojs/ojlabel";
  import * as ResponsiveUtils from 'ojs/ojresponsiveutils';
  import { IntlConverterUtils } from 'ojs/ojconverterutils-i18n';
  import { ojDatePicker } from 'ojs/ojdatetimepicker';
  import 'ojs/ojknockout';
  import 'ojs/ojdatetimepicker';
  import 'ojs/ojlabel';
  import "oj-c/form-layout"
  
  
  class DashboardViewModel {
    value: ko.Observable<string>;
    firstname: ko.Observable<string> | ko.Observable<any>; // any means can have null values
    salary:ko.Observable<number> | ko.Observable<any>;
    password:ko.Observable<any> | ko.Observable<any>;
    date:ko.Observable<Date> | ko.Observable<any>;

    
    constructor() {
      this.value = ko.observable("Green");
      this.firstname = ko.observable(null)
      this.salary = ko.observable(null);
      this.password=ko.observable(null);
      this.date=ko.observable(null);
    }
    
  }
export = DashboardViewModel;