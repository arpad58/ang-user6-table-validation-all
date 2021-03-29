import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /* table */
  userList$: Observable<User[]> = this.userService.getAll();

  /* filter */
  phrase: string = '';

  constructor(
    private userService: UserService,    /* table */
  ) { }

  ngOnInit(): void {
  }

  /* delete */
  onDelete(user: User): void {
    alert('Are you sure you want to delete?');
    this.userService.delUser(user).subscribe(
      () => {
         this.userList$ = this.userService.getAll();
       }
    );



  }

  /* filter */
  onFilterPhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
