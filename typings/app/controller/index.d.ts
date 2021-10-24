// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMyInfo from '../../../app/controller/myInfo';
import ExportNote from '../../../app/controller/note';

declare module 'egg' {
  interface IController {
    myInfo: ExportMyInfo;
    note: ExportNote;
  }
}
