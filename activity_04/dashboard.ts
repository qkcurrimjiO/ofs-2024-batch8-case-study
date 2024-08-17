import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-number";
import "oj-c/input-text";
import "ojs/ojknockout";
import Message = require("ojs/ojmessaging");
import "oj-c/input-password";
import "ojs/ojlabel";
import "ojs/ojdatetimepicker";
import "oj-c/form-layout";
import "knockout";
import "oj-c/button";
import { whenDocumentReady } from "ojs/ojbootstrap";
import { MessageBannerItem, CMessageBannerElement } from "oj-c/message-banner";
import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");
import "ojs/ojformlayout";
import "oj-c/input-text";
import "oj-c/message-banner";
import "ojs/ojknockout";
import "oj-c/progress-bar";
import "ojs/ojbutton";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import "oj-c/input-password";
import "oj-c/form-layout";
import 'ojs/ojdatetimepicker';
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'oj-c/button';
import 'oj-c/message-toast';
import { ojMessage } from 'ojs/ojmessage';
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojprogress-bar";
import "ojs/ojtable";
import 'ojs/ojmessages';
import "oj-c/list-item-layout";
import "oj-c/list-view";
import { ObservableKeySet } from "ojs/ojknockout-keyset";
import { KeySetImpl } from "ojs/ojkeyset";

import "ojs/ojknockout-keyset";
import "ojs/ojknockout";
import "ojs/ojlabel";
import "oj-c/avatar";

interface EmployeeData {
  id: number;
  name: string;
  title: string;
  image: string;
}

class DashboardViewModel {

  value: ko.Observable<string>;
  firstname: ko.Observable<string> | ko.Observable<any>;
  lastname: ko.Observable<string> | ko.Observable<any>;
  salary: ko.Observable<string> | ko.Observable<any>;
  password: ko.Observable<string> | ko.Observable<any>;

  messages: ojMessage.Message[];
  messagesDataprovider: ArrayDataProvider<null, ojMessage.Message>;

  readonly progressValue = ko.observable(20);
  readonly indeterminate = ko.observableArray();

  private readonly deptArray =   [
    {
      "DepartmentId": 10,
      "DepartmentName": "Finance 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2014-06-13",
      "EmployeeCount": 335,
      "Type": "Sales",
      "Currency": "EUR",
      "Primary": [],
      "Rating": 3,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 20,
      "DepartmentName": "Control And Credit 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2019-09-10",
      "EmployeeCount": 206,
      "Type": "HR",
      "Currency": "USD",
      "Primary": [],
      "Rating": 1,
      "TargetComplete": 90
    },
  ] 
  readonly dataprovider = new ArrayDataProvider(this.deptArray, {
    keyAttributes: "DepartmentId",
    implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
  });
    
  private readonly data: Array<EmployeeData> = [
    {
      id: 1,
      name: "Qutubkhan Currimji ",
      title: "BTech CSBS",
      image: "../images/hcm/placeholder-male-01.png",
    },
    {
      id: 2,
      name: "Komal Ayare",
      title: "BTech CS",
      image: "../images/hcm/placeholder-female-01.png",
    },
    {
      id: 3,
      name: "Kashish Desai",
      title: "BTech Extc",
      image: "../images/hcm/placeholder-male-03.png",
    },
    {
      id: 4,
      name: "Aman Mehta ",
      title: "BTech Mech",
      image: "../images/hcm/placeholder-male-04.png",
    },
  ];

  readonly selectedItems = new ObservableKeySet(); // observable bound to selection option to monitor current selections
    readonly selectedIds = ko.observable();
  
    getDisplayValue(set: KeySetImpl<number>) {
      return JSON.stringify(Array.from(set.values()));
    }

    handleSelectedChanged = (event: any) => {
      this.selectedIds(
        this.getDisplayValue(event.detail.value as KeySetImpl<number>)
      ); // show selected list item elements' ids
    };
    readonly dataProvider = new ArrayDataProvider<
      EmployeeData["id"],
      EmployeeData
    >(this.data, { keyAttributes: "id" });
  
