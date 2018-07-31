import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';

declare var jQuery:any;


@Component({
  selector: 'app-savedpolls',
  templateUrl: './savedpolls.component.html',
  styleUrls: ['./savedpolls.component.scss']
})
export class SavedpollsComponent implements OnInit {
  id:any;
  public data1;
   public filterQuery = "";
   public rowsOnPage = 10;
   public sortOrder = "asc";
  res:any;

  constructor(
  	private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() {
  	this.DraftPolls();
  }

   /********************************** Get Draft Polls***************************************/

    DraftPolls() {
    this.authService.getDraftPolls().then((result) => {
    console.log("Saveddddd",result);
    this.res=result;
    if(this.res.status==true){
         this.data1=this.res.data;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

   publishModal(id){
      jQuery("#publish").modal("show");
      this.id=id;
    }

   /**********************************Publish Drafts***************************************/

  PublishDrafts(){
    let params={
      'type':'PL',
      'id':this.id
    };
     
     this.authService.publishDrafts(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
           jQuery("#publish").modal("hide");
            this.DraftPolls();
            // this.GetSongs();
          }
        else
        {
          console.log("fasleeee")
          }
           
          }, (err) => {
            console.log(err);
          });
  }

}
