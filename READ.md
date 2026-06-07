# 오늘마음

생각이 많을 때, 머릿속 생각을 꺼내 짧게 정리하는 **Spring Boot 기반 모바일 웹앱**입니다.

오늘마음은 사용자가 감정적으로 복잡한 순간에 생각을 더 파고들지 않고, 짧은 질문을 통해 머릿속 생각을 밖으로 꺼내고 정리한 뒤 지금 할 수 있는 작은 행동으로 돌아오게 돕는 개인 기록 웹앱입니다.

---

## 배포 상태

* 1차 MVP 배포 완료
* 배포 플랫폼: Render
* 배포 방식: Docker 기반 Spring Boot 웹앱 배포
* 저장 방식: 브라우저 localStorage
* 배포 URL: https://todaymind.onrender.com

---

## 프로젝트 개요

### 프로젝트명

오늘마음

### 서비스 형태

Spring Boot + Thymeleaf 기반 모바일 웹앱

### 한 줄 소개

생각이 너무 많아 머릿속이 복잡한 사람들이 짧은 질문을 통해 생각을 꺼내고 정리한 뒤, 지금 할 수 있는 작은 행동으로 돌아올 수 있도록 돕는 생각 정리 웹앱입니다.

---

## 문제 정의

생각이 많은 사람은 감정이 올라오는 순간, 실제로 일어난 일과 자신이 붙인 해석을 구분하기 어려워집니다.

예를 들어 친구가 카톡을 읽고 답장을 하지 않았을 때, 실제 사실은 “답장이 아직 오지 않았다”입니다.

하지만 사용자는 “나를 무시하는 것 같다”, “내가 귀찮은 사람이 된 것 같다”, “관계가 멀어진 것 같다”처럼 해석을 붙일 수 있습니다.

이때 필요한 것은 긴 분석이나 상담이 아니라, 지금 머릿속에 있는 생각을 빠르게 꺼내고 짧게 정리한 뒤 다시 현재로 돌아오는 경험입니다.

---

## 핵심 페인포인트

생각이 너무 많을 때, 머릿속에서 사실과 해석이 뒤섞이지만 그것을 짧게 꺼내 정리할 도구가 없습니다.

오늘마음은 이 문제를 해결하기 위해 다음 질문을 제공합니다.

1. 무슨 일이 있었나요?
2. 어떤 감정이 들었나요?
3. 머릿속에 떠오른 생각은 무엇인가요?
4. 실제로 확인된 사실은 무엇인가요?
5. 지금 할 수 있는 작은 행동은 무엇인가요?

---

## 핵심 가치

오늘마음은 사용자가 생각을 더 파고들지 않도록 돕습니다.

| 지양            | 지향               |
| ------------- | ---------------- |
| 생각을 더 파고들게 하기 | 생각을 밖으로 꺼내기      |
| 감정 분석하기       | 감정 인식하기          |
| 정답 찾기         | 지금 할 수 있는 행동 정하기 |
| 치료/상담처럼 느껴지기  | 개인 기록 도구처럼 느껴지기  |
| 긴 질문 던지기      | 짧은 질문으로 정리하기     |

---

## 주요 기능

### 1차 MVP 기능

* 메인 화면
* 생각 정리 작성
* 정리 완료 화면
* 기록 목록 조회
* 기록 상세 조회
* 기록 수정
* 기록 삭제
* 전체 기록 삭제
* 개인정보 안내 화면
* 앱 정보 화면
* 모바일 중심 반응형 UI
* Render 배포

---

## 1차 MVP에서 제외한 기능

1차 MVP에서는 핵심 사용 경험을 빠르게 검증하기 위해 다음 기능을 제외했습니다.

* 회원가입
* 로그인
* 로그아웃
* 서버 DB 저장
* Spring Security
* JPA
* 계정 삭제
* 기기 간 동기화

---

## DB를 1차 MVP에서 제외한 이유

오늘마음의 핵심 가치는 회원가입이나 서버 저장이 아니라, 사용자가 생각이 많을 때 바로 들어와서 생각을 꺼내고 정리하는 경험입니다.

