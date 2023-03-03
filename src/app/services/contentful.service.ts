import { Injectable } from '@angular/core';

//MODULE
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { marked } from 'marked';

const CONFIG = {
  space: 'i4zkj728hhx8',
  accessToken:
    'LzcI5GyVK8nGMucWEFF5kJcJQMqRCX1ASDUIWWMD_Lo',

  contentTypeIds: {
    blog: 'blogRecarga5g',
  },
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });


  constructor() { }

  
  getPosts(query?: any): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, query))
    .then(res => res.items);

  }

  getPost(id: string): any {
    return from (this.cdaClient.getEntry(id));
  }


  markdownToHtml(md: any) {
    return marked(md)
  }
  
}
