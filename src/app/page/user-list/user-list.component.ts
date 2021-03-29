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

  /* sorter */
  direction: number =1;
  columnKey: string = '';

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

  /* sorter */
  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction = this.direction * -1;     /* -1 esetén  */               /*  1 esetén  */                                /*  1 esetén  */
    } else {                  /* NÖVEKVŐbe és CSÖKKENŐbe is rendez*/  /* NÖVEKVŐbe rendez 1-től felfelé a-tól z-ig */  /* CSÖKKENŐbe rendez pl.100 -tól lefelé, z-től a-ig */
      this.direction = 1;                      /*  1 esetén  */               /*  1 esetén  */                                /*  -1 esetén  */
    }
    this.columnKey = key;
  }

}
