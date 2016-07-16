import {Component} from 'angular2/core';
import {NavBarComponent} from "./NavBarComponent";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PostsComponent} from "./posts.component";
import {UsersComponent} from "./users.component";
import {HomeComponent} from "./HomeComponent";
import {NewUserComponent} from "./new.user.component";

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [NavBarComponent, NewUserComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/users/new', name: 'NewUser', component: NewUserComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent}
])
export class AppComponent {
}