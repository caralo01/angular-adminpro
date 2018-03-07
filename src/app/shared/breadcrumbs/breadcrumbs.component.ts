import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {


  private label: string;

  constructor( private _router: Router,
               public title: Title,
               public meta: Meta 
  ){ 
    this.label = '';

    this.getDataRoute().subscribe(data => {
      this.label = data.titulo;
      this.title.setTitle( this.label );

      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };

      this.meta.updateTag(metaTag);
    })
  }

  ngOnInit() {
  }

  getDataRoute(){
    return this._router.events
      .filter( evento => evento instanceof ActivationEnd)
      .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null)
      .map( (evento: ActivationEnd) => evento.snapshot.data);
  }

}
