---
title: Command of Python set environment and etc
categories: [프로그래밍 이것 저것, Programming]
tags: [Python, venv]
---

`Command for set Python Environment`

# Config venv

```sh
py -3 -m venv env
source env/Scripts/activate
python -m pip install --upgrade pip
```

# Create requirements.txt and Install via requirements.txt

```sh
pip freeze > requirements.txt
pip install -r requirements.txt
```

# Remove all modules

- If venv is activated, remove all of venv moduels or global

```sh
pip freeze > D:/requirements.txt
pip uninstall -r D:/requirements.txt -y
```

# Execute bash shell

```sh
bash py_init_env.sh
```

# Web Crawling module

```sh
pip install scrapy
```

# deprecated - memo for spelling