초기 버전에서 DB, 로그인, 회원가입을 먼저 넣으면 사용자는 앱을 사용하기 전에 계정을 만들어야 합니다.

감정이 복잡한 순간에 사용자는 다음과 같은 이유로 이탈할 수 있습니다.

* 회원가입이 귀찮다.
* 내 감정 기록이 서버에 저장되는 것이 부담스럽다.
* 지금 당장 정리하고 싶은데 절차가 많다.
* 비밀번호나 계정 관리가 번거롭다.

따라서 1차 MVP에서는 로그인과 서버 DB를 제외하고, localStorage 기반으로 핵심 사용 경험을 먼저 검증했습니다.

---

## 저장 방식

1차 MVP에서는 서버 DB를 사용하지 않습니다.

사용자 기록은 브라우저 localStorage에 저장됩니다.

### 장점

* 회원가입 없이 바로 사용할 수 있습니다.
* 서버에 감정 기록을 저장하지 않아 심리적 부담이 적습니다.
* 빠르게 개발하고 배포할 수 있습니다.
* 사용자는 URL에 접속하자마자 생각 정리를 시작할 수 있습니다.

### 한계

* 브라우저 데이터를 삭제하면 기록이 사라집니다.
* 다른 기기에서는 기록을 볼 수 없습니다.
* 기기 간 동기화가 되지 않습니다.
* 백업 기능이 없습니다.

이 한계는 2차 MVP에서 회원가입, 로그인, 서버 DB 저장 기능을 추가하여 해결할 예정입니다.

---

## 기술 스택

### Backend / View Server

* Java 17
* Spring Boot
* Spring Web
* Thymeleaf

### Frontend

* HTML
* CSS
* JavaScript

### Storage

* localStorage

### Build

* Gradle

### Deploy

* Render
* Docker

---

## 프로젝트 구조

```text
todaymind
 ├── build.gradle
 ├── settings.gradle
 ├── Dockerfile
 ├── .dockerignore
 ├── src
 │    └── main
 │         ├── java
 │         │    └── todaymind
 │         │         ├── TodaymindApplication.java
 │         │         └── record
 │         │              └── controller
 │         │                   └── RecordPageController.java
 │         └── resources
 │              ├── application.properties
 │              ├── templates
 │              │    ├── index.html
 │              │    ├── records
 │              │    │    ├── new.html
 │              │    │    ├── list.html
 │              │    │    ├── detail.html
 │              │    │    ├── edit.html
 │              │    │    └── complete.html
 │              │    └── pages
 │              │         ├── privacy.html
 │              │         └── about.html
 │              └── static
 │                   ├── css
 │                   │    └── style.css
 │                   └── js
 │                        ├── storage.js
 │                        ├── record-form.js
 │                        ├── record-list.js
 │                        ├── record-detail.js
 │                        └── record-edit.js
 └── README.md
```

---

## 화면 라우팅

| URL                        | 화면          | 설명               |
| -------------------------- | ----------- | ---------------- |
| `/`                        | 메인 화면       | 서비스 소개와 시작 버튼    |
| `/records/new`             | 생각 정리 작성 화면 | 5개 질문에 답하고 기록 저장 |
| `/records`                 | 기록 목록 화면    | 저장된 기록 목록 조회     |
| `/records/complete`        | 정리 완료 화면    | 정리 완료 문구 표시      |
| `/records/{recordId}`      | 기록 상세 화면    | 특정 기록 상세 조회      |
| `/records/{recordId}/edit` | 기록 수정 화면    | 기존 기록 수정         |
| `/pages/privacy`           | 개인정보 안내 화면  | 저장 방식과 개인정보 안내   |
| `/pages/about`             | 앱 정보 화면     | 앱 소개 및 버전 정보     |

---

## localStorage 데이터 구조

### localStorage Key

```text
todayMind.records
```

### ThoughtRecord

```json
{
  "id": "record_1710000000000",
  "situation": "친구가 카톡을 읽고 답장을 안 했다.",
  "emotion": "불안",
  "thought": "나를 무시하는 것 같다.",
  "fact": "답장이 아직 오지 않았다.",
  "action": "오늘은 더 보내지 않고 내 할 일을 한다.",
  "recordDate": "2026-06-07",
  "createdAt": "2026-06-07T21:00:00",
  "modifiedAt": "2026-06-07T21:00:00"
}
```

