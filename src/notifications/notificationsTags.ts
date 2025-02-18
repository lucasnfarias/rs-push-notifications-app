import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'Lucas',
    user_email: 'lucas@example.com'
  })
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag('cart_items_count', itemsCount)
}
