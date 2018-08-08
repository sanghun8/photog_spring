import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  user: any;
  errs: String[];

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.user = '';
    this.errs = [];
  }

  onSubmit() {
    // let person = this.user.password;
    // let observable = this._http.getUser(this.user);
    // console.log('this should show the observable', this.user);
    // observable
    this._http.getUser(name).subscribe(data => {
      console.log('Hitting on submit', data);
      if (data['status'] === 'good') {
        this._router.navigate(['/usergallery']);
      } else {
        console.log('Failing on submit', data);
        this.errs = this.extractErrs(data['data']);
      }
    });
  }
  extractErrs(err_obj) {
    let res = [];
    console.log(err_obj)
    for(let key in err_obj.errors) {
      res.push(err_obj.errors[key].message)
    }
    console.log(res)
    return res;
  }
}
