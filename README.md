# BCML Lab. 웹사이트

이 저장소는 광운대학교 BCML 연구실의 공식 웹사이트 소스 코드를 담고 있습니다.

---

## 사이트 유지보수 가이드

이 웹사이트는 [Hugo](https://gohugo.io/)와 [Hugo Blox Builder](https://hugoblox.com/)를 사용하여 제작되었습니다.

### 1. 개발 환경 설정

웹사이트를 로컬에서 수정하고 미리보려면 Hugo Extended 버전이 필요합니다.

#### **Hugo 설치**
- **Ubuntu (Debian 계열):**
  ```bash
  sudo apt update
  sudo apt install hugo
  ```
  *(참고: `sudo apt install hugo`로 설치되는 버전이 낮을 경우 [Hugo Releases](https://github.com/gohugoio/hugo/releases)에서 `.deb` 파일을 다운로드하여 설치하는 것을 권장합니다.)*
- **Windows:**
  ```powershell
  winget install Hugo.Hugo.Extended
  ```
- **macOS (Homebrew):**
  ```bash
  brew install hugo
  ```

#### **의존성 설치**
저장소를 클론한 후, 프로젝트 루트 디렉터리에서 `npm install`을 실행하여 필요한 도구를 준비합니다.
```bash
npm install
```

### 2. 로컬 미리보기 실행

수정 사항을 실시간으로 확인하려면 로컬 개발 서버를 실행합니다.
```bash
hugo server -D
```
- `-D`: 초안(`draft: true`) 상태인 콘텐츠도 포함하여 빌드합니다.
- 서버가 실행되면 `http://localhost:1313`에서 사이트를 확인할 수 있습니다.

### 3. 콘텐츠 업데이트 및 관리

- **콘텐츠:** 새 글, 인물, 사진 등은 `content/` 하위의 해당 디렉터리에 Markdown 파일로 추가하거나 수정합니다.
- **공통 설정:** 메뉴, 파라미터 등은 `config/_default/*.yaml`에서 관리합니다.
- **스타일 및 스크립트:** SCSS, JS 등 자산은 `assets/` 디렉터리에서 관리하며, 변경 후 `hugo`가 자동으로 번들링합니다.

### 4. 빌드 및 배포

- 릴리스 전에 `hugo server -D`로 전체 사이트를 점검합니다.
- `main` 브랜치로 `push`하면 Netlify/GitHub Pages 등을 통해 자동 배포가 트리거됩니다.

필요 시 [HugoBlox 문서](https://docs.hugoblox.com/)와 저장소 `README`를 참고해 추가 설정을 적용하세요.

## 주요 섹션별 수정 방법

- **Publications (`content/publication/`)**
   - 각 논문은 개별 디렉터리의 `index.md`로 관리되며 `title`, `authors`, `publication`, `year`, `featured` 등을 front matter에 정의합니다.
   - BibTeX로 가져올 경우 Hugo Blox CLI(구 Academic CLI)를 활용하고, 반영 후 `hugo server -D`로 레이아웃을 확인합니다.
- **People (`content/people/`, `content/admin/authors/`)**
   - `people/index.md`에서 섹션 순서를 제어하고, 구성원별 프로필은 `content/admin/authors/<slug>/index.md`를 수정합니다.
   - 새 멤버 사진은 `static/media/uploads/`에 업로드한 뒤 front matter의 `image` 경로를 맞춰줍니다.
- **Course 개요 (`content/course/_index.md`)**
   - 과목 리스트 제목, 설명, CTA 버튼을 `_index.md` front matter에서 조정합니다.
- **Course 상세 (`content/course/<course>/index.md`)**
   - 강의별 소개, 담당 교수, 자료 링크 등을 front matter와 본문에 추가하고, 필요 시 `resources` 블록으로 슬라이드를 첨부합니다.
- **Research Project (`content/project/`)**
   - 프로젝트별 디렉터리를 만들고 `summary`, `tags`, `featured`, `external_link` 등을 설정합니다.
   - 카드 노출 순서는 `weight`로 제어하거나 `featured: true`로 메인 배너에 올립니다.
- **News (`content/post/`)**
   - 소식 글은 `content/post/<slug>/index.md`에 작성하며 `date`, `categories`, `featured_image`를 지정합니다.
   - 발행 전에는 `draft: true`로 저장하고 검수 후 `false`로 바꿉니다.
- **Photos (`content/photos/`)**
   - 행사·앨범 폴더에 `index.md`와 이미지를 넣고, 사진 파일은 `static/media/uploads/` 또는 해당 폴더에 위치시킵니다.
   - 슬라이드 노출 순서는 front matter의 `gallery` 배열에서 설정합니다.
- **Contact (`content/contact/index.md`)**
   - 주소, 이메일, 지도 좌표 등은 front matter의 `address`, `contact_links`로 관리하며 폼 연동은 `config/_default/params.yaml`의 `contact` 블록을 수정합니다.

모든 섹션 수정 후 `hugo server -D`로 미리 확인하고, git 커밋·푸시 후 배포 파이프라인이 정상 작동하는지 점검하세요.
