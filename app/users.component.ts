import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';

@Component({
    template: `
        <h1>Users</h1>
        <table class="table table-bordered" style="table-layout:fixed">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <tr *ngFor="#user of users">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td class="glyphicon glyphicon-edit"></td>
                    <td class="glyphicon glyphicon-remove"></td>
                </tr>
            </tbody>
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


