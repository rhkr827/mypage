---
title: Dart Code Metrics
categories: [프로그래밍 이것 저것, Programming]
tags: [Dart, Cyclomatic Complexity]
---

`Dart Code Metrics Package`

```textarea
Dart Code analysis Package
Dart Code 복잡도 확인 위해 찾은 package
```

## command

```bash
dart run dart_code_metrics:metrics analyze --reporter=html lib
```

## 실행 결과

### 1. All

![1](/assets/images/posts/dcm_result_all.png)

- 특정 폴더 전체 분석 결과

### 2. Per folder

![2](/assets/images/posts/dcm_per_folder.png)

- 폴더별 분석 결과

### 3. Per file

![3](/assets/images/posts/dcm_per_file.png)

- 소스별로 분석 결과

## 상세 내용은 Dart Code Metrics 홈페이지 참고

[Dart Code metrics Page](https://dartcodemetrics.dev/)
