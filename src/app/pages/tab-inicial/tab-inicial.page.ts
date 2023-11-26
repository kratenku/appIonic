import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsResponse } from 'src/app/interface';
import { Article } from '../../interface/index';

@Component({
  selector: 'app-tab-inicial',
  templateUrl: './tab-inicial.page.html',
  styleUrls: ['./tab-inicial.page.scss'],
})
export class TabInicialPage implements OnInit {

  public articles: Article[] = [];

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.getTopHeadline()
        .subscribe (articles =>this.articles.push(...articles));
        console.log(this.articles);
  }

}