    constructor() {
      this.value = ko.observable("Green");
      this.firstname = ko.observable(null);
      this.lastname = ko.observable(null);
      this.salary = ko.observable(null);
      this.password = ko.observable(null);

      const isoTimeYesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      this.messages = [
        {severity: 'confirmation',
          summary: 'Confirmation message summary no detail',
          timestamp: isoTimeYesterday
        }
      ];this.messagesDataprovider = new ArrayDataProvider(this.messages);
    }

    public buttonAction = async(event:Event)=>{
      let elementName = (event.currentTarget as HTMLElement).tagName;
      // alert("You clicked on a button :" +elementName);
      alert("Name = " +this.firstname() +", Salary ="+this.salary());
    
      let id = parseInt(this.firstname());
      let URL = "https://jsonplaceholder.typicode.com/users/"+id;
      let res = await fetch(URL);
      let jsonData = await res.json();
      console.log(jsonData);
    }
}

Bootstrap.whenDocumentReady().then(() => {
  ko.applyBindings(new DashboardViewModel(), document.getElementById('formLayoutOptions'));
});

export = DashboardViewModel;

// type DemoMessageBannerItem = MessageBannerItem & {
//   id: string;
// };

// class DashboardViewModel {
//   value: ko.Observable<string>;
//   firstname: ko.Observable<string> | ko.Observable<any>; // any means can have null values
//   salary: ko.Observable<number> | ko.Observable<any>;
//   password: ko.Observable<any> | ko.Observable<any>;
//   date: ko.Observable<Date> | ko.Observable<any>;
//   button1: ko.Observable<any>;
//   progressValue: ko.Observable<number>;

//   readonly personalInformationMessages: MutableArrayDataProvider<
//     string,
//     DemoMessageBannerItem
//   >;
//   private counter: number;

//   constructor() {
//     this.value = ko.observable("Green");
//     this.firstname = ko.observable(null);
//     this.salary = ko.observable(null);
//     this.password = ko.observable(null);
//     this.date = ko.observable(null);
//     this.button1 = ko.observable(null);
//     this.counter = 0;
//     this.progressValue = ko.observable(0);
  
//     const initialPersonalSectionData = [
//       {
//         id: "message",
//         severity: "confirmation",
//         summary: "Updated personal information",
//         detail:
//           "The provided personal information of the employee has been updated in the database.",
//         timestamp: new Date().toISOString(),
//       },
//     ];
//     this.personalInformationMessages = new MutableArrayDataProvider(
//       initialPersonalSectionData,
//       {
//         keyAttributes: "id",
//       }
//     );
//   }
  
//   public buttonClick = async (event: Event) => {
//     const firstName = this.firstname();
//     const salary = this.salary();
//     this.progressValue(this.progressValue() + 100); // Increment progress value by 100
//     alert(`Hi ${firstName}, your salary is ${salary}.`);
//   };

//   readonly closePersonalInformationMessage = (
//     event: CMessageBannerElement.ojClose<string, DemoMessageBannerItem>
//   ) => {
//     let data = this.personalInformationMessages.data.slice();
//     const closeMessageKey = event.detail.key;

//     data = data.filter((message) => (message as any).id !== closeMessageKey);
//     this.personalInformationMessages.data = data;
//   };
// }

// class ViewModel {
//   private readonly step = ko.observable(0);
//   readonly progressValue = ko.pureComputed(() => {
//     return Math.min(this.step(), 100);
//   });
//   constructor() {
//     window.setInterval(() => {
//       this.step((this.step() + 1) % 200);
//     }, 30);
//   }
// }
// whenDocumentReady().then(() => {
//   ko.applyBindings(
//     new ViewModel(),
//     document.getElementById("progressBarWrapper")
//   );
// });

// export = DashboardViewModel;