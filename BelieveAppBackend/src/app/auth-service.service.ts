import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Angular2TokenService } from 'angular2-token';

let apiUrl='/admin';
// const apiUrl = 'http://192.168.2.51:3000/admin';

@Injectable()
export class AuthServiceService {

  constructor(
    private http: Http,
    private tokenService: Angular2TokenService) { }


  /**********************************LOGIN***************************************/

  Login(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      email: data.email,
      password: data.password
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/login', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Draft pages***************************************/


  getDraftPages() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_draft_about_pages', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Draft Upcoming Marriages***************************************/


  getDraftUpcoming() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_draft_upcoming_marriages', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Draft Songs of album***************************************/


  getDraftSongs(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      album_id: data.id
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_draft_songs_of_album', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /********************************** Get Draft Polls***************************************/


  getDraftPolls() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_draft_polls', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /********************************** Get Draft Blog***************************************/


  getDraftBlogs() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_draft_blogs', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get Draft Online  stores***************************************/


  getOnline() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_draft_online_stores', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get Draft betrotheds***************************************/


  getDraftbetrotheds() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_draft_betrotheds', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************GET FIANCES***************************************/


  getFiances() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_betrotheds', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get Service Hours Detail***************************************/


  getService() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_service_hours_detail', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Church Detail***************************************/


  getChurch() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_church_detail', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Contact Info***************************************/


  getContact() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_contact_detail', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Upcoming/Today Apoinment***************************************/


  getUpTOApoinments() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_today_upcoming_appointments', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get All Apoinment***************************************/


  getApoinments() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_appointment_requests', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET WEDDING LIST***************************************/


  getWedList() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_wedding_lists', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /********************************** Get About Page Detail***************************************/


  getAboutDetail(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      about_page_id: data
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_about_page_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /********************************** Get Songs of album***************************************/


  getSongs(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      album_id: data.id
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_songs_of_album', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Recommendation***************************************/


  getRecommendations() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_appoved_canceled_recommendations', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Music Albums***************************************/


  getMusicAlbums() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_music_albums', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************get  Event DETAIL***************************************/
  getEventDetail(files) {
    const body = this.StringQuery({
      event_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_event_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /********************************** Get Classifieds Of Category ***************************************/

  getClassifiedsOfCategory() {
   
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_classifieds', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }



 /********************************** Get Classifieds ***************************************/
 
 getClassifieds(){
    
      // alert("calledddd")
           let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          let options = new RequestOptions({ headers: headers });
            // options.params = val;
            return new Promise((resolve, reject) => {
              this.http.get(apiUrl+'/get_classifieds',options)
                .subscribe(res => {
                  resolve(res.json());
                }, (err) => {
                  reject(err);
                });
          });
        }



  /********************************** Get Media of Gallaries ***************************************/

  getMediaOfGallery(files) {
    const body = this.StringQuery({
      gallary_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_media_of_gallaries', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get MEdia detail***************************************/

  getMediaDetail(files) {
    const body = this.StringQuery({
      gallary_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_gallary_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get blog detail***************************************/

  getBlogDetail(files) {
    const body = this.StringQuery({
      blog_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_blog_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get album detail***************************************/
  getAlbumDetail(files) {
    const body = this.StringQuery({
      album_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_album_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************get  GROUP DETAIL***************************************/
  getGroupDetail(files) {
    const body = this.StringQuery({
      group_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_group_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET SMALL GROUPS***************************************/


  getSmall(files) {
    const body = this.StringQuery({
      small_group_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_small_group_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Accept Reject Appointment***************************************/

  appointmentStatus(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      appointment_id: data.id,
      accept_status: data.status
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/accept_reject_appointment', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Remove Classified/category***************************************/


  removeClassified(files) {
    console.log(files);
    const body = this.StringQuery({
      type: files.type,
      type_id: files.type_id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/remove_classified', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Remove MEdia***************************************/


  removeMedia(files) {
    console.log(files);
    const body = this.StringQuery({
      type: files.type,
      type_id: files.type_id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/remove_media', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Remove ALBUMS Songs***************************************/


  removeAlbum(files) {
    console.log(files);
    const body = this.StringQuery({
      type: files.type,
      type_id: files.type_id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/remove_music', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit Classified Category***************************************/


  editClassifiedCat(files) {
    console.log(files);
    const body = this.StringQuery({
      category_name: files.name,
      category_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_classified_category', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Edit Online Store Link***************************************/


  editOnlineStore(files) {
    console.log(files);
    const body = this.StringQuery({
      online_store_url: files.url,
      name: files.name,
      online_store_id: files.id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_online_store_link', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Online Store Link***************************************/


  addOnlineStore(files) {
    console.log(files);
    const body = this.StringQuery({
      online_store_url: files.url,
      name: files.name,
      status: files.status,
      link_url: files.link_url
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_online_store_link', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /********************************** add admin manager***************************************/

  addAdminManager(data: any) {
    console.log('data', data);
    const body = this.StringQuery({
      admin_id: data.admin_id,
      email: data.email,
      name: data.name,
      phone: data.phone,
      password: data.password,
      permissions: data.permission,
      status: data.status
    });
    console.log('body', body);

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.post(apiUrl + '/add_manager_admin', body, options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Permissions***************************************/

  getPermission() {

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_permissions', options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET Managers***************************************/

  getManagers() {

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {

      this.http.get(apiUrl + '/get_all_managers', options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }

  /**********************************get MANAGER DETAIL***************************************/
  getManagerDetail(files) {
    const body = this.StringQuery({
      admin_id: files.admin_id
    });
    console.log('bodyy', body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_manager_detail', body, options).subscribe(res => {
        resolve(res.json()
        );
      },
        (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit Manager***************************************/

  editManager(files) {
    console.log('serviceeee', files);
    const body = this.StringQuery({
      admin_id: files.admin_id,
      name: files.name,
      phone: files.phone,
      permissions: files.permissions,
      status: files.status
    });
    console.log('datavalue', body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_admin_account', body, options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }

  /********************************** Change Password***************************************/

  doChangePassword(data: any) {
    console.log('data', data);
    const body = this.StringQuery({
      email: data.emailCheck,
      current_password: data.currentpassword,
      new_password: data.password
    });
    console.log('body', body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.post(apiUrl + '/change_admin_password', body, options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }


  /**********************************Delete About Page***************************************/


  removeAbout(files) {
    console.log(files);
    const body = this.StringQuery({
      type_id: files.id,
      type: files.type
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/delete_about_page_blog', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Remove Stores/News Link***************************************/


  removeNewsStore(files) {
    console.log(files);
    const body = this.StringQuery({
      type: files.type,
      type_id: files.type_id
    });
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/delete_store_news', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Accept/Reject SMall Group Join Requests***************************************/


  acp_rej_smallgroup_req(files) {
    console.log(files);
    const body = this.StringQuery({
      request_id: files.id,
      accept_status: files.status,
      small_group_id: files.g_id,
      user_id: files.u_id
    });
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/accept_reject_small_group_request', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Accept/Reject Group Join Requests***************************************/


  acp_rej_group_req(files) {
    console.log(files);
    const body = this.StringQuery({
      request_id: files.id,
      accept_status: files.status,
      group_id: files.g_id,
      user_id: files.u_id
    });
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/accept_reject_group_request', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Small Group Join Requests***************************************/


  getSmallGroupRequests(files) {
    console.log(files);
    const body = this.StringQuery({
      small_group_id: files.id
    });
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_small_group_join_requests', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Group Join Requests***************************************/


  getGroupRequests(files) {
    console.log(files);
    const body = this.StringQuery({
      group_id: files.id
    });
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_group_join_requests', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Remove GROUPS***************************************/


  removeCommunity(files) {
    console.log(files);
    const body = this.StringQuery({
      type: files.type,
      type_id: files.type_id
    });
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/remove_community_module', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }



  /**********************************GET News Urls***************************************/


  getNews() {
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_news_urls', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Pending Users***************************************/


  getPending() {
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_pending_users', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Validation Status***************************************/


  getValidation() {
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_validation_status', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET USERS***************************************/


  getUsers() {
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_users', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Classifieds Categories***************************************/


  getClassCategories() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_classifieds_categories', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Media Gallaries***************************************/


  getGalleries() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_media_gallaries', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************GET Events***************************************/


  getUpPastEvents() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_upcoming_past_events', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET GROUPS***************************************/


  getGroups() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_groups', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET CATEGORIES***************************************/


  getAlumni() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_alumni_new_normal_users', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET BLOG CATEGORIES***************************************/


  getBlogCategories() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_blog_categories', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  /**********************************GET CATEGORIES***************************************/


  getCategories() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_event_categories', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET Upcoming***************************************/


  getUpcomingMar() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_upcoming_marriages', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Admin Permissions***************************************/

  getPermissions(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      admin_id: data
    });
    // console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_admin_permissions', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Accept/ Reject User***************************************/

  acceptReject(data, id) {
    console.log('service data', data);
    const body = this.StringQuery({
      user_id: id,
      status: data
    });
    // console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/accept_reject_user', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Change Validation Status***************************************/

  changeValidation(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      status: data
    });
    // console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/change_validation_status', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Classified Category***************************************/

  addClassCategory(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      name: data.title
    });
    // console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_classified_category', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Gallery***************************************/

  addGallery(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      gallary_title: data.title,
      category : data.media_category
    });
    // console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_media_gallary', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Alumni***************************************/


  addAlumni(files) {
    console.log(files);
    const data = {
      user_id: files.id
    };
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/change_to_alumni', data, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Polls***************************************/


  getActivePolls() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_closed_polls', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Past Polls Settings***************************************/


  getPastPollsSettings() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_past_polls_seetings', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Polls***************************************/


  getPolls() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_active_polls', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get Poll detail***************************************/


  getPollDetail(files) {
    const body = this.StringQuery({
      poll_id: files
    });
    // alert("users  calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/get_poll_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Poll***************************************/


  addNewPoll(files) {
    console.log(files);
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_poll', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Event***************************************/


  addEvent(files) {
    console.log(files);
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_event', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit Past Poll Settings***************************************/

  editPastPoll(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      past_polls_visibility_status: data.past_polls_visibility_status,
      no_of_past_polls_visible: data.no_of_past_polls_visible
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_past_poll_settings', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit News***************************************/

  editNews(data) {
  console.log("service data",data);
     let body = this.StringQuery({ 
       news_url:data.news_url,
   });
     console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

     return new Promise((resolve, reject) => {
        this.http.post(apiUrl+'/edit_news_link',body,options)
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

/**********************************Add News***************************************/

 
    addNews(files){
      console.log(files)
            let headers = new Headers();
            let options = new RequestOptions({ headers: headers });
            // options.params = val;
            return new Promise((resolve, reject) => {
              this.http.post(apiUrl+'/add_news_link',files,options)
                .subscribe(res => {
                  resolve(res.json());
                }, (err) => {
                  reject(err);
                });
          });
        }
  /**********************************Betrothed***************************************/

  publishDrafts(data) {
    console.log('service data', data);
    const body = this.StringQuery({
      type: data.type,
      type_id: data.id
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/publish_drafts', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Betrothed***************************************/

  addBetrothed(data, dat) {
    console.log('service data', data);
    const body = this.StringQuery({
      first_user_id: data.first_user_id,
      second_user_id: data.second_user_id,
      visibility_status: data.visibility_status,
      status: dat
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_betrothed', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit Service Hours***************************************/


  editService(files) {
    console.log('serviceeee', files);
    const body = this.StringQuery({
      day_from: files.day_from,
      day_to: files.day_to,
      time: files.time,
      venue: files.venue,
      phone: files.phone
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_service_hours', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit Contact***************************************/


  editContact(files) {
    console.log('serviceeee', files);
    const body = this.StringQuery({
      location: files.location,
      phone: files.phone,
      mail: files.mail,
      website_link: files.website_link,
      facebook_link: files.facebook_link,
      twitter_link: files.twitter_link,
      instagram_link: files.instagram_link,
       latitude: files.latitude,
      longitude: files.longitude,
      country: files.country
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_contact_detail', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit MEdia***************************************/


  editMedia(files) {
    const body = this.StringQuery({
      gallary_title: files.title,
      gallary_id: files.id,
      category : files.media_category
    });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_media_gallary', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  // /**********************************Edit Album***************************************/

  editAlbum(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_music_album', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Classifieds***************************************/

  addClassified(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_classified', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Music Album***************************************/

  addMedia(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_media_to_gallary', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Media to LIbrary***************************************/

  addLibrary(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_media_to_library', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Music Album***************************************/

  addAlbum(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_music_album', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Song to Album***************************************/

  addSong(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_song_to_album', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Add UPCOMING***************************************/

  addUpcoming(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_upcoming_marriages', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add GROUP***************************************/

  addGroup(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/create_group', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add WEDDING***************************************/

  addWedding(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_wedding_list', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Blog Category***************************************/

  addBlogCategory(files) {
    console.log('filesss', files);
    const body = {
      name: files.name
    };
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_blog_category', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Category***************************************/

  addCategory(files) {
    console.log('filesss', files);
    const body = {
      name: files.name
    };
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_event_category', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Approve/cancel Recommendation Requests***************************************/

  appCanRecommendation(files) {
    console.log('filesss', files);
    const body = {
      recommendation_id: files.recommendation_id,
      approve_status: files.approve_status,
      email: files.email,
      admin_description: files.des
    };
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/approve_cancel_recommendation_request', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Betrothed REQUESTS***************************************/

  bethrodRequest(files) {
    console.log('filesss', files);
    const body = {
      betrothed_id: files.betrothed_id,
      accept_status: files.accept_status,
      visibility_status: files.visibility_status
    };
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/accept_reject_betrothed', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************EDIT EVENT***************************************/

  editEvent(files) {
    console.log('filesss', files);
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_event', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  /**********************************Edit Church Info***************************************/

  editChurch(files) {
    console.log('filesss', files);
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_church_info', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************EDIT SMALL GROUP***************************************/

  editSmallGroup(files) {
    console.log('filesss', files);
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_small_group', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  /**********************************EDIT GROUP***************************************/

  editGroup(files) {
    console.log('filesss', files);
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_group', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add BLOG***************************************/

  addBlog(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_blog', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Add Small GROUP***************************************/

  addSmallGroup(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/create_small_group', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Edit About Page***************************************/

  editAbout(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/edit_about_page_detail', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Add About Page***************************************/

  addAbout(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_about_page', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  /**********************************Add Link list***************************************/

  addLinkDetail(files) {
    console.log(files);
    const body = {
      giving_url: files.giving_url
    };
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/update_giving_link', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Link list***************************************/

  addNewLink(files) {
    const body = {
      title: files.title,
      url: files.url
    };
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_new_link', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Add Birthday list***************************************/

  addBirthdaylist(files) {
    // alert("calledddd")
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    // options.params = val;
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/add_birthday_list', files, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Links***************************************/

  getLinkDetail() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_giving_url', options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Links***************************************/

  getLinks() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_links', options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get Library***************************************/

  getLibrary() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_library', options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Online Stores***************************************/


  getOnlineStores() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_online_stores', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


 /**********************************get  User DETAIL***************************************/
 getUserDeatil(files){
       let body = this.StringQuery({ 
       user_id:files.user_id
     });
      // alert("calledddd")
           let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          let options = new RequestOptions({ headers: headers });
            // options.params = val;
            return new Promise((resolve, reject) => {
              this.http.post(apiUrl+'/get_user_profile',body,options)
                .subscribe(res => {
                  resolve(res.json());
                }, (err) => {
                  reject(err);
                });
          });
        }

  /**********************************Get About Pages***************************************/


  getAbout() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_about_pages', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get All Birthday list***************************************/


  getAllBirthday() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_all_birthday_lists', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET All BLOGS***************************************/


  getBlogs() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_blogs', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************Get Recommendation Requests***************************************/


  getRecommRequests() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_recommendation_requests', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  /**********************************GET All Requests***************************************/


  getBethRequests() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_requests_betrotheds', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }



  /**********************************GET All Events***************************************/


  getAllEvents() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_all_events', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************GET SMALL GROUPS***************************************/


  getSmallGroups() {
    // alert("calledddd")
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      // console.log(resolve)
      this.http.get(apiUrl + '/get_small_groups', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


 /**********************************Get Social Share***************************************/

  getSocialShare() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + '/get_social_share_content', options).subscribe(res => {
        resolve(res.json());
      },
        (err) => {
          reject(err);
        });
    });
  }


 /**********************************Update social share content***************************************/

  updateSocialShare(files) {
    console.log(files);
    const body = {
      content: files.social_share
    };
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/update_social_share_content', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }



 /**********************************Add Media ategory***************************************/
 
 addMediaCategory(params){
  console.log("paramssssssssss",params)
  let body={
      name:params.category_name
  }
  // alert("calledddd")
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        // options.params = val;
        return new Promise((resolve, reject) => {
          this.http.post(apiUrl+'/add_media_category',body,options)
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
      });
    }

      /**********************************GET MEDIA CATEGORY***************************************/


   getMediaCategory() {
    // alert("calledddd")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

     return new Promise((resolve, reject) => {
      // console.log(resolve)
        this.http.get(apiUrl+'/get_media_categories',options)
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

 /**********************************DELETE MEDIA CATEGORY***************************************/

  removeMediaCategory(params){
    console.log('paramssss',params);
    let body = this.StringQuery({ 
       category_id:params.category_id
     });
     console.log('Category_iddddddd',body)
     // alert("users  calledddd")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

     return new Promise((resolve, reject) => {
        this.http.post(apiUrl+'/delete_media_category',body,options)
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

    /**********************************Add Artist***************************************/
 
    addArtist(params){
      // alert("calledddd")
            let headers = new Headers();
            let options = new RequestOptions({ headers: headers });
            // options.params = val;
            return new Promise((resolve, reject) => {
              this.http.post(apiUrl+'/add_music_artist',params,options)
                .subscribe(res => {
                  resolve(res.json());
                }, (err) => {
                  reject(err);
                });
          });
        }
  

    /**********************************Get Artist***************************************/


   getMusicArtist() {
    // alert("users  calledddd")
   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
   let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
       this.http.get(apiUrl+'/get_artists',options)
         .subscribe(res => {
           resolve(res.json());
         }, (err) => {
           reject(err);
         });
   });
 }

 removeMusicArtist(params){
  console.log('paramssss',params);
  let body = this.StringQuery({ 
    artist_id:params.artist_id
   });
   console.log('Category_iddddddd',body)
   // alert("users  calledddd")
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });

   return new Promise((resolve, reject) => {
      this.http.post(apiUrl+'/delete_music_artist',body,options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
  });
 }



 /**********************************Update social share content***************************************/

  sendContactRequest(files) {
    console.log(files);
    const body = {
      title: files.title,
      category: files.category,
      description: files.Description
    };
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + '/send_contact_request', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  /**********************************Get Classifieds Categories***************************************/


   getIssueCategories() {
   
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

     return new Promise((resolve, reject) => {
      // console.log(resolve)
        this.http.get(apiUrl+'/get_issue_categories',options)
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }


  public StringQuery(jsonString) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }
}
