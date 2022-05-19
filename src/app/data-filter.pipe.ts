import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filter' })
export class DataFilterPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;

    return categories.filter(function(filter){
      return filter.group_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}


// import * as _ from "lodash";
// import {Pipe, PipeTransform} from "@angular/core";


// @Pipe({
// name: "filter"
// })
// export class DataFilterPipe implements PipeTransform {

//     transform(array: any[], query: string, field:any): any {
//         if (query) {
//             console.log('query',query)
//             return _.filter(array, row=>row[field].indexOf(query) > -1);
//         }
//         return array;
//     }
// }