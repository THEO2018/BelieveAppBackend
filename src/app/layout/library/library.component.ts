import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
 res:any;
  public arryData:any; 
 linkData:any;

  constructor(
  	public authService: AuthServiceService) { }

  ngOnInit() 
  { 
  	this.getlibrary();
    this.GetAllLinks();
  }

   /**********************************Get All Links***************************************/


  GetAllLinks() 
  {
  this.authService.getLinks().then((result) => {
    console.log(result);
    this.res = result;
    if (this.res.status == true) 
    {
      this.linkData = this.res.data;
      console.log('arrrayy', this.linkData);
    }
    else 
    {
      console.log("erorr")
    }

  }, (err) => {
    console.log(err);
  });
}

 /**********************************get library***************************************/


  getlibrary() 
  {
  this.authService.getLibrary().then((result) => {
    console.log(result);
    this.res = result;
    if (this.res.status == true) 
    {
      this.arryData = this.res.data;
      console.log('arrrayy', this.arryData);
    }
    else 
    {
      console.log("erorr")
    }

  }, (err) => {
    console.log(err);
  });
}


}
