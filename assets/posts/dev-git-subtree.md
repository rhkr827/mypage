---
title: Git SubTree
categories: [프로그래밍 이것 저것, Programming]
tags: [git, subtree]
---

`git subtree command`

### Add subtree

```git
git subtree add --prefix={local directory path} {repo} {branch}
```

### Pull subtree

```git
git subtree pull --prefix={local directory path} {repo} {branch}
```

### Push subtree

```git
git subtree push --prefix={local directory path} {repo} {branch}
```

### git subtree --help

```git
_git subtree_ [<options>] -P <prefix> add <local-commit>
_git subtree_ [<options>] -P <prefix> add <repository> <remote-ref>
_git subtree_ [<options>] -P <prefix> merge <local-commit>
_git subtree_ [<options>] -P <prefix> split [<local-commit>]

_git subtree_ [<options>] -P <prefix> pull <repository> <remote-ref>
_git subtree_ [<options>] -P <prefix> push <repository> <refspec>
```
