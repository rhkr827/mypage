---
title: Firebase Emulator
categories: [프로그래밍 이것 저것, Programming]
tags: [Firebase]
---

`Firebase Emulator set environment`

# Installation

```sh
npm install firebase-functions@latest firebase-admin@latest --save
npm install -g firebase-tools
```

# Configuration

```sh
firebase init
firebase init emulators
```

- init per emulator as below if emulator is not run properly

```sh
firebase init hosing
firebase init database
firebase init firestore
firebase init functions
```

# Execute

```sh
firebase emulators:start
```

# Firebase Emulator with Flutter Conguration

## Configuration

```sh
flutter pub add firebase_core
flutterfire configure
```

## Implement in dart file

import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

## Command

```sh
flutter pub add [packagename]
flutter docter # for checking
flutter build web | windows | apk
flutter upgrade
```
