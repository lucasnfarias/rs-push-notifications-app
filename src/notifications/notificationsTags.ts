import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'Lucas',
    user_email: 'lucas@example.com'
  })
}
