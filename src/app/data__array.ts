import { Group } from './interfaces/group__and__song';
import { Song } from './interfaces/group__and__song';

export const GROUPS: Group[] = [
  { id: 1, name: 'Metallica'},
  { id: 2, name: 'Queen'},
  { id: 3, name: 'Kiss'},
  { id: 4, name: 'Led Zeppelin'},
  { id: 5, name: 'AC/DC'},
  { id: 6, name: 'Marilyn Manson'},
  { id: 7, name: 'Judas Priest'},
  { id: 8, name: 'Scorpions'},
  { id: 9, name: 'Nirvana'},
  { id: 10, name: 'Linkin Park'}
];

export const SONGS: Song[] = [
  { id: 1, name: 'Nothing else matters', url: './assets/songs/Nothing_Else_Matters.mp3', categoriesId: 1 },
  { id: 2, name: 'Enter Sandman', url: './assets/songs/Enter_Sandman.mp3', categoriesId: 1 },
  { id: 3, name: 'The Unforgiven', url: './assets/songs/The_Unforgiven.mp3', categoriesId: 1 },
  { id: 4, name: '111', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 2 },
  { id: 5, name: '222', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 2 },
  { id: 6, name: '333', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 2 },
  { id: 7, name: 'Judas Priest', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 3 },
  { id: 8, name: 'Scorpions', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 3 },
  { id: 9, name: 'Nirvana', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 3 },
  { id: 10, name: 'Linkin Park', url: './assets/songs/ABBA__Dance.mp3', categoriesId: 3 }
];
