import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '.././http.service';

@Component({
  selector: 'app-sub-gallery',
  templateUrl: './sub-gallery.component.html',
  styleUrls: ['./sub-gallery.component.css']
})
export class SubGalleryComponent implements OnInit {
image = [ 0, 1, 2, 3, 4, 5];
id: any;
  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
  }
}
