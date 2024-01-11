import { Component } from '@angular/core';

@Component({
  selector: 'app-three',
  template: `
    <h2 class="one">
      Having Inline style and Inline Template
</h2>
  `,
  styles: [ 
    `.one{color:red}`
  ]
})
export class ThreeComponent {

}
