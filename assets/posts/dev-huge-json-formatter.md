---
title: Huge Json File Formatter 적용 방법
categories: [프로그래밍 이것 저것, Programming]
tags: [Json]
---

`용량 큰 Json 파일 Formatter 적용 방법`

```textarea
VSCode Prettier Extension 사용 중
Coding을 잘못하여 200MB 넘는 Json 파일 생성
VSCode Prettier 적용 안되는 현상 발생
```

### 방법

Python 2.6+ 이면 사용 가능

```console
type input.json | python -mjson.tool --indent 2 --no-ensure-ascii  > output.json
```

--no-ensure-ascii은 한글 깨짐 방지 옵션

### 추가 옵션

```console
C:\WINDOWS\system32>python -mjson.tool --help
usage: python -m json.tool [-h] [--sort-keys] [--no-ensure-ascii] [--json-lines]
                           [--indent INDENT | --tab | --no-indent | --compact]
                           [infile] [outfile]

A simple command line interface for json module to validate and pretty-print JSON objects.

positional arguments:
  infile             a JSON file to be validated or pretty-printed
  outfile            write the output of infile to outfile

options:
  -h, --help         show this help message and exit
  --sort-keys        sort the output of dictionaries alphabetically by key
  --no-ensure-ascii  disable escaping of non-ASCII characters
  --json-lines       parse input using the JSON Lines format. Use with --no-indent or --compact to produce valid JSON
                     Lines output.
  --indent INDENT    separate items with newlines and use this number of spaces for indentation
  --tab              separate items with newlines and use tabs for indentation
  --no-indent        separate items with spaces rather than newlines
  --compact          suppress all whitespace separation (most compact)
```
