import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserLayoutComponent } from './view/user-layout.component';
//import { ListComponent } from './list.component';
//import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        
    ],
    declarations: [
      UserLayoutComponent
  //      ListComponent,
    //    AddEditComponent
    ]
})
export class UsersModule { }