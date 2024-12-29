# RN-Counter

Rewrite Counter in React Native

## Introduction

When you click the button, the number will increase by 1.

## Basic Info

### Platform

- [x] Android
- [ ] iOS (not implemented yet due to lack of macBook)

### Features

- [x] Save data in SQLite
- [x] React Navigation

## Screenshots

| ![Home](docs/assets/android-home.png) | ![About](docs/assets/android-about.png) |
|---------------------------------------|-----------------------------------------|
| Home Screen                           | About Screen                            |

## Program Structure

Counter uses MVVM architecture.

- Model: [`src/model`](src/model), data class
- ViewModel: [`src/viewmodel`](src/viewmodel), powered by **mobx**
- View: powered by **React Native**

## Dependencies

- react-navigation (Navigation Support)
- react-native-sqlite-storage (SQLite Support)
- mobx (ViewModel Support)
- react-native-vector-icons (Icons Support)

> Refer to [package.json](package.json)

## Run

```bash
yarn start
```

## License

MIT
