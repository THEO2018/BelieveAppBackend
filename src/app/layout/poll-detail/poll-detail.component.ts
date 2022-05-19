import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-poll-detail',
    templateUrl: './poll-detail.component.html',
    styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {
    id: any;
    data: any;
    res:any;
    _date:any;
    constructor(public authService:AuthServiceService,
    private route:ActivatedRoute) {

        this.route.params.subscribe(params => {
            console.log(params);
            this.id=params.id;
          });
    }

    ngOnInit() {
        this.pollDetail();
    }


    pollDetail() {
        console.log('poll detail',this.id);
        this.authService.getPollDetail(this.id).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
             this.data=this.res.data;
             this._date=moment(this.data.end_time).format('hh:mm a');
             console.log('poll detail',this.data);
             console.log('poll time',this._date);
        }
        else{
            console.log("erorr")
        }
         
        }, (err) => {
          console.log(err);
        });
    
      }
}
