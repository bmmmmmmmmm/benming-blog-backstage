import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/showNote', controller.note.showNote);
  router.post('/getNote', controller.note.getNote);
  router.post('/addNote', controller.note.addNote);
  router.post('/changeNote', controller.note.changeNote);
  router.post('/addTags', controller.note.addTags);
  router.post('/clearTags', controller.note.clearTags);
  router.get('/gainMyInfo', controller.myInfo.gainMyInfo);
  router.post('/refreshMyInfo', controller.myInfo.refreshMyInfo);
  // router.post('/changePortrait', controller.myInfo.changePortrait);
  // router.post('/changeGitHub', controller.myInfo.changeGitHub);
  // router.post('/changeQQ', controller.myInfo.changeQQ);
  // router.post('/changeWeChat', controller.myInfo.changeWeChat);
  // router.post('/changeEmail', controller.myInfo.changeEmail);
  // router.post('/changeAliPay', controller.myInfo.changeAliPay);
  // router.post('/changeWeChatPay', controller.myInfo.changeWeChatPay);
};
