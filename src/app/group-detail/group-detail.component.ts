import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Group } from '../interfaces/group__and__song';
import { GroupService} from '../services/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: [ './group-detail.component.css' ]
})
export class GroupDetailComponent implements OnInit {
  group: Group;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }

  goBack(): void {
    this.location.back();
  }
}
