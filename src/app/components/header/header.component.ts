import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showAction = new EventEmitter<boolean>();
  showList = true;
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
    public wsService: WebsocketService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.wsService.logoutWebSocket();
  }

  showUserList(): void {
    this.showList = !this.showList;
    this.showAction.emit(this.showList);
  }
}
