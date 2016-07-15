import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
// import {HomeComponent} from "./HomeComponent";
// import {UsersComponent} from "./users.component";
// import {PostsComponent} from "./posts.component";

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES, RouterLink],
    providers: [ROUTER_PROVIDERS]
})
// @RouteConfig([
//     {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
//     {path: '/users', name: 'Users', component: UsersComponent},
//     {path: '/posts', name: 'Posts', component: PostsComponent}
// ])
export class NavBarComponent {

}
