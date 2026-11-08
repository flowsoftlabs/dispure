# DISPURE Official Journal — redesigned starter

오시바나의 note 콘텐츠 운영 방식을 참고한 **게시글 중심 매거진** 시안입니다. 특정 사이트의 디자인을 복제한 것은 아닙니다.

## 구성
- `index.html`: 최신 글, 대표 기사, 추천 기사, 매거진 주제, 최근 글
- `magazines/index.html`: 카테고리/연재 목록
- `guides/index.html`: 사용법 목차
- `articles/*.html`: 개별 게시글 초안
- `assets/style.css`: 모바일 반응형 스타일
- `assets/images/*.webp`: 이 대화에서 제작된 디스푸레 원본 캐릭터·가상 굿즈 이미지
- `.nojekyll`: Pages 정적 파일 처리

## 배포
1. GitHub에서 `flowsoftlabs/dispure` 공개 저장소를 만듭니다.
2. **이 폴더 안의 파일과 폴더**를 저장소의 루트에 업로드합니다.
3. Settings → Pages → Deploy from a branch → `main` / `(root)` 저장.
4. 예상 주소: https://flowsoftlabs.github.io/dispure/

`rlarudfo87` 기존 주소, 개인정보처리방침, app-ads.txt 등의 자산은 전혀 수정하지 않습니다.

## 미완료/주의
- 실제 Google Play 링크 확인 후 소개 영역에 삽입
- 실제 앱에서 직접 촬영한 화면으로 기능별 가이드 작성
- 게시글/메타데이터는 초안이며 발행일은 실제 발행 시 설정
- 이미지의 가상 굿즈 안내 문구는 삭제하지 말 것
- HTML을 직접 열어서 로컬에서 미리 볼 수 있음. 더 정교한 로컬 테스트는 `python -m http.server 8000`.
