import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/identification/authentication/authentication.service';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  usernameFormControl = new FormControl('', [Validators.required]);
  previousUsername: string;
  authService: AuthenticationService;
  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
              authService: AuthenticationService,
              @Inject(MAT_DIALOG_DATA) public params: any) {
    this.previousUsername = params.username ? params.username : undefined;
    this.usernameFormControl.setValue(params.username);
    this.authService = authService;
  }

  ngOnInit() {
  }

  public onSave(): void {
    this.dialogRef.close({
      username: "|"+this.authService.userValue.role+"|  "+ this.usernameFormControl.value,
      dialogType: this.params.dialogType,
      previousUsername: this.previousUsername
    });
  }
}
