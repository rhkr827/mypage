---
title: handle npm vulnerabilities
categories: [프로그래밍 이것 저것, Programming]
tags: [npm]
---

`Handling npm vulnerabilities`

If not solved after `npm audit fix` or `npm audit fix --force`

# Method 1 - Reinstall

- remove package-lock.json and reinstall

```sh
rm -rf node_modules package-lock.json && npm install
```

# Method 2 - Clean Cache

- command related in clean cache(no explanation)

```sh
npm list # just check installed package list
npm cache clean
npm cache clean --force
npm cache verify
npm i --pakcage-lock-only
```

# Method 3 - Resolution

- Install minimist

```sh
npm install minimist --save-dev
```

- Add resolution in package.json

```json
"resolutions": {
	"minimist": "^1.2.5"
}
```

- Add preinstall script

```json
"scripts": {
  "preinstall": "npx npm-force-resolutions"
}
```

- execute npm install
- execute npm ls minimist check

  - if not resolved, reinstall compatible version of packages occuring vulnerabilities

  **_it could be solved but depend on which package installed for using_**
