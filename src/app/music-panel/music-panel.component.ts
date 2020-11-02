import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import {GROUPS, SONGS} from '../data__array';

@Component({
  selector: 'app-music-panel',
  templateUrl: './music-panel.component.html',
  styleUrls: ['./music-panel.component.scss']
})
export class MusicPanelComponent {
  title = 'musicAngular';
  audioObj = new Audio();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart'
  ];

  @Input() id: number;

  files = GROUPS;
  songs = SONGS;

  currentTime = '00:00:00';
  duration = '00:00:00';
  seek = 0;

  streamObserver(url) {
    return new Observable(observer => {

      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        console.log(event);
        this.seek = this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
      };

      this.addEvent(this.audioObj, this.audioEvents, handler);

      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        this.removeEvent(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  addEvent(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  removeEvent(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  setSeekTo(ev) {
    this.audioObj.currentTime = ev.target.value;
  }

  setVolume(ev) {
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value);
  }

  openFile(url) {
    this.streamObserver(url).subscribe(event => {
    });
    console.log(url);
  }

  play() {
    this.audioObj.play();
    console.log('click play');
  }

  pause() {
    this.audioObj.pause();
    console.log('click pause');
  }

  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('click stop');
  }

  timeFormat(time, format = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
