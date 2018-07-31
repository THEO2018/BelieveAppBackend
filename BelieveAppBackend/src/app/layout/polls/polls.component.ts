import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
declare var jQuery:any;

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})



export class PollsComponent implements OnInit {
  getClosed: boolean = false;
  getacative: boolean = true;
  res:any;
  p_poll_setting:any;
  myForm: FormGroup;
  past_num:any;
// data:any;
// data1:any;
   activePage: any;
   public data;
   public data1;
   public filterQuery = "";
   public rowsOnPage = 10;
   public sortOrder = "asc";
   public filterQuery1 = "";
   public rowsOnPage1 = 10;
   public sortOrder1 = "asc";
  constructor(
    public authService: AuthServiceService,
     private fb: FormBuilder) 
  {
    this.getacative = true;
    this.getClosed = false;
     this.myForm = this.fb.group({
         past_polls_visibility_status: ['', Validators.required],
         no_of_past_polls_visible: ['', Validators.required]
      });
   }

  ngOnInit() {
        setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.getActivePoll();
    this.getClosedPoll();
    this.GetPastPollSettings();
  }

      PollModal(){
      // console.log("edit modalll",val)
       jQuery("#edit").modal("show");
    }

getActive(){
      setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
  this.getacative = false;
  this.getClosed = true;
}

getClose(){
      setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
  this.getacative = true;
  this.getClosed = false;
}

showPastNumber(val){
  console.log("showPastNumber",val)
  this.past_num=val;
  console.log(this.past_num)

}


/**********************************Edit Past Poll Settings***************************************/


editPollSetting(val){
  console.log("poll setingssss",val)
   this.authService.editPastPoll(val).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      jQuery("#edit").modal("hide");
      this.getClosedPoll();
      console.log("truee")
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });

}

/**********************************Get Past Polls Settings***************************************/

    GetPastPollSettings() {
    console.log('active')
    this.authService.getPastPollsSettings().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.p_poll_setting=this.res.data;
         this.myForm.get('past_polls_visibility_status').setValue(this.p_poll_setting.past_polls_visibility_status);
         this.myForm.get('no_of_past_polls_visible').setValue(this.p_poll_setting.no_of_past_polls_visible);
         this.past_num=this.p_poll_setting.past_polls_visibility_status;
         console.log('consoledata',this.p_poll_setting);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });

  }
   
/**********************************Get Active Polls***************************************/

    getActivePoll() {
    console.log('active')
    this.authService.getPolls().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
         console.log('consoledata',this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });

  }
   /**********************************Get Closed Polls***************************************/


      getClosedPoll() {

        console.log('closed poll')
      this.authService.getActivePolls().then((result) => {
      console.log(result);
      this.res=result;
      if(this.res.status==true){
           this.data1=this.res.data;
           console.log('consoledata',this.data);
      }
      else{
          console.log("erorr")
      }
       
      }, (err) => {
        console.log(err);
      });

    }

}
