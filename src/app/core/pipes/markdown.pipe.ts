import { Pipe, PipeTransform } from '@angular/core';
import { ContentfulService } from '@ayuda/services/contentful.service';
import { marked } from 'marked';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(private contentful: ContentfulService) { }

  transform(value: any, args?: any): any {
    return marked(value)
  }

}
