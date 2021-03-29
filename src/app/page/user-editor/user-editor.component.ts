import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  constructor(
    private userService: UserService,           /* editor */
    private activatedRoute: ActivatedRoute,     /* editor */
    private router: Router                      /* update  create */
  ) { }

  ngOnInit(): void {
  }

   /* editor */
  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new User());
      }
      return this.userService.get(Number(params.id));
    })
  );

  /* update  create */
  onSubmit(form: NgForm, user: User): void {
    try {
      if (user.id == 0) {
        this.userService.createUser(user).subscribe(
          () => this.router.navigate(['/'])
        );
      }
      else {
        this.userService.updateUser(user).subscribe(
          () => this.router.navigate(['/'])
        );
      }
    } catch (error) {
      // Error message
    }
  }
}
