import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';

@Component({
    template: `
        <h1>Users</h1>
        <table class="table table-bordered">
            <tr *ngFor="#user of users">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    `,
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    private users = [];

    constructor(private usersService: UsersService){
    }

    ngOnInit():any {
        this.usersService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
}


