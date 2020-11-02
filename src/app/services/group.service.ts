import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Group } from '../interfaces/group__and__song';
import { GROUPS } from '../data__array';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class GroupService {

  constructor(private messageService: MessageService) { }

  getGroups(): Observable<Group[]> {
    this.messageService.add('GroupService: fetched groups');
    return of(GROUPS);
  }

  getGroup(id: number): Observable<Group> {
    this.messageService.add(`GroupService: fetched group id=${id}`);
    return of(GROUPS.find(group => group.id === id));
  }
}
