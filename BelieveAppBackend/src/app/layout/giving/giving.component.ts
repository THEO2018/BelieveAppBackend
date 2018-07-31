import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-giving',
  templateUrl: './giving.component.html',
  styleUrls: ['./giving.component.scss']
})
export class GivingComponent implements OnInit {
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
      'giving_url': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.GetLinksDetail();
    $('#name').on('keypress', function (e) {
      if (e.which === 32 && !this.value.length) {
        e.preventDefault();
      }
    });
  }

  /**********************************Add Link Detail***************************************/


  AddLinksDetail(val, value) {
    console.log(value);
    if (val) {
      this.authService.addLinkDetail(value).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status === true) {
          alert('Link Updated Successfully');
          this.GetLinksDetail();
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


  GetLinksDetail() {
    this.authService.getLinkDetail().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status === true) {
        this.links = this.res.data;
        this.rForm.get('giving_url').setValue(this.links.giving_url);
        // console.log('arrrayy', this.arryData);
      } else {
        console.log('error');
      }

    }, (err) => {
      console.log(err);
    });
  }


}
