import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../../interface/index';

@Component({
  selector: 'app-tab2p',
  templateUrl: './tab2p.page.html',
  styleUrls: ['./tab2p.page.scss'],
})
export class Tab2pPage implements OnInit{

  public categorias: string[] = ['business', 'entertainment' , 'general','health','science','sports','technology'];
  public selectedCategory: string = this.categorias[0];
  public article: Article[] = [];

  constructor(private newsService : NewsService) { }


  ngOnInit() {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.article = [...this.article, ...articles]
    })
  }


  segmentChanged(event : any){
    //console.log(event.detail.value)
    this.selectedCategory = event.detail.value
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.article = [...articles]
    })

  }

}
