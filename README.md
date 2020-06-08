# issue-tracker-10
## 이슈 트래커 - 10팀

- FE - [Taek](https://github.com/seungdeng17), [hoi](https://github.com/choichoigang)
- BE - [XP](https://github.com/cocojen), [엘리](https://github.com/bohyeon-n)

## 팀 그라운드 룰 
- wiki에 각자 당일 스크럼 기록

## git branch
- master: 배포용 브랜치
- dev: 개발 브랜치(default branch)
- 작업을 시작할 때: 자신의 클래스 개발 브랜치에서 feature-<클래스>/issue-번호 으로 브랜치 생성
    ex) feature-iOS/issue-32


## commit message
| 타입 | 설명 |
|--|--|
|feat|새로운 기능 추가|
|fix|버그 수정|
|docs|문서 수정|
|refactor|코드 리팩토링|
|style|코드 포맷팅 (코드 변경이 없는 경우)|
|test|테스트 코드 작성|
|chore|소스 코드를 건들지 않는 작업(빌드 업무 수정)|

```
 [#43] feat: boilerPlate
```
 - 이슈 단위로 개발한다.
 - 작업을 완료되면, 작업하던 브랜치에서 개발 브랜치(dev)로 Pull Request를 생성한다.
 - 머지를 완료했으면 기능(feature)브랜치는 github과 local git에 모두 삭제한다. 
 - dev에서 master로 pull request 할 때 BE 나 FE 코드에 충돌나는 경우, 코드를 작성한 팀원에게 알린다.

#### Issue 관리
- [클래스명] Issue 제목
```
[BE] 배포
[FE] 버튼컴포넌트 구현
```

#### PR 관리
- [클래스명 #Issue번호] PR 제목
- Auto Close를 사용할 필요가 있는 경우 PR에 Close Keyword를 적어서 Issue Close가 가능합니다.

```
[BE #1] DB 설계
```


#### 공유사항
