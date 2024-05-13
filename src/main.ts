import { MAIL_ADDRESS } from "../env";

// create integer random.
const integerRandom = (min: number, max: number): number =>
  Math.floor(Math.random() * (max + 1 - min) + min);

// When this function returned true, send email.
const timingOfSendMail = (): boolean => {
  const date = new Date();
  const nowHours = date.getHours();
  const nowMinutes = date.getMinutes();

  const randomHours = integerRandom(0, 12);
  const randomMinutes = integerRandom(0, 59);

  return nowHours === randomHours || nowMinutes === randomMinutes;
};

// Send to The user.
const mailLikeBeReal = () => {
  const adress: string = MAIL_ADDRESS;
  if (timingOfSendMail()) {
    GmailApp.sendEmail(
      adress,
      "今から2分以内にスマホのスクリーンショットを撮りましょう！！",
      "BE:Realからの通知。今から2分以内にスマホのスクリーンショットを撮りましょう！！"
    );
  }
};
