---
description: Vercel을 이용한 초간단 배포 방법
---

# 위스키보다(WhiskyVoda) 배포 가이드 (Vercel)

이 프로젝트는 Next.js로 제작되어 **Vercel**을 통해 가장 쉽고 빠르게 배포할 수 있습니다.

### 단계별 배포 순서

1. **GitHub에 코드 푸시**
   - 현재 작업 중인 코드를 본인의 GitHub 저장소에 올립니다.

2. **Vercel 계정 연동**
   - [Vercel](https://vercel.com)에 접속하여 GitHub 계정으로 로그인합니다.

3. **새 프로젝트 추가**
   - `Add New` -> `Project`를 클릭합니다.
   - GitHub 저장소 목록에서 `whisky-voda` 저장소를 선택하여 `Import` 합니다.

4. **설정 확인 및 배포**
   - Framework Preset이 `Next.js`로 되어 있는지 확인합니다.
   - `Deploy` 버튼을 누르면 배포가 시작됩니다!

// turbo
### 로컬 빌드 테스트
배포 전 로컬에서 빌드가 정상적으로 되는지 확인하려면 다음 명령어를 실행하세요.
```bash
npm run build
```

> [!TIP]
> 배포 후 생성된 URL을 통해 전 세계 어디서든 위스키 매거진을 볼 수 있게 됩니다. ✨
