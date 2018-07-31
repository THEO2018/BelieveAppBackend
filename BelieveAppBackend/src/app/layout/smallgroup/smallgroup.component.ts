import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
import 'datatables.net';

declare var jQuery: any;
@Component({
  selector: 'app-smallgroup',
  templateUrl: './smallgroup.component.html',
  styleUrls: ['./smallgroup.component.scss']
})
export class SmallgroupComponent implements OnInit {
  res: any;
  data: any;
  id: any;
  mytable: any;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortOrder = 'asc';

  constructor(public authService: AuthServiceService) {
  }

  ngOnInit() {
    setTimeout(() => {
      $('#example').DataTable({
        'bPaginate': true,
        'bLengthChange': true,
        // "pageLength": 7,
        'bFilter': true,
        'bInfo': false,
        'bAutoWidth': true
      });
    }, 500);
    this.groups();

  }
  RemoveClick(id) {
    // alert(id)
    jQuery('#request').modal('show');
    this.id = id;

  }

  /**********************************Remove Groups***************************************/

  RemoveComm() {
    // alert("hiiii")
    const params = {
      'type': 'SG',
      'type_id': this.id
    };
    this.authService.removeCommunity(params).then((result) => {
      console.log(result);
      this.res = result;

      if (this.res.status === true) {
        this.groups();
        jQuery('#request').modal('hide');
        this.mytable.destroy();
        setTimeout(() => {
          this.mytable = $('#example').DataTable({
            'bPaginate': true,
            'bLengthChange': true,
            // "pageLength": 7,
            'bFilter': true,
            'bInfo': false,
            'bAutoWidth': true,
            // "ordering": false
          });
        }, 500);
        // this.data=this.res.data;
        console.log(this.data);
      } else {
        console.log('erorr');
      }

    }, (err) => {
      console.log(err);
    });
  }

  /**********************************Get Groups***************************************/

  groups() {
    // alert("hiiii")
    this.authService.getSmallGroups().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status === true) {
        this.data = this.res.data;
        console.log(this.data);
      } else { console.log('erorr'); }

    }, (err) => {
      console.log(err);
    });
  }

}
