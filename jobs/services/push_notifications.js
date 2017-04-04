import { Permissions, Notifications } from 'expo';

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

    if (status !== 'granted') {
      return;
    }

    let token = await Notifications.getExponentPushTokenAsync();
  }
};
