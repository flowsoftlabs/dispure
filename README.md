# DISPURE 공식 매거진 (초기 정적 사이트)

오시바나 note처럼 **게시글·매거진·사용법** 중심으로 구성한 GitHub Pages용 정적 사이트입니다.

## 배포
1. GitHub에서 `flowsoftlabs/dispure` 공개 저장소를 새로 만들고 README 자동 생성을 해제합니다.
2. 이 폴더 안의 **파일과 폴더 전체**를 새 저장소 루트에 업로드합니다 (`dispure-site` 폴더 자체를 올리지 않음).
3. 저장소 **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)** 를 선택하고 저장합니다.
4. 공개 주소: `https://flowsoftlabs.github.io/dispure/` (설정과 배포 완료 후).

## 구성
- `index.html`: 공식 프로필, 고정 글, 최신 글, 매거진
- `magazines/index.html`: 주제별 매거진 목록
- `guides/index.html`: 기능별 안내 목차
- `articles/*.html`: 독립 게시글
- `assets/style.css`: 공통 디자인
- `.nojekyll`: GitHub Pages의 Jekyll 자동 처리를 끄는 파일

## 유의 사항
- Google Play 링크는 실제 스토어 주소를 확인한 뒤 연결합니다.
- 게시글은 시작용 **초안**입니다. 10개 상품의 실구매를 암시하지 않도록 가상 시연 표시를 유지하세요.
- `rlarudfo87` 저장소, 개인정보처리방침, `app-ads.txt`, 인증 파일 등은 수정하지 않습니다.
- 샘플 파일은 별도 빌드 도구 없이 동작합니다.
