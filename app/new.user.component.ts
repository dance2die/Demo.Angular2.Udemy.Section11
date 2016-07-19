import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {UserNameValidators} from './username.validators';

@Component({
    selector: 'NewUser',
    templateUrl: 'app/new.user.component.html'
})
export class NewUserComponent {
    private signupForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.signupForm = fb.group({
            name: ['', Validators.compose([
                Validators.required,
                UserNameValidators.cannotContainSpace
            ])],
            email: [],
            phone: [],
            street: [],
            suite: [],
            city: [],
            zipCode: [],
        });
    }
}
