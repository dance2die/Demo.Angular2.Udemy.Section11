import {Component} from 'angular2/core';
import {NavBarComponent} from "./NavBarComponent";

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [NavBarComponent]
})
export class AppComponent {
}