<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e5&labelColor=202024" alt="License"></a>
</p>


## 💻 Projeto

igniteshoesapp

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 by Rocketseat
</p>


<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://discord.gg/rocketseat" target="_blank">
    <img align="center" src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner"/>
  </a>
</p>

<!--END_SECTION:footer-->

## Concepts

### Push Notifications
We used [OneSignal](https://onesignal.com/) to handle the push app notifications. I only tested on Android since to be able to handle iOS push notifications you need to have a paid account on Apple dev account.

We did notifications with app on foreground, background and quit.

We also used additionalData on push notification payload to handle custom behavior.

### Deeplinks
We setup the `scheme` on `app.json`. Used `npx uri-scheme list` to get the list of schemes set on native code.

To test manually, we used this command: `npx uri-scheme open igniteshoes://details/3 --android`

We also used `data.launchURL` on the push notification payload to handle deeplinking when app is opened and we use our internal Notification component to show the push notification.

## WSL Troubleshooting

### Android device via USB
To use my Android Device via USB (because my computer could not handle running the Emulator with Android Studio). I followed this 2 articles:

- https://halimsamy.com/wsl-for-developers-connect-usb-devices
- https://learn.microsoft.com/en-us/windows/wsl/connect-usb

I used them to make the necessary bridge so that the `adb devices` could see my Android device via USB

### Expo start network problem
With WSL2 there is always some issue with the network. In my case, when running `npx expo start --dev-client` the device could not find the IP provided by expo. So i used `--tunnel` flag to be able to find the expo application. I followed this thread:

- https://stackoverflow.com/questions/73311889/unable-to-connect-to-expo-react-native-project-on-wsl2-with-expo-go-on-phone
