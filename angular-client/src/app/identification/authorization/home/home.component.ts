import { Component } from '@angular/core';

import { User } from '../../model/user';
import { AuthenticationService } from '../../authentication/authentication.service';


@Component({ 
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']

})
export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(private authService: AuthenticationService) {
        this.currentUser = this.authService.userValue;
    }

    ngOnInit() {
    }
}