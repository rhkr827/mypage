---
title: Visual Studio(Not VSCode) increase XML file size
categories: [프로그래밍 이것 저것, Programming]
tags: [Windows, Visual Studio, XML]
---

`Set Maximum of XML Size in Visual Studio such as 2019, 2022`

1. Open Developer Command Prompt
2. Execute below command

```command
VsRegEdit set local HKLM XmlEditor MaxFileSizeSupportedByLanguageService string 500
```
