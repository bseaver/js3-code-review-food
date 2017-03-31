# Angular 2 Basics

## Epicodus JavaScript Week 3 Code Review featuring Angular 2.

## Copyright (c)
* 2017 Benjamin T. Seaver

## Known Bugs
* No known bugs

## Support and contact details
* None

## License
* MIT

## Key Objectives
* Application uses a model to organize data.
* Components are used to create display and behavior for your templates.
* TypeScript is used throughout application.
* Users can create and edit instances of a model.
* Models can be filtered using a pipe.

## Summarized User Story
* Form to add food with name calories and details
* View list of foods entered
* Filter foods: All, or Calories over 500
* Click food see edit form

## Software Prerequisites
The following is required to create or use this example.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular 2](https://www.npmjs.com/package/angular2-cli)

## Additional Software Utilized
* [Bootstrap](http://getbootstrap.com/)

## Install and run
* `git clone <repository-url>` this repository
* `cd <repository-folder>`
* `npm install`
* `bower install`
* `ng serve`
* Open browser to `localhost:4200`

## Angular 2 Generated Architecture with partial file and folder "names"
* Generate Project with Angular 2 CLI (Command line Interface)
  * $ `ng new food`
* Twitter Bootstrap dependancy
  * $ `bower init`
  * $ `bower install bootstrap --save`
  * (Also manually edit angular-cli.json and .gitignore)
* Generate a Model (Class) for "food"
  * $ `ng g class food`
  * (rename src/app/food.ts to src/app/food.model.ts)
* Generate a Component for listing "list-food"
  * $ `ng g component food-list`
* Generate a Component for Adding "new-food"
  * $ `ng g component new-food`
* Generate a Component for Editing "edit-food"
  * $ `ng g component edit-food`
* Generate a Pipe for filtering food "caloric-content"


## Outline of Planned Git Commits
* Generated project
* README.md
* Integrate Twitter Bootstrap styling
* Data model
* Root component with model and seed data
* List component
* Display list of foods
* Build out list display
* Implement food delete
* Add food component
* Edit food component
* Integrate edit component
* Integrate Add food component
* Caloric Content pipe (food filter)
* Integrate Caloric Content pipe


##### End of File
