import * as AccUtils from "../accUtils";
import * as ko from 'knockout';
  import { RESTDataProvider } from 'ojs/ojrestdataprovider';
  import * as deptArray from 'text!../cookbook/dataprovider/arrayData.json';
  import 'ojs/ojknockout';
  import 'ojs/ojtable';

  type D = { "id": number; "name": string; "username": string };
  type K = D['id'];
  
class IncidentsViewModel {
  dataprovider: RESTDataProvider<K,D>;
  constructor(){
    this.dataprovider = new RESTDataProvider({
      keyAttributes : 'id',
      url : 'https://jsonplaceholder.typicode.com/users',
      transforms : {fetchFirst: {
        request: async (options) =>{
          const url = new URL(options.url);
          return new Request(url.href);
        }, 
        response: async ({body}) =>{
          let data = body;
          return {data};
        }}}
    });
  }

}


export = IncidentsViewModel;