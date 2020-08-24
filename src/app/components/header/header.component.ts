import { Component, OnInit } from '@angular/core';
declare var $;
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

  }
  ngOnInit(): void {
  }

  // scrollToElement($element): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }

  scrollToTarget(id: string){
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id,
    });
  }

}
