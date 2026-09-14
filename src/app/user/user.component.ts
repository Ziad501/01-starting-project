import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.id());
  }

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  // selectedUsers = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'assets/users/' + this.selectedUsers().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUsers.avatar;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  // }
}
