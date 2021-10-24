// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMyInfo from '../../../app/model/myInfo';
import ExportNote from '../../../app/model/note';

declare module 'egg' {
  interface IModel {
    MyInfo: ReturnType<typeof ExportMyInfo>;
    Note: ReturnType<typeof ExportNote>;
  }
}