---

## 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/Parkseammul/todaymind.git
cd todaymind
```

### 2. 로컬 실행

Windows 기준:

```bash
gradlew.bat bootRun
```

Mac/Linux 기준:

```bash
./gradlew bootRun
```

### 3. 브라우저 접속

```text
http://localhost:8080
```

---

## Docker 실행 방법

### Docker 이미지 빌드

```bash
docker build -t todaymind .
```

### Docker 컨테이너 실행

```bash
docker run -p 8080:8080 todaymind
```

브라우저에서 접속합니다.

```text
http://localhost:8080
```

---

## 배포 과정

1. Spring Boot 프로젝트 생성
2. Thymeleaf 화면 구현
3. JavaScript localStorage 저장 기능 구현
4. GitHub 저장소 생성
5. Dockerfile 작성
6. Render Web Service 생성
7. GitHub Repository 연결
8. Docker 기반 배포 설정
9. Render 배포 완료
10. 배포 URL 확인

---

## 배포 중 해결한 문제

### 문제

Render Docker 배포 중 Gradle Wrapper 관련 오류가 발생했습니다.

```text
Unable to access jarfile /app/gradle/wrapper/gradle-wrapper.jar
```

### 원인

`gradle-wrapper.jar` 파일이 GitHub에 올라가지 않아 Docker 환경에서 `./gradlew` 명령을 실행할 수 없었습니다.

### 해결

`.gitignore`에서 Gradle Wrapper JAR 파일을 예외 처리하고 GitHub에 추가했습니다.

```gitignore
.gradle/
build/

!gradle/wrapper/gradle-wrapper.jar
```

Gradle Wrapper 관련 파일은 배포 환경에서도 필요하므로 GitHub에 포함해야 합니다.

```text
gradlew
gradlew.bat
gradle/wrapper/gradle-wrapper.properties
gradle/wrapper/gradle-wrapper.jar
```

---

## 1차 MVP 완료 상태

* [x] PRD 작성
* [x] 기능 명세 작성
* [x] Spring Boot 프로젝트 생성
* [x] Thymeleaf 화면 구현
* [x] localStorage 저장 기능 구현
* [x] 기록 목록 조회 구현
* [x] 기록 상세 조회 구현
* [x] 기록 수정 구현
* [x] 기록 삭제 구현
* [x] GitHub 저장소 생성
* [x] Dockerfile 작성
* [x] Render 배포
* [x] 1차 MVP 배포 완료

---

## 2차 MVP 계획

2차 MVP에서는 백엔드 기능과 계정 기반 기록 관리 기능을 추가할 예정입니다.

### 추가 예정 기능

* 회원가입
* 로그인
* 로그아웃
* Spring Security 적용
* Member 도메인 구현
* ThoughtRecord 도메인 구현
* JPA Entity 설계
* Repository 구현
* Service Layer 구현
* 서버 DB 저장
* 내 기록 목록 조회
* 내 기록 상세 조회
* 내 기록 수정
* 내 기록 삭제
* 본인 기록 권한 검증
* 계정 삭제
* 소프트 삭제
* 배포 DB 연결

---

## 향후 확장 계획

### PWA 적용

* PWA Manifest 적용
* Service Worker 적용
* 홈 화면 설치 지원
* 앱 아이콘 설정
* 테마 컬러 설정

### Google Play 확장

* Trusted Web Activity 패키징
* Android App Bundle 빌드
* Google Play Console 등록
* Closed Testing 진행
* Production 승인 신청

---

## 최종 포지셔닝

오늘마음은 치료 앱이 아닙니다.

상담을 대체하지 않습니다.

감정을 진단하거나 분석하지 않습니다.

오늘마음은 생각이 많을 때 머릿속 생각을 꺼내고, 짧게 정리하고, 지금 할 수 있는 작은 행동으로 돌아오게 돕는 개인 기록 웹앱입니다.
