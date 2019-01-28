# PMultiselectList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Important Points

This custom multi-select widget requires(will take default value if not given) following as @Input parameters:<br>

  `@Input() label:String="Items";` ** Label at the top in the widget<br>
  `@Input() heightOuterDiv:number=210;` ** Height of the widget used<br>
  `@Input() public weightOuterDiv:number=1000;`  ** Width of the widget used<br>
  `@Input() public type:String='box';` ** type could be 'box' type or 'list' type<br>
  `@Input() public itemsLeft:Object[];` ** Items to be shown on the left of widget<br>
  `@Input() public itemsRight:Object[];` ** Items to be shown on the right of widget (Selected Items)<br>

Apart from above, follow the example code snippet given by author. Please change it according to your needs, if required.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
