import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AdvantageList } from 'src/app/interfaces/advantage-list.interface';

@Component({
    selector: 'app-advantage-list',
    imports: [
        CommonModule,
    ],
    template: `
   <ul class="advantage__ul flex flex-wrap flex-col md:flex-row items-center mt-4">
            @for (option of listOptions(); track $index) {
            <li class="advantage__li basis-2/4 my-4 w-full lg:w-2/4 md:pl-3 md:pr-3">
             
                <p
                  class="advantage_label text-sm relative z-[2]  block py-3 px-4 rounded-md border-l-2 border-l-red-500 dark:border-l-blue-500 bg-white dark:bg-slate-700 shadow-lg hover:text-white hover:before:w-full before:content-[''] before:transition-[width] before:duration-300 before:rounded-md before:absolute before:-z-[1] before:left-0 before:bottom-0 before:w-0 before:h-full before:bg-red-500 dark:before:bg-blue-500">
                  {{ option.label }}
                </p>       
            </li>
            }
          </ul>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdvantageListComponent {

  listOptions = input.required<AdvantageList[]>()

 }

