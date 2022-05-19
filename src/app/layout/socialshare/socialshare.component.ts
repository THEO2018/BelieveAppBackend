import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-socialshare',
  templateUrl: './socialshare.component.html',
  styleUrls: ['./socialshare.component.scss']
})
export class SocialshareComponent implements OnInit {
  links: any;
  res: any;
  rForm: FormGroup;
  urlPattern = '^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/|www.){1}([0-9A-Za-z].+)';
  constructor(
    private router: Router,
    public authService: AuthServiceService,
    public fb: FormBuilder
  ) {
    this.rForm = this.fb.group({
      'social_share': [null, Validators.required]
    });
  }

  ngOnInit() {
   this.GetSocialshare();
    $('#name').on('keypress', function (e) {
      if (e.which === 32 && !this.value.length) {
        e.preventDefault();
      }
    });
  }

  /**********************************Update social Detail***************************************/


  UpdateSocialShare(val, value) {
    console.log(value);
    if (val) {
      this.authService.updateSocialShare(value).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status === true) {
        //  alert('Social Share Introductry content updated successfully');
          this.GetSocialshare();
        } else {
          console.log('error');
        }

      }, (err) => {
        console.log(err);
      });
    } else {
      alert('Fill required Fields*');
    }

  }


  /**********************************Get Link Detail***************************************/


  GetSocialshare() {
    this.authService.getSocialShare().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status === true) {
        this.links = this.res.data;
        this.rForm.get('social_share').setValue(this.links.content);
        // console.log('arrrayy', this.arryData);
      } else {
        console.log('error');
      }

    }, (err) => {
      console.log(err);
    });
  }


}
