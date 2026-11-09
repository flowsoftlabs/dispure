# DISPURE 공식노트 (Astro 7)

note형의 미니멀한 게시글 중심 정적 웹사이트입니다. *기존 저장소의 `_legacy-site/`는 수정하지 마세요.*

## Codespaces 설치 및 실행

현재 저장소 `/workspaces/dispure`에서 압축 내용을 루트에 덮어씁니다. 기존 `.git/`, `_legacy-site/`, `node_modules/`는 유지합니다.

```bash
npm install
npm run dev -- --host 0.0.0.0
```

GitHub Pages 배포 전 확인:

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

## 새 글 작성

`src/content/articles/새-글-slug.md`를 만들고 다음 프런트매터를 넣습니다.

```yaml
---
title: '제목'
description: '한 줄 요약'
date: 2026-11-09
category: collection
cover: images/cover.png # 선택
pinned: false
draft: false
---
```

본문은 Markdown으로 작성합니다. `draft: true`는 사이트 목록과 빌드에서 제외합니다.

카테고리: collection, favorite, widgets, development, news.

## 이미지

`public/images/`에 파일을 넣고 frontmatter의 `cover`를 `images/파일명.png`로 지정합니다. 본문 이미지는 `![설명](/dispure/images/파일명.png)` 형태로 사용합니다.

## GitHub Pages

`Settings → Pages → Build and deployment → Source: GitHub Actions`로 설정한 후 `main`에 푸시합니다. 자동 워크플로 `.github/workflows/deploy.yml`이 `dist/`를 배포합니다.

사이트 주소: https://flowsoftlabs.github.io/dispure/

## 주의

초기 게시글 3개는 작성 예시입니다. 공개 전 내용과 사진을 검토하세요. 실제 앱 화면이 아닌 가상 굿즈를 시연 데이터로 명확히 표시했습니다.
