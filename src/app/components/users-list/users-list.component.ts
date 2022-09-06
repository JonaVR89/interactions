import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Output()
  myAvatar = new EventEmitter<number>();
  activeUsersObs: Observable<any>;
  selectedAvatar = '';
  avatars = [
    'assets/heroes_01.png',
    'assets/heroes_02.png',
    'assets/heroes_03.png',
    'assets/heroes_04.png',
    'assets/heroes_05.png',
    'assets/heroes_06.png',
    'assets/heroes_07.png',
    'assets/heroes_08.png',
    'assets/heroes_09.png'
  ];

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.activeUsersObs = this.chatService.getActiveUsers();
    this.chatService.emitActiveUsers();
  }
}
