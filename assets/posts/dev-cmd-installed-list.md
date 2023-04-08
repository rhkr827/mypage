---
title: PowerShell command for installed list and etc
categories: [프로그래밍 이것 저것, Programming]
tags: [Windows, PowerShell]
---

`Powershell command for list of installed programs or packages or extention

# Windows Program List

```powershell
winget export -o "D:\Document\EnvDocument\$(GET-DATE -Format "yyyyMMdd")_windows_installed_program_list.json" --include-versions
```

# VSCode Extentsions list

```powershell
code --list-extensions --show-versions > "D:\Document\EnvDocument\$(GET-DATE -Format "yyyyMMdd")_vscode_extensions_list.txt"
```

code --list-extensions --show-versions > d:\vscode_extensions_list.txt

# npm installed package list

```powershell
npm ls -g > "D:\Document\\EnvDocument\$(GET-DATE -Format "yyyyMMdd")_npm_installed_list.txt"
```

# PowerShell get filelist in all subdirectory

```powershell
$srcPath="..."
Get-ChildItem -Path $srcPath -Recurse | Sort-Object CreationTime | FT -Property Name, CreationTime, LastWriteTime, Mode > "D:\Document\EnvDocument\$(GET-DATE -Format "yyyyMMdd")_vscode_file_list.txt"
```

# Open NotePad++ in Powershell

```powershell
start notepad++
```

# Visual Studio Code User Directory Path

```Windows
%APPDATA%/Code/User/
```
