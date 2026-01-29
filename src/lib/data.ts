export interface Article {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    content: string; // Markdown or HTML string
    tags: string[];
}

export const articles: Article[] = [
    {
        id: "1",
        slug: "whisky-trends-2026-part-1",
        title: "2026년 위스키 트렌드: '미니 믹솔로지'와 지속 가능성",
        subtitle: "더 작게, 더 초록색으로: 2026년 위스키 계를 뒤흔들 첫 번째 물결.",
        category: "2026 트렌드",
        author: "VODA",
        publishedAt: "2026-01-28",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
        content: `
## 더 작고 강력하게: 미니 믹솔로지의 부상

2026년 위스키 칵테일 세계에서 가장 눈에 띄는 변화 중 하나는 '스낵형 시음(snackable sips)' 또는 '미니 믹솔로지'의 부상입니다. 바카디 트렌드 보고서에서 명명된 이 개념은 즐거움과 기능성이 만나는 지점에 있습니다.

이 움직임의 선두에는 '미니 마티니'의 부활이 있습니다. 이는 평소 도수가 높은 술을 더 편안하게 즐길 수 있는 영리한 방법이며, 시음하는 동안 음료가 차갑게 유지된다는 장점도 있습니다. Tayēr + Elementary 같은 유명 바들은 이미 한 입 크기 마티니와 미니 하이볼을 메뉴에 올리고 있습니다. 이는 한자리에서 다양한 맛을 탐구할 기회를 제공할 뿐만 아니라, 경제성 면에서도 매력적입니다.

## 지속 가능성: 재생 농업이 이끄는 미래

위스키 생산에서 지속 가능성은 이제 선택이 아닌 필수입니다. 지난 몇 년간 피트(Peat) 사용에 따른 환경 논의가 뜨거웠다면, 2026년에는 '재생 농업(Regenerative Agriculture)'이 그 중심에 설 것으로 보입니다.

땅과 곡물에 깊이 뿌리를 둔 위스키의 특성상 재생 농업은 생산 과정의 자연스러운 진화라고 볼 수 있습니다. Fielden과 같은 소규모 생산자들은 초기부터 이 방식을 도입해 가능성을 입증하고 있으며, 브루클라디(Bruichladdich) 증류소는 토양 건강과 생물 다양성에 초점을 맞춘 대규모 재생 프로젝트를 주도하고 있습니다.

Doghouse Distillery의 설립자 Katherine Saunders는 말합니다. "재생 농업은 우리가 위스키를 만드는 방식에 점점 더 통합되고 있습니다. 우리는 커버 크로핑(초생 재배), 자연 비료를 위한 가축 통합 등의 관행을 시행하는 농부들과 긴밀히 협력하여 탄소 발자국을 직접적으로 줄이고 있습니다."
        `,
        tags: ["트렌드", "칵테일", "지속가능성"],
    },
    {
        id: "2",
        slug: "whisky-trends-2026-part-2",
        title: "2026년 위스키 트렌드: 우마미 풍미와 새로운 협업",
        subtitle: "미소부터 셀러브리티까지: 위스키의 경계를 허무는 새로운 시도들.",
        category: "2026 트렌드",
        author: "VODA",
        publishedAt: "2026-01-29",
        imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop",
        content: `
## 경계를 허무는 협업의 시대

2026년에도 협업(Collaboration)은 핵심 테마가 될 것입니다. 셀러브리티나 브랜드 간의 팀업뿐만 아니라, 증류소들 사이의 강력한 연대감과 협력에 대한 열정이 커지고 있습니다.

최근 독립 병입자인 'The Heart Cut'은 영국의 주요 5개 위스키 증류소가 협력하여 만든 'BARLEY'를 출시했습니다. 단순히 만드는 것에서 나아가, 5,000명 이상의 위스키 애호가들을 대상으로 설문 조사를 진행하여 그들이 원하는 풍미를 반영했습니다. 위스키 팬들을 생산 여정에 직접 참여시킨 것입니다.

GreatDrams의 설립자 Greg Dillon은 이렇게 조언합니다. "소비자들은 진정성 있는 경험을 원합니다. 장인 정신과 '장소의 감각'을 소중히 여깁니다. 내년에 돋보일 위스키는 군더더기 없는 깊이와 복잡함이 없는 개성을 가질 것입니다."

## 풍미의 진화: 칵테일 속의 '우마미'

풍미의 변화는 병 안에서뿐만 아니라 칵테일 내에서도 더 넓게 진화할 것입니다. 특히 세이보리(Savoury) 위스키 칵테일 분야에서 '우마미(감칠맛)'는 앞으로 몇 달간 계속해서 성장할 핵심 트렌드입니다.

전 세계의 선도적인 바들은 이미 버섯-초콜릿 가니시를 사용하거나 미소(Miso) 페이스트를 레시피에 통합하는 등 영리한 방식으로 위스키의 풍미를 증폭시키고 있습니다. 지난 몇 년간 강렬하고 굵직한 개성이 클래식 위스키를 지배했다면, 2026년에는 더욱 세련되고 정교하게 다듬어진 위스키 음료들을 기대할 수 있을 것입니다.

홍콩 Rosewood Hotel의 DarkSide 바 매니저 Marco Maiorano는 "하이볼의 지배력은 계속되겠지만, 허브와 세이보리 프로필의 부상이 위스키의 매력을 더 아름답게 보완할 것"이라고 전망했습니다.
        `,
        tags: ["트렌드", "협업", "우마미", "칵테일"],
    },
    {
        id: "auto-1738132176000",
        slug: "american-whiskey-trends-2026-maturity-rye-revolution",
        title: "2026년 아메리칸 위스키의 새로운 시대: 성숙기와 라이의 혁명",
        subtitle: "급성장의 시대를 넘어 품질과 다양성으로 향하는 버번과 라이 위스키의 미래",
        category: "아메리칸 위스키",
        author: "VODA",
        publishedAt: "2026-01-29",
        imageUrl: "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?q=80&w=1200&auto=format&fit=crop",
        content: `
## 급성장의 시대가 끝나고, 성숙의 시대가 시작되다

2026년, 아메리칸 위스키 시장은 중요한 전환점을 맞이하고 있습니다. 지난 10년간의 폭발적인 성장과 끊임없는 가격 인상의 시대가 막을 내리고, 이제는 **성숙, 명확성, 그리고 집중**의 시대로 접어들고 있습니다.

이는 시장이 축소되고 있다는 의미가 아닙니다. 오히려 생산자들이 무분별한 확장보다는 **지속 가능성**에 집중하고, 소비자들은 더욱 **신중하고 의도적인 구매**를 하고 있다는 뜻입니다. 투명성, 균형, 그리고 가치를 중시하는 새로운 소비 패턴이 자리 잡고 있습니다.

## 가격의 합리화: 3만원~7만원대가 새로운 중심

지난 몇 년간 위스키 가격은 계속해서 상승했습니다. 하지만 2026년, 인플레이션이 진정되고 소매업체들의 재고가 증가하면서 **가격 합리화**가 진행되고 있습니다.

이제 **$30-$70 (약 4만원~9만원)** 가격대가 시장의 새로운 중심이 되고 있습니다. 이는 소비자들에게 희소식입니다. 합리적인 가격에 품질 좋은 위스키를 즐길 수 있는 기회가 늘어나고 있기 때문입니다.

### 추천 위스키: 가성비 아메리칸 위스키 3선

#### 1. Buffalo Trace
**타입**: Kentucky Straight Bourbon | **지역**: Kentucky, USA | **가격대**: 가성비 (5만원 이하)

버팔로 트레이스는 가성비 버번의 대명사입니다. 부드러운 캐러멜과 바닐라 향, 그리고 은은한 오크의 풍미가 조화롭게 어우러집니다. 입문자부터 애호가까지 모두가 만족할 수 있는 클래식한 맛입니다.

**풍미 특징**:
- 피트: 0/10
- 단맛: 8/10
- 과일향: 5/10
- 스파이시: 5/10
- 바디감: 7/10

#### 2. Wild Turkey 101
**타입**: Kentucky Straight Bourbon | **지역**: Kentucky, USA | **가격대**: 가성비 (5만원 이하)

50.5%의 높은 도수에도 불구하고 놀라울 정도로 부드럽습니다. 진한 캐러멜, 바닐라, 그리고 약간의 민트 향이 특징입니다. 가격 대비 최고의 만족도를 제공하는 버번 중 하나입니다.

**풍미 특징**:
- 피트: 0/10
- 단맛: 7/10
- 과일향: 4/10
- 스파이시: 8/10
- 바디감: 8/10

#### 3. Rittenhouse Rye
**타입**: Straight Rye Whiskey | **지역**: USA | **가격대**: 가성비 (5만원 이하)

바텐더들이 가장 선호하는 라이 위스키입니다. 클래식 칵테일을 만들 때 완벽한 선택이며, 스트레이트로 마셔도 훌륭합니다. 매콤한 호밀의 풍미와 달콤한 캐러멜이 절묘하게 균형을 이룹니다.

**풍미 특징**:
- 피트: 0/10
- 단맛: 5/10
- 과일향: 4/10
- 스파이시: 9/10
- 바디감: 7/10

## 라이 위스키의 제2의 물결: 다양성의 폭발

2026년 아메리칸 위스키 시장에서 가장 흥미로운 변화는 **라이 위스키의 다양화**입니다. 전통적인 95% 라이 매시빌을 넘어, 증류소들은 혁신적인 실험을 진행하고 있습니다.

### 새로운 라이의 세계

- **100% 라이 표현**: 순수한 호밀의 맛을 극대화
- **몰티드 라이**: 맥아를 사용한 부드러운 풍미
- **하이브리드 스타일**: 라이와 버번, 또는 몰트의 융합
- **에어룸 라이 품종**: 전통 품종을 활용한 독특한 풍미

이러한 혁신의 결과, 라이 위스키는 이제 단순히 "매콤하고 후추 같은" 맛을 넘어서 **과일향, 꽃향, 견과류, 크리미한 질감** 등 훨씬 더 넓은 풍미 스펙트럼을 제공하고 있습니다.

## 아메리칸 싱글 몰트의 부상

스코틀랜드의 전유물로 여겨졌던 싱글 몰트가 이제 미국에서도 독자적인 카테고리로 자리 잡고 있습니다. **아메리칸 싱글 몰트**는 점점 더 많은 인정과 품질 향상을 이루며, 위스키 애호가들에게 또 하나의 진지한 선택지가 되고 있습니다.

## 블렌딩의 재발견: 장인 정신의 부활

과거 블렌디드 위스키는 저렴한 대안으로 여겨졌습니다. 하지만 2026년, **블렌딩은 하나의 예술**로 재평가받고 있습니다. 

소비자와 심사위원들 모두 정교한 블렌드의 가치를 인정하기 시작했으며, 많은 증류소들이 블렌딩을 자신들의 시그니처 기술로 내세우고 있습니다.

## 테루아의 도래: 땅의 이야기를 담다

와인에서 중요하게 여겨지던 **테루아(Terroir)** 개념이 이제 아메리칸 위스키에도 적용되고 있습니다. 

- 에이지 스테이트먼트의 강조
- 혁신적인 피니싱 기법
- 효모와 맥아의 출처 및 토스팅 방식

이 모든 요소들이 위스키의 개성을 만들어내는 중요한 요소로 인식되고 있습니다.

## 마인드풀 드링킹: 품질 > 수량

소비자들은 점점 더 **선택적이고 의도적**으로 위스키를 구매하고 있습니다. 마인드풀 드링킹(Mindful Drinking)과 웰니스 트렌드의 영향으로, 사람들은 **양보다 질**을 추구하고 있습니다.

이는 두 가지 방향으로 나타납니다:
- **로우 프루프 & 세셔너블**: 부담 없이 즐길 수 있는 낮은 도수
- **하이 프루프 애호가용**: 진지한 테이스팅을 위한 높은 도수

## 크래프트 증류소의 시대

대형 브랜드 외에도 **크래프트 증류소**에 대한 관심이 높아지고 있습니다. 소비자들은 다양한 증류소를 탐험하고, 싱글 배럴 제품을 찾으며, 각 증류소만의 독특한 이야기에 귀 기울이고 있습니다.

## 도전과 기회

물론 모든 것이 순조로운 것만은 아닙니다. 위스키 업계는 다음과 같은 도전에 직면해 있습니다:

- **소비 둔화와 높은 재고**: Jim Beam 같은 주요 브랜드들이 생산을 일시 중단
- **관세 불확실성**: 국제 무역 결정이 시장에 영향
- **외부 압력**: 금주 운동과 대마초의 인기 상승

하지만 이러한 도전들은 동시에 **혁신의 기회**이기도 합니다. 시장이 성숙해지면서, 진정으로 품질과 독창성을 추구하는 브랜드들이 더욱 빛을 발할 것입니다.

## 마치며

2026년 아메리칸 위스키 시장은 **급성장에서 지속 가능한 성장**으로, **양에서 질**로, **획일성에서 다양성**으로 전환하고 있습니다.

이는 소비자들에게 더 많은 선택지, 더 합리적인 가격, 그리고 더 풍부한 경험을 의미합니다. 라이 위스키의 혁명, 싱글 몰트의 부상, 블렌딩의 재발견 등 흥미진진한 변화들이 우리를 기다리고 있습니다.

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃
        `,
        tags: ["아메리칸위스키", "버번", "라이위스키", "2026트렌드", "가성비"],
    },
    {
        id: "auto-1738133069000",
        slug: "how-to-develop-whisky-recipe-master-blender-secrets",
        title: "위스키 레시피의 탄생: 마스터 블렌더의 비밀스러운 창작 과정",
        subtitle: "아이디어에서 병입까지, 하나의 위스키가 완성되는 정교한 설계도",
        category: "위스키 101",
        author: "VODA",
        publishedAt: "2026-01-30",
        imageUrl: "https://images.unsplash.com/photo-1594911776510-9f57912bc780?q=80&w=1200&auto=format&fit=crop",
        content: `
## 위스키는 우연히 만들어지지 않습니다

우리가 바에서 즐기는 위스키 한 잔에는 수십 년의 시간과 마스터 블렌더의 치밀한 계산이 담겨 있습니다. 많은 사람들이 위스키를 단순히 '오래 숙성시킨 술'이라고 생각하지만, 사실 모든 훌륭한 위스키는 철저하게 설계된 **'레시피'**의 결과물입니다.

오늘은 위스키 매거진(Whisky Magazine)의 통찰을 바탕으로, 마스터 블렌더들이 어떻게 위스키의 맛과 향을 설계하는지 그 비밀스러운 과정을 파헤쳐 보겠습니다.

## 1단계: 맛의 비전 설정 (Conceiving the Flavor)

모든 위스키는 마스터 블렌더의 머릿속에서 시작됩니다. "이번에는 신선한 열대 과일 향이 나면서 끝맛은 은은한 연기 향이 감도는 위스키를 만들고 싶다"는 식의 구체적인 **맛의 지도**를 먼저 그립니다. 

이 비전이 설정되면, 블렌더는 거꾸로 거슬러 올라가며 어떤 곡물, 어떤 효모, 그리고 어떤 오크통이 필요한지 결정합니다.

## 2단계: 핵심 원료의 선택 (The Foundation)

![위스키 테이스팅용 노징 글래스](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Whisky_glass.jpg/800px-Whisky_glass.jpg)

위스키의 뼈대를 이루는 것은 보리, 옥수수, 호밀과 같은 곡물입니다. 하지만 같은 보리라도 품종에 따라, 그리고 건조 방식(피트 사용 여부 등)에 따라 결과물은 하늘과 땅 차이입니다. 

또한 물의 미네랄 함량과 효모의 종류 역시 위스키의 초기 풍미(New Make Spirit)를 결정짓는 중요한 요소입니다. 블렌더는 자신이 원하는 에스테르(과일 향 등)를 만들어내기 위해 특정 효모 균주를 선택하기도 합니다.

## 3단계: 오크통 숙성의 과학 (The Cask Strategy)

위스키 풍미의 60~70%는 오크통 숙성 과정에서 완성됩니다. 마스터 블렌더에게 오크통은 화가의 **팔레트**와 같습니다.

- **아메리칸 오크**: 바닐라, 캐러멜, 코코넛의 달콤함
- **유러피언 오크**: 말린 과일, 시나몬, 향신료의 묵직함
- **셰리/와인 캐스크**: 베리류의 과일향과 견과류의 고소함

블렌더는 어떤 통에서 얼마나 오래 숙성시킬지, 그리고 다른 통으로 옮겨 담는 '피니싱(Finishing)' 과정을 거칠지 세밀하게 계획합니다.

## 4단계: 블렌딩과 미세 조정 (Blending & Fine-tuning)

![숙성 중인 위스키 오크통들](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Whisky_barrels.jpg/800px-Whisky_barrels.jpg)

수천 개의 오크통 중에서 목표한 맛에 가장 근접한 원액들을 골라냅니다. '리드 위스키(Lead Whisky)'라는 중심 원액을 세우고, 그 주변을 보완할 다른 원액들을 한 방울 단위로 섞어보며 최적의 비율을 찾습니다.

수만 번의 코 점검(Nosing)과 테이스팅을 거쳐, 비로소 우리가 아는 그 이름의 위스키가 세상에 나오게 됩니다.

### 추천 위스키: 마스터 블렌더의 예술이 돋보이는 3선

#### 1. Monkey Shoulder
**타입**: Blended Malt Scotch | **지역**: Speyside, Scotland | **가격대**: 중가 (5-10만원)

세 가지 다른 싱글 몰트를 완벽하게 블렌딩하여 만든 위스키입니다. 부드러운 바닐라와 상큼한 오렌지 향이 특징이며, 스트레이트나 칵테일 어디에나 잘 어울리는 블렌딩의 정석을 보여줍니다.

**풍미 특징**:
- 피트: 0/10
- 단맛: 7/10
- 과일향: 6/10
- 스파이시: 4/10
- 바디감: 6/10

#### 2. The Balvenie DoubleWood 12
**타입**: Single Malt | **지역**: Speyside, Scotland | **가격대**: 프리미엄 (10-20만원)

마스터 블렌더 데이비드 스튜어트가 대중화시킨 '캐스크 피니싱'의 대표작입니다. 버번 오크통에서 12년, 셰리 오크통에서 몇 달을 더 지내며 우아하고 복합적인 풍미를 완성했습니다.

**풍미 특징**:
- 피트: 0/10
- 단맛: 8/10
- 과일향: 7/10
- 스파이시: 5/10
- 바디감: 7/10

#### 3. Hibiki Harmony
**타입**: Blended Japanese | **지역**: Japan | **가격대**: 프리미엄 (10-20만원)

일본 위스키 특유의 정교한 블렌딩 기술이 집약된 제품입니다. 10종 이상의 다양한 원액을 섞어 마치 오케스트라와 같은 조화로운 맛을 냅니다. 꽃향기와 달콤한 꿀의 풍미가 일품입니다.

**풍미 특징**:
- 피트: 1/10
- 단맛: 8/10
- 과il향: 8/10
- 스파이시: 3/10
- 바디감: 6/10

## 결론: 기다림과 예술의 결합

위스키 레시피는 단순히 재료의 나열이 아닙니다. 그것은 수십 년 뒤의 맛을 내다보는 마스터 블렌더의 인내심과 예술적 직관이 결합된 결과물입니다. 

오늘 밤, 위스키 한 잔을 마실 때 그 뒤에 숨겨진 블렌더의 치밀한 설계를 한 번 상상해 보세요. 그 맛이 평소보다 훨씬 더 깊게 느껴질 것입니다.

다음에도 흥미로운 위스키 이야기로 돌아오겠습니다. 건배! 🥃
        `,
        tags: ["위스키101", "블렌딩", "마스터블렌더", "레시피", "상식"],
    },
    {
        id: "auto-1769674708306",
        slug: "whisky-investment-trends-2025",
        title: "2025년 경매 최고가 기록: 위스키 투자의 현주소",
        subtitle: "소더비와 크리스티 경매에서 주목받은 희귀 위스키들과 투자의 미래",
        category: "컬렉팅",
        author: "VODA",
        publishedAt: "2026-01-29",
        imageUrl: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200&auto=format&fit=crop",
        content: `
## 위스키, 이제는 '대체 투자'의 중심에 서다

위스키는 단순한 기호품을 넘어 이제 예술품과 같은 '대체 투자' 자산으로 확고히 자리 잡았습니다. 2025년 한 해 동안 소더비(Sotheby's)와 크리스티(Christie's) 등 세계적인 경매장에서 기록된 수치들은 위스키 시장의 뜨거운 열기를 그대로 보여줍니다.

## 2025년 경매장을 뒤흔든 주인공들

지난 한 해 동안 가장 주목받은 것은 역시 '맥켈란(The Macallan)'이었습니다. 초희귀 빈티지 라인업인 'Fine & Rare' 시리즈 중 하나가 수십억 원대에 낙찰되며 다시 한번 왕좌를 지켰습니다. 하지만 맥켈란만이 전부는 아니었습니다.

1. **포트 엘런(Port Ellen) 45년**: 폐쇄되었다가 다시 문을 연 이 증류소의 올드 빈티지는 희소성 때문에 가격이 천정부지로 치솟았습니다.
2. **카루이자와(Karuizawa) 50년**: 일본의 전설적인 폐쇄 증류소 원액은 여전히 아시아 시장을 중심으로 강력한 투자가치를 입증했습니다.
3. **스프링뱅크(Springbank) 로컬 발리**: 크래프트 위스키 팬들 사이에서 신격화되는 이 브랜드의 한정판 또한 경매 시장의 다크호스로 떠올렀습니다.

## 현명한 위스키 투자를 위한 3가지 법칙

위스키 투자는 수익률이 높을 수 있지만, 그만큼 리스크도 존재합니다. 2026년을 준비하는 컬렉터라면 다음 세 가지를 기억해야 합니다.

### 1. '희소성'이 모든 것을 결정한다
단순한 한정판보다는 증류소의 폐쇄 정보, 숙성 연수, 그리고 병입 개수가 명확히 적은 기획물을 노려야 합니다.

### 2. 브랜드의 '팬덤'을 이해하라
맥켈란, 스프링뱅크, 야마자키처럼 전 세계적으로 탄탄한 팬층을 거느린 브랜드는 하락장에서도 방어력이 뛰어납니다.

### 3. 상태와 보관(Condition & Storage)
라벨의 손상 여부, 코크의 상태, 그리고 리필 여부 등은 경매 가에 결정적인 영향을 미칩니다. 일정한 온도와 습도가 유지되는 곳에서 '세워서' 보관하는 것이 원칙입니다.

## 마치며

위스키 투자는 단순히 돈을 쫓는 과정이 아니라, 한 병의 술에 담긴 시간과 문화를 소유하는 과정입니다. 오늘 소개한 정보들이 여러분을 더 현명하고 행복한 위스키 컬렉터의 길로 안내하기를 바랍니다. 

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃
        `,
        tags: ["auction", "investment", "rare", "collectible", "컬렉팅"],
    }
];

// --- Whisky Data for Recommendation Engine ---

export interface Whisky {
    id: string;
    name: string;
    type: string; // Single Malt, Bourbon, Blended, etc.
    region: string; // Islay, Speyside, Kentucky, etc.
    priceRange: 'budget' | 'mid' | 'premium' | 'luxury'; // $, $$, $$$, $$$$
    basePrice: number; // Base price in USD or EUR
    currency: 'USD' | 'EUR';
    flavorProfile: {
        peat: number; // 0-10 (Smoky)
        sweet: number; // 0-10 (Vanilla, Caramel, Honey)
        fruit: number; // 0-10 (Citrus, Dried Fruit)
        spice: number; // 0-10 (Cinnamon, Pepper)
        body: number; // 0-10 (Light vs Heavy)
    };
    visualProfile?: {
        bottleShape: 'tall' | 'stout' | 'square' | 'faceted' | 'ceramic' | 'standard';
        liquidColor: 'straw' | 'gold' | 'amber' | 'mahogany';
        glassColor: 'clear' | 'green' | 'brown' | 'opaque';
    };
    availableDate?: string; // YYYY-MM-DD
    tags: string[]; // For keyword matching
    imageUrl: string;
    description: string;
}

// Reliable Unsplash IDs (Verified)
// Laphroaig/Peaty: https://images.unsplash.com/photo-1574620638522-8378419f4033 (Bottle) or 1527281400683 (Liquid)
// Macallan: https://images.unsplash.com/photo-1596377478065-22e382d6101f
// Bourbon: https://images.unsplash.com/photo-1613214149922-f1809c99e18e
// Blended: https://images.unsplash.com/photo-1569529465841-dfecdab7503b
// Japanese/Light: https://images.unsplash.com/photo-1556767576-5ec41e3239ea

export const whiskies: Whisky[] = [
    // 1. Islay / Peaty (High Peat)
    {
        id: "w1",
        name: "Laphroaig 10 Year Old",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 65, // ~$91,000 KRW
        currency: "USD",
        flavorProfile: { peat: 10, sweet: 2, fruit: 3, spice: 5, body: 9 },
        tags: ["smoky", "medicinal", "iodine", "intense", "라프로익", "피트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Laphroaig_10_yo_bottling.jpg/800px-Laphroaig_10_yo_bottling.jpg",
        description: "강렬한 피트 향과 짭조름한 바다 내음, 독보적인 개성을 가진 아일라의 대표 위스키."
    },
    {
        id: "w2",
        name: "Ardbeg 10 Year Old",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 70, // ~$99,000 KRW
        currency: "USD",
        flavorProfile: { peat: 9, sweet: 3, fruit: 5, spice: 6, body: 8 },
        tags: ["peaty", "citrus", "sea salt", "complex", "아드벡", "피트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ardbeg_10_years_old.jpg/800px-Ardbeg_10_years_old.jpg",
        description: "피트의 스모키함 속에 숨겨진 섬세한 라임과 감귤의 단맛이 완벽한 균형을 이룹니다."
    },
    {
        id: "w3",
        name: "Lagavulin 16 Year Old",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "premium",
        basePrice: 110, // ~158,000 KRW
        currency: "USD",
        flavorProfile: { peat: 8, sweet: 4, fruit: 4, spice: 5, body: 9 },
        tags: ["smoky", "rich", "dry", "powerful", "라가불린", "피트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lagavulin_16_years_old.jpg/800px-Lagavulin_16_years_old.jpg", // Closest match (Dark tall bottle) until new asset
        description: "피트의 제왕. 깊고 풍부한 스모키함과 셰리 캐스크의 달콤함이 우아하게 어우러집니다."
    },

    // 2. Speyside / Sweet & Fruity (Sherry Bombs & Light Floral)
    {
        id: "w4",
        name: "The Macallan 12 Sherry Oak",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "premium",
        basePrice: 110, // ~$155,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 5, body: 7 },
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        tags: ["sherry", "classic", "luxury", "macallan", "맥켈란", "셰리"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Macallan_12.jpg", // Real Macallan Image
        description: "셰리 오크 캐스크의 정수. 말린 과일과 스파이스, 그리고 부드러운 목넘김."
    },
    {
        id: "w5",
        name: "Glenfiddich 12 Year Old",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 55, // ~$78,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 3, body: 5 },
        tags: ["pear", "apple", "honey", "fresh", "글렌피딕", "싱글몰트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Glenfiddich_12_years_old.jpg/800px-Glenfiddich_12_years_old.jpg", // Neutral bottle shape
        description: "신선한 배와 사과 향이 특징인, 전 세계에서 가장 사랑받는 입문용 싱글 몰트."
    },
    {
        id: "w6",
        name: "The Balvenie DoubleWood 12",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 80, // ~$115,000 KRW
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 7, fruit: 6, spice: 4, body: 6 },
        visualProfile: { bottleShape: "stout", liquidColor: "gold", glassColor: "clear" },
        tags: ["honey", "vanilla", "smooth", "nutty", "발베니", "꿀"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Balvenie_DoubleWood.jpg", // Real Balvenie 12 Image
        description: "꿀과 바닐라의 부드러움, 그리고 셰리 오크의 깊이가 조화로운 마스터피스."
    },
    {
        id: "w7",
        name: "Glenfarclas 105 Cask Strength",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 70,
        currency: "EUR",
        flavorProfile: { peat: 1, sweet: 7, fruit: 8, spice: 8, body: 9 },
        tags: ["strong", "sherry", "spicy", "intense", "글렌파클라스", "CS"],
        imageUrl: "/images/whiskies/macallan-12.png", // Dark sherry match
        description: "60도의 강렬함 속에 터져 나오는 진한 셰리와 과일의 풍미. 가성비 최고의 셰리 밤."
    },

    // 4. Blended / Balanced (All-rounders)
    {
        id: "w12",
        name: "Johnnie Walker Black Label",
        type: "Blended Scotch",
        region: "Scotland",
        priceRange: "budget",
        basePrice: 40, // ~$55,000 KRW
        currency: "USD",
        flavorProfile: { peat: 4, sweet: 5, fruit: 5, spice: 4, body: 5 },
        tags: ["balanced", "smoky", "versatile", "classic", "조니워커", "블렌디드"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Johnnie_Walker_Black_Label.jpg/800px-Johnnie_Walker_Black_Label.jpg",
        description: "스모키함과 달콤함의 완벽한 균형. 블렌디드 위스키의 표준."
    },
    {
        id: "w13",
        name: "Hibiki Harmony",
        type: "Blended Japanese",
        region: "Japan",
        priceRange: "premium",
        basePrice: 130, // ~$185,000 KRW (Market avg)
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 7, fruit: 8, spice: 3, body: 5 },
        visualProfile: { bottleShape: "faceted", liquidColor: "gold", glassColor: "clear" },
        tags: ["floral", "orange", "honey", "elegant", "히비키", "하모니", "일본위스키"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg/800px-Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg",
        description: "일본의 사계를 표현한 듯한 섬세한 꽃향기와 은은한 달콤함."
    },
    // 3. Bourbon / Sweet & Spicy (Corn & Rye)
    {
        id: "w8",
        name: "Buffalo Trace",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "budget",
        basePrice: 40, // ~$58,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 4, spice: 5, body: 6 },
        tags: ["vanilla", "caramel", "oak", "smooth", "버팔로트레이스", "버번"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Buffalo_Trace_Bourbon.jpg/800px-Buffalo_Trace_Bourbon.jpg",
        description: "바닐라, 민트, 흑설탕의 풍미가 어우러진 부드럽고 균형 잡힌 버번."
    },
    {
        id: "w9",
        name: "Wild Turkey 101",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "budget",
        basePrice: 35, // ~$49,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 3, spice: 9, body: 7 },
        tags: ["bold", "spicy", "cinnamon", "kick", "와일드터키", "버번"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wild_Turkey_101.JPG/800px-Wild_Turkey_101.JPG",
        description: "높은 도수(50.5도)에서 오는 타격감과 진한 스파이시함이 매력적인 남자의 버번."
    },
    {
        id: "w10",
        name: "Woodford Reserve",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 55, // ~$79,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 5, spice: 4, body: 6 },
        tags: ["complex", "smooth", "dried fruit", "cocoa", "우드포드리저브", "버번"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Woodford_Reserve_Bourbon.jpg/800px-Woodford_Reserve_Bourbon.jpg",
        description: "200가지 이상의 향이 감지된다는 복합적이고 부드러운 프리미엄 버번."
    },
    {
        id: "w11",
        name: "Maker's Mark",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 45, // ~$64,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 9, fruit: 4, spice: 2, body: 5 },
        tags: ["wheat", "soft", "sweet", "iconic", "메이커스마크", "버번"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Maker%27s_Mark.jpg/800px-Maker%27s_Mark.jpg",
        description: "밀(Wheat)을 사용하여 쓴맛 없이 부드럽고 달콤한 맛을 자랑하는 붉은 왁스의 아이콘."
    },
    {
        id: "w14",
        name: "Monkey Shoulder",
        type: "Blended Malt",
        region: "Speyside, Scotland",
        priceRange: "budget",
        basePrice: 40, // ~$58,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 6, spice: 5, body: 5 },
        visualProfile: { bottleShape: "stout", liquidColor: "gold", glassColor: "clear" },
        tags: ["malty", "vanilla", "creamy", "cocktail", "몽키숄더", "블렌디드몰트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Monkey_Shoulder_scotch_bottle.jpg/800px-Monkey_Shoulder_scotch_bottle.jpg", // Real Monkey Shoulder Image
        description: "맥아(Malt) 100% 블렌딩으로 부드러운 바닐라 향이 일품. 칵테일 베이스로도 최고."
    },

    // 5. Highlands & Islands / Diverse
    {
        id: "w15",
        name: "Talisker 10 Year Old",
        type: "Single Malt",
        region: "Isle of Skye, Scotland",
        priceRange: "mid",
        basePrice: 70, // ~$99,000 KRW
        currency: "USD",
        flavorProfile: { peat: 6, sweet: 4, fruit: 3, spice: 9, body: 7 },
        tags: ["pepper", "sea salt", "smoky", "wild", "탈리스커", "피트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Talisker_10_Year_Old_Single_Malt_Scotch_Whisky.jpg/800px-Talisker_10_Year_Old_Single_Malt_Scotch_Whisky.jpg",
        description: "바다의 짭짤함과 흑후추의 톡 쏘는 매력이 어우러진 스카이 섬의 야성."
    },
    {
        id: "w16",
        name: "Highland Park 12",
        type: "Single Malt",
        region: "Orkney, Scotland",
        priceRange: "mid",
        basePrice: 65, // ~$93,000 KRW
        currency: "USD",
        flavorProfile: { peat: 4, sweet: 6, fruit: 5, spice: 4, body: 6 },
        tags: ["heather honey", "light smoke", "balanced", "viking", "하이랜드파크", "피트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Highland_Park_12_Year_Old.jpg/800px-Highland_Park_12_Year_Old.jpg",
        description: "달콤한 꿀 향과 은은한 피트 스모크가 절묘하게 어우러진 올라운더 위스키."
    },
    {
        id: "w17",
        name: "Dalmore 12",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "premium",
        basePrice: 85, // ~$120,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 9, spice: 6, body: 8 },
        tags: ["orange", "chocolate", "rich", "royalty", "달모어", "셰리"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Dalmore_12yo.jpg/800px-Dalmore_12yo.jpg",
        description: "오렌지 마멀레이드와 초콜릿, 커피의 풍미가 느껴지는 화려하고 고급스러운 맛."
    },
    {
        id: "w18",
        name: "Glenmorangie Original",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 60, // ~$85,000 KRW
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 3, body: 4 },
        tags: ["floral", "peach", "creamy", "delicate", "글렌모린지", "싱글몰트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Glenmorangie_The_Original_whisky.jpg/800px-Glenmorangie_The_Original_whisky.jpg",
        description: "가장 목이 긴 증류기에서 만들어져 섬세하고 우아한 꽃향기와 과일 향이 특징."
    },
    {
        id: "w19",
        name: "Oban 14",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "premium",
        basePrice: 100, // ~$142,000 KRW
        currency: "USD",
        flavorProfile: { peat: 2, sweet: 5, fruit: 6, spice: 5, body: 6 },
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        tags: ["sea salt", "fruit", "dry", "coastal", "오반", "싱글몰트"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Oban_14yo.jpg", // Real Oban 14 Image
        description: "하이랜드와 아일랜드의 경계에 있는 듯한, 과일 향과 약간의 바다 내음, 스모키함의 조화."
    },
    {
        id: "w20",
        name: "Royal Salute 21 Year Old",
        type: "Blended Scotch",
        region: "Scotland",
        priceRange: "luxury",
        basePrice: 220,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 8, fruit: 8, spice: 4, body: 8 },
        tags: ["smooth", "velvety", "rich", "prestige", "로얄살루트", "로얄살루트21년", "명품위스키"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Royal_Salute_scotch_whiskey.jpg/800px-Royal_Salute_scotch_whiskey.jpg",
        description: "여왕의 대관식을 위해 탄생한 위스키. 벨벳처럼 부드럽고 깊은 풍미의 럭셔리 블렌디드."
    },
    {
        id: "w21",
        name: "The GlenDronach 12 Year Old",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 75,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 9, spice: 6, body: 8 },
        tags: ["sherry bomb", "rich", "dark fruit", "글렌드로낙", "글렌드로낙12년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Macallan_12.jpg/800px-Macallan_12.jpg", // Proxy
        description: "진한 셰리 오크의 풍미와 달콤한 과일 향이 일품인 셰리 애호가들의 필수 코스."
    },
    {
        id: "w22",
        name: "Aberlour 12 Year Old Double Cask",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 4, body: 6 },
        tags: ["smooth", "toffee", "balanced", "아벨라워", "아벨라워12년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Balvenie_DoubleWood.jpg", // Proxy
        description: "부드러운 단맛과 계피 향, 그리고 토피 사탕같은 고소함이 특징."
    },
    {
        id: "w23",
        name: "Bowmore 12 Year Old",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 60,
        currency: "USD",
        flavorProfile: { peat: 6, sweet: 6, fruit: 5, spice: 4, body: 6 },
        tags: ["balanced smoke", "honey", "lemon", "보모어", "보모어12년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bowmore_12_years_old_Scotch_whisky.jpg/800px-Bowmore_12_years_old_Scotch_whisky.jpg",
        description: "피트 연기와 상큼한 레몬, 달콤한 꿀의 풍미가 조화롭게 섞인 아일라의 진수."
    },
    {
        id: "w24",
        name: "Bushmills Black Bush",
        type: "Blended Irish",
        region: "Ireland",
        priceRange: "budget",
        basePrice: 35,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 6, spice: 3, body: 5 },
        tags: ["irish", "sherry", "smooth", "부쉬밀", "부쉬밀블랙부쉬"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "셰리 캐스크 비중이 높은 아이리시 위스키로, 실크처럼 부드러운 질감을 자랑합니다."
    },
    {
        id: "w25",
        name: "Jameson Black Barrel",
        type: "Blended Irish",
        region: "Ireland",
        priceRange: "mid",
        basePrice: 45,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 5, spice: 6, body: 6 },
        tags: ["toasted", "sweet", "vanilla", "제임슨", "제임슨블랙배럴"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jameson_Signature_Reserve_%26_Jameson_Black_Barrel_Select_Reserve.jpg/800px-Jameson_Signature_Reserve_%26_Jameson_Black_Barrel_Select_Reserve.jpg",
        description: "두 번 태운 오크통에서 숙성되어 더욱 진한 바닐라와 캐러멜 풍미를 보여줍니다."
    },
    {
        id: "w26",
        name: "Auchentoshan Three Wood",
        type: "Single Malt",
        region: "Lowland, Scotland",
        priceRange: "mid",
        basePrice: 85,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 9, fruit: 7, spice: 5, body: 7 },
        tags: ["triple distilled", "sherry", "complex", "오켄토션", "오켄토션쓰리우드"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Macallan_12.jpg", // Proxy
        description: "세 종류의 오크통을 거쳐 완성된, 오켄토션 특유의 부드러움과 복합적인 풍미."
    },
    {
        id: "w27",
        name: "Bruichladdich The Classic Laddie",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 70,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 8, spice: 3, body: 6 },
        tags: ["unpeated islay", "floral", "clean", "브룩라디", "브룩라디클래식래디"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "피트 처리 없이 만든 아일라 위스키. 보리 본연의 맛과 신선한 꽃향기가 특징."
    },
    {
        id: "w28",
        name: "Highland Park 18 Year Old Viking Pride",
        type: "Single Malt",
        region: "Islands, Scotland",
        priceRange: "premium",
        basePrice: 160,
        currency: "USD",
        flavorProfile: { peat: 5, sweet: 7, fruit: 7, spice: 6, body: 8 },
        tags: ["legendary", "honey head", "heather", "하이랜드파크", "하이랜드파크18년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "전 세계 위스키 평론가들의 극찬을 받은 최고의 밸런스를 가진 위스키 중 하나."
    },
    {
        id: "w29",
        name: "Glengoyne 12 Year Old",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 7, spice: 4, body: 5 },
        tags: ["slow distillation", "unpeated", "classic", "글렌고인", "글렌고인12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "피트를 전혀 사용하지 않고 천천히 증류하여 만든, 가장 순수한 위스키의 맛."
    },
    {
        id: "w30",
        name: "The Balvenie 14 Year Old Caribbean Cask",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "premium",
        basePrice: 95,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 9, fruit: 8, spice: 5, body: 7 },
        tags: ["rum cask", "tropical fruit", "toffee", "발베니", "발베니14년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Balvenie_DoubleWood.jpg", // Proxy
        description: "캐리비안 럼 캐스크에서 마무리하여 열대 과일의 달콤함과 부드러운 토피 향이 가득합니다."
    },
    {
        id: "w31",
        name: "Glenmorangie Quinta Ruban 14",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 80,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 6, body: 7 },
        tags: ["port finish", "dark chocolate", "mint", "글렌모린지", "글렌모린지퀸타루반14년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "포트 와인 캐스크에서 숙성되어 다크 초콜릿과 민트의 세련된 조화를 보여줍니다."
    },
    {
        id: "w32",
        name: "Caol Ila 12 Year Old",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 75,
        currency: "USD",
        flavorProfile: { peat: 8, sweet: 4, fruit: 5, spice: 6, body: 6 },
        tags: ["smoky", "oily", "lemon bark", "쿠일라", "쿠일라12년"],
        imageUrl: "/images/whiskies/laphroaig-10.png",
        description: "가벼운 질감 속에 숨겨진 날카로운 연기와 신선한 레몬 껍질의 풍미."
    },
    {
        id: "w33",
        name: "Kavalan Classic Single Malt",
        type: "Single Malt",
        region: "Taiwan",
        priceRange: "mid",
        basePrice: 90,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 9, spice: 5, body: 7 },
        tags: ["tropical", "mango", "smooth", "카발란", "카발란클래식"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "대만의 고온 다습한 기후가 만든, 망고와 같은 열대 과일 향이 폭발적인 위스키."
    },
    {
        id: "w34",
        name: "Nikka from the Barrel",
        type: "Blended",
        region: "Japan",
        priceRange: "mid",
        basePrice: 75,
        currency: "USD",
        flavorProfile: { peat: 2, sweet: 7, fruit: 6, spice: 8, body: 9 },
        tags: ["strong", "spicy", "iconic bottle", "니카", "니카프롬더배럴"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nikka_From_The_Barrel.jpg/800px-Nikka_From_The_Barrel.jpg",
        description: "51.4도의 강렬한 도수에도 불구하고 깊고 풍부한 꽃향기와 스파이시함이 일품."
    },
    {
        id: "w35",
        name: "Evan Williams Bottled-in-Bond",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "budget",
        basePrice: 30,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 3, spice: 7, body: 7 },
        tags: ["vanilla", "high proof", "value", "에반윌리엄스", "에반윌리엄스바틀인본드"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "가성비 버번의 끝판왕. 50도의 도수에서 오는 타격감과 달콤한 바닐라의 조화."
    },
    {
        id: "w36",
        name: "Elijah Craig Small Batch",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 40,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 4, spice: 5, body: 6 },
        tags: ["classic bourbon", "oak", "smooth", "엘라이저크레이그", "엘라이저크레이그스몰배치"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "잘 구워진 오크통의 풍미와 달콤한 캐러멜이 입안을 가득 채웁니다."
    },
    {
        id: "w37",
        name: "Michter's US*1 Small Batch Bourbon",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 60,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 5, spice: 4, body: 6 },
        tags: ["premium", "smooth", "toffee", "믹터스", "믹터스US1스몰배치"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "엄격한 품질 관리를 거쳐 탄생한, 세련되고 우아한 프리미엄 버번."
    },
    {
        id: "w38",
        name: "Angel's Envy Bourbon",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 9, fruit: 7, spice: 3, body: 7 },
        tags: ["port finish", "dessert", "chocolate", "엔젤스엔비", "엔젤스엔비버번"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "포트 와인 통에서 추가 숙성되어 초콜릿과 베리류의 달콤함이 특별한 버번."
    },
    {
        id: "w39",
        name: "Knob Creek 9 Year Old",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 50,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 4, spice: 8, body: 8 },
        tags: ["pre-prohibition", "bold", "oak", "놉크릭", "놉크릭9년"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "금주령 이전의 강하고 묵직한 버번 스타일을 재현한 볼드한 풍미."
    },
    {
        id: "w40",
        name: "Blanton's Single Barrel",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "premium",
        basePrice: 100,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 6, spice: 5, body: 7 },
        tags: ["collectible", "horse stopper", "citrus", "블랑톤", "블랑톤싱글배럴"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "세계 최초의 싱글 배럴 버번. 균형 잡힌 맛과 상징적인 말 조각 뚜껑이 특징."
    },
    {
        id: "w41",
        name: "Bushmills 10 Year Old",
        type: "Single Malt Irish",
        region: "Ireland",
        priceRange: "mid",
        basePrice: 55,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 8, spice: 3, body: 4 },
        tags: ["light", "fresh", "honey", "부쉬밀", "부쉬밀10년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "신선한 꿀과 서양배의 향이 매력적인, 가볍고 우아한 아이리시 싱글 몰트."
    },
    {
        id: "w42",
        name: "Redbreast 12 Year Old",
        type: "Single Pot Still",
        region: "Ireland",
        priceRange: "mid",
        basePrice: 75,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 8, body: 8 },
        tags: ["pot still", "creamy", "spice cake", "레드브레스트", "레드브레스트12년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Redbreast12.jpg/800px-Redbreast12.jpg", // Stout shape proxy
        description: "아이리시 위스키의 보석. 크리미한 질감과 풍부한 말린 과일, 향신료의 조화."
    },
    {
        id: "w43",
        name: "Green Spot",
        type: "Single Pot Still",
        region: "Ireland",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 9, spice: 5, body: 5 },
        tags: ["green apple", "fresh", "smooth", "그린스팟", "그린스팟싱글팟스틸"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "청사과의 아삭함과 신선함이 입안 가득 퍼지는 매우 깔끔하고 부드러운 위스키."
    },
    {
        id: "w44",
        name: "Tullamore D.E.W. 12 Year Old",
        type: "Blended Irish",
        region: "Ireland",
        priceRange: "mid",
        basePrice: 50,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 6, spice: 4, body: 5 },
        tags: ["triple distilled", "sherry", "accessible", "툴라모어", "툴라모어듀12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "세 종류의 오크통 숙성을 통해 완성된, 매우 마시기 편하고 매끄러운 맛."
    },
    {
        id: "w45",
        name: "Lustau Sherry Cask Redbreast",
        type: "Single Pot Still",
        region: "Ireland",
        priceRange: "premium",
        basePrice: 100,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 9, spice: 7, body: 8 },
        tags: ["sherry finish", "luxe", "dark nut", "레드브레스트", "레드브레스트루스타우"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "유명한 루스타우 셰리 하우스와의 협업으로 탄생한, 더욱 진하고 고소한 프리미엄 위스키."
    },
    // --- SECOND MASSIVE EXPANSION (80+ Items) ---
    {
        id: "w46",
        name: "Glenkinchie 12 Year Old",
        type: "Single Malt",
        region: "Lowland, Scotland",
        priceRange: "mid",
        basePrice: 60,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 5, fruit: 8, spice: 3, body: 3 },
        tags: ["light", "floral", "lowland", "글렌킨치", "글렌킨치12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "에든버러의 정원이라 불리는 깔끔하고 가벼운 로우랜드의 대표주자."
    },
    {
        id: "w47",
        name: "Clynelish 14 Year Old",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 85,
        currency: "USD",
        flavorProfile: { peat: 2, sweet: 6, fruit: 7, spice: 5, body: 8 },
        tags: ["waxy", "honey", "maritime", "클라이넬리쉬", "클라이넬리쉬14년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "입안을 감싸는 왁시(Waxy)한 질감과 은은한 바다 내음이 일품인 미식가들의 위스키."
    },
    {
        id: "w48",
        name: "The Glenlivet 15 Year Old French Oak Reserve",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 90,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 7, body: 6 },
        tags: ["spicy", "creamy", "oak", "글렌리벳", "글렌리벳15년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "프랑스산 리무쟁 오크통을 사용하여 고소한 너트류의 향과 스파이시함이 조화로운 위스키."
    },
    {
        id: "w49",
        name: "Aberlour A'bunadh",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "premium",
        basePrice: 110,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 9, fruit: 9, spice: 9, body: 9 },
        tags: ["cask strength", "sherry bomb", "heavy", "아벨라워", "아벨라워아부나흐"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Macallan_12.jpg", // Proxy
        description: "물 한 방울 섞지 않은 고도수의 강력한 셰리 폭탄. 진하고 묵직한 타격감."
    },
    {
        id: "w50",
        name: "Bunnahabhain 12 Year Old",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 70,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 7, fruit: 8, spice: 4, body: 7 },
        tags: ["unpeated islay", "nutty", "rich", "부나하벤", "부나하벤12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "아일라 섬에서 드물게 피트 없이 만든 고소하고 달콤한 셰리 스타일 위스키."
    },
    {
        id: "w51",
        name: "Kilchoman Machir Bay",
        type: "Single Malt",
        region: "Islay, Scotland",
        priceRange: "mid",
        basePrice: 75,
        currency: "USD",
        flavorProfile: { peat: 8, sweet: 5, fruit: 7, spice: 5, body: 6 },
        tags: ["farm distillery", "peat", "fresh", "킬호만", "킬호만마키베이"],
        imageUrl: "/images/whiskies/ardbeg-10.png",
        description: "아일라 섬의 아름다운 해변 이름을 딴, 신선한 과일과 강력한 피트의 조화."
    },
    {
        id: "w52",
        name: "Mortlach 12 Year Old Wee Witchie",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 80,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 6, spice: 7, body: 9 },
        tags: ["meaty", "beast of dufftown", "heavy", "모틀락", "모틀락12년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Macallan_12.jpg", // Proxy
        description: "더프타운의 야수라 불리는, 고기같이 묵직하고(Meaty) 황홀한 풍미의 위스키."
    },
    {
        id: "w53",
        name: "Cragganmore 12 Year Old",
        type: "Single Malt",
        region: "Speyside, Scotland",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 2, sweet: 7, fruit: 6, spice: 6, body: 5 },
        tags: ["complex", "herbal", "sweet", "크래건모어", "크래건모어12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "가장 복합적인 향을 지닌 위스키 중 하나로 꼽히는, 우아하고 다채로운 스타일."
    },
    {
        id: "w54",
        name: "Deanston 12 Year Old",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 6, spice: 5, body: 6 },
        tags: ["un-chillfiltered", "honey", "waxy", "딘스톤", "딘스톤12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "냉각 여과를 하지 않아 보리 본연의 고소함과 왁시한 질감이 잘 살아있습니다."
    },
    {
        id: "w55",
        name: "Old Pulteney 12 Year Old",
        type: "Single Malt",
        region: "Highland, Scotland",
        priceRange: "mid",
        basePrice: 55,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 5, fruit: 6, spice: 6, body: 6 },
        tags: ["maritime malt", "brine", "coastal", "올드펄트니", "올드펄트니12년"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "북쪽 끝 바닷가 마을에서 태어나 짭조름한 바다 내음이 매력적인 위스키."
    },
    {
        id: "w56",
        name: "Bulleit Bourbon",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "budget",
        basePrice: 40,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 4, spice: 8, body: 6 },
        tags: ["rye heavy", "spicy", "frontier", "불렛버번", "불렛버번"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "호밀(Rye) 비중이 높아 톡 쏘는 매콤함과 바닐라의 조화가 뛰어납니다."
    },
    {
        id: "w57",
        name: "Basil Hayden's",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 55,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 5, spice: 4, body: 4 },
        tags: ["light", "approachable", "honey", "바질헤이든", "바질헤이든버번"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "가볍고 부드러워 입문자들에게 추천하는 우아한 스타일의 버번 위스키."
    },
    {
        id: "w58",
        name: "Jack Daniel's Single Barrel Select",
        type: "Tennessee Whiskey",
        region: "Tennessee, USA",
        priceRange: "mid",
        basePrice: 70,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 5, spice: 6, body: 8 },
        tags: ["rich", "banana", "charcoal", "잭다니엘", "잭다니엘싱글배럴"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "하나의 배럴에서만 병입하여 더욱 진하고 깊은 바나나, 캐러멜 향을 보여줍니다."
    },
    {
        id: "w59",
        name: "Eagle Rare 10 Year Old",
        type: "Bourbon",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 5, spice: 5, body: 7 },
        tags: ["long finish", "noble", "complex", "이글레어", "이글레어10년"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "10년이라는 긴 숙성 시간을 거쳐 완성된, 버번 중 드물게 긴 여운을 가진 명품."
    },
    {
        id: "w60",
        name: "George Dickel No. 12",
        type: "Tennessee Whiskey",
        region: "Tennessee, USA",
        priceRange: "budget",
        basePrice: 35,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 4, spice: 5, body: 6 },
        tags: ["smooth", "corn", "tennessee", "조지디켈", "조지디켈넘버12"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "숯 여과 공정을 거쳐 매우 부드러우며, 메이플 시럽 같은 달콤함이 특징입니다."
    },
    {
        id: "w61",
        name: "Sazerac Rye",
        type: "Rye",
        region: "Kentucky, USA",
        priceRange: "mid",
        basePrice: 45,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 5, fruit: 7, spice: 9, body: 5 },
        tags: ["rye", "cocktail king", "spicy", "사제락", "사제락라이"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "뉴올리언스의 상징적인 칵테일 '사제락'을 위한, 화려하고 매콤한 호밀 위스키."
    },
    {
        id: "w62",
        name: "WhistlePig 10 Year Old Rye",
        type: "Rye",
        region: "Vermont, USA",
        priceRange: "premium",
        basePrice: 95,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 6, spice: 9, body: 8 },
        tags: ["premium rye", "mint", "power", "휘슬피그", "휘슬피그10년"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "100% 호밀에 가까운 강력한 힘과 복합적인 민트, 향신료의 여운."
    },
    {
        id: "w63",
        name: "Rittenhouse Straight Rye Bottle-in-Bond",
        type: "Rye",
        region: "Kentucky, USA",
        priceRange: "budget",
        basePrice: 35,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 5, fruit: 4, spice: 9, body: 7 },
        tags: ["bartender favorite", "classic", "bold", "리텐하우스", "리텐하우스라이"],
        imageUrl: "/images/whiskies/buffalo-trace.png",
        description: "클래식 칵테일을 만들 때 가장 먼저 선택되는, 정석적인 매운맛의 라이 위스키."
    },
    {
        id: "w64",
        name: "Crown Royal Deluxe",
        type: "Canadian",
        region: "Canada",
        priceRange: "budget",
        basePrice: 30,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 4, spice: 3, body: 4 },
        tags: ["velvet", "smooth", "approachable", "크라운로얄", "크라운로얄디럭스"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "벨벳 같은 부드러움의 대명사. 캐나다 왕실 방문을 기념해 만든 위스키."
    },
    {
        id: "w65",
        name: "Lot 40 Rye Whisky",
        type: "Canadian",
        region: "Canada",
        priceRange: "budget",
        basePrice: 40,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 5, spice: 9, body: 6 },
        tags: ["canadian rye", "copper pot", "bold", "롯40", "롯40라이위스키"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "부드러운 캐나디안 위스키의 편견을 깨는, 진하고 풍부한 호밀의 맛."
    },
    {
        id: "w66",
        name: "Yamazaki 12 Year Old",
        type: "Single Malt Japanese",
        region: "Japan",
        priceRange: "luxury",
        basePrice: 180,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 7, fruit: 9, spice: 5, body: 7 },
        tags: ["mizunara", "sandalwood", "finesse", "야마자키", "야마자키12년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/The_Yamazaki_Single_Malt_Whisky_Aged_12_years.JPG/800px-The_Yamazaki_Single_Malt_Whisky_Aged_12_years.JPG",
        description: "일본 위스키의 전설. 미즈나라 오크통 숙성을 통한 고풍스러운 백단향(Sandalwood)."
    },
    {
        id: "w67",
        name: "Hakushu 12 Year Old",
        type: "Single Malt Japanese",
        region: "Japan",
        priceRange: "luxury",
        basePrice: 160,
        currency: "USD",
        flavorProfile: { peat: 3, sweet: 6, fruit: 8, spice: 4, body: 5 },
        tags: ["forest", "fresh", "mint", "하쿠슈", "하쿠슈12년"],
        imageUrl: "/images/whiskies/laphroaig-10.png", // Green bottle match
        description: "숲의 증류소라 불리는 곳에서 태어난, 신선한 민트와 은은한 연기의 조화."
    },
    {
        id: "w68",
        name: "Suntory Toki",
        type: "Blended",
        region: "Japan",
        priceRange: "budget",
        basePrice: 40,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 6, fruit: 7, spice: 3, body: 3 },
        tags: ["highball", "light", "japanese", "산토리토키", "토키"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "하이볼을 위해 태어난 위스키. 깔끔하고 산뜻한 청사과와 꿀의 향."
    },
    {
        id: "w69",
        name: "Hibiki 21 Year Old",
        type: "Blended",
        region: "Japan",
        priceRange: "luxury",
        basePrice: 1200,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 9, fruit: 9, spice: 6, body: 9 },
        tags: ["masterpiece", "rare", "elegant", "히비키", "히비키21년"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg/800px-Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg",
        description: "전 세계 블렌디드 위스키 중 최고의 상을 휩쓴 마스터피스. 형용할 수 없는 깊이."
    },
    {
        id: "w70",
        name: "Yoichi Single Malt",
        type: "Single Malt Japanese",
        region: "Japan",
        priceRange: "premium",
        basePrice: 110,
        currency: "USD",
        flavorProfile: { peat: 5, sweet: 6, fruit: 6, spice: 5, body: 8 },
        tags: ["coastal smoke", "strong", "nikka", "요이치", "요이치싱글몰트"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "석탄 직화 증류 방식을 고집하여 만든, 묵직한 힘과 바다의 짠맛이 느껴지는 위스키."
    },
    {
        id: "w71",
        name: "Miyagikyo Single Malt",
        type: "Single Malt Japanese",
        region: "Japan",
        priceRange: "premium",
        basePrice: 110,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 9, spice: 4, body: 5 },
        tags: ["floral", "sherry", "soft", "미야기쿄", "미야기쿄싱글몰트"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "요이치와 대조되는 부드러움. 화사한 꽃향기와 셰리 오크의 달콤한 과일 맛."
    },
    {
        id: "w72",
        name: "Starward Nova",
        type: "Single Malt",
        region: "Australia",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 7, fruit: 9, spice: 5, body: 6 },
        tags: ["wine casks", "modern", "fruity", "스타워드", "스타워드노바"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "호주산 레드 와인 오크통에서 숙성되어 풍부한 베리 향과 와인 같은 느낌이 납니다."
    },
    {
        id: "w73",
        name: "Amrut Fusion",
        type: "Single Malt",
        region: "India",
        priceRange: "mid",
        basePrice: 70,
        currency: "USD",
        flavorProfile: { peat: 4, sweet: 6, fruit: 7, spice: 8, body: 7 },
        tags: ["indian whisky", "spicy", "exotic", "암룻", "암룻퓨전"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "인도와 스코틀랜드 보리를 융합하여 만든, 이국적인 향신료와 열대 과일의 조화."
    },
    {
        id: "w74",
        name: "Paul John Edited",
        type: "Single Malt",
        region: "India",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 3, sweet: 8, fruit: 7, spice: 5, body: 6 },
        tags: ["soft peat", "honey", "goa", "폴존", "폴존에디티드"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "인도 고아 지역의 따뜻한 기후에서 숙성된, 부드러운 피트와 꿀 같은 단맛."
    },
    {
        id: "w75",
        name: "Penderyn Madeira Finish",
        type: "Single Malt",
        region: "Wales",
        priceRange: "mid",
        basePrice: 65,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 8, fruit: 9, spice: 4, body: 4 },
        tags: ["welsh", "fruity", "clean", "펜더린"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "마데이라 와인 통에서 마무리하여 매우 깔끔하고 신선한 포도, 바닐라 향이 일품."
    },
    {
        id: "w76",
        name: "Mackmyra Svensk Ek",
        type: "Single Malt",
        region: "Sweden",
        priceRange: "mid",
        basePrice: 70,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 6, fruit: 7, spice: 7, body: 5 },
        tags: ["swedish oak", "ginger", "scandinavian", "맥미라"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "스웨덴산 오크통을 사용하여 매콤한 생강 향과 상큼한 시트러스의 조화가 독특합니다."
    },
    {
        id: "w77",
        name: "Chivas Regal 18 Year Old",
        type: "Blended",
        region: "Scotland",
        priceRange: "premium",
        basePrice: 90,
        currency: "USD",
        flavorProfile: { peat: 1, sweet: 8, fruit: 7, spice: 5, body: 7 },
        tags: ["smooth", "velvety", "classic", "시바스리갈"],
        imageUrl: "/images/whiskies/jw-black.png",
        description: "85가지의 풍부한 향을 담고 있다는 평을 듣는, 실크처럼 부드러운 고급 블렌디드."
    },
    {
        id: "w78",
        name: "Ballantine's 17 Year Old",
        type: "Blended",
        region: "Scotland",
        priceRange: "mid",
        basePrice: 85,
        currency: "USD",
        flavorProfile: { peat: 2, sweet: 7, fruit: 7, spice: 5, body: 7 },
        tags: ["korean favorite", "balanced", "smoke finish", "발렌타인"],
        imageUrl: "/images/whiskies/jw-black.png",
        description: "한국인들이 전 세계에서 가장 사랑하는 위스키 중 하나. 흠잡을 데 없는 완벽한 균형."
    },
    {
        id: "w79",
        name: "Old Parr 12 Year Old",
        type: "Blended",
        region: "Scotland",
        priceRange: "budget",
        basePrice: 45,
        currency: "USD",
        flavorProfile: { peat: 3, sweet: 8, fruit: 6, spice: 5, body: 8 },
        tags: ["square bottle", "rich", "malty", "올드파"],
        imageUrl: "/images/whiskies/buffalo-trace.png", // Square bottle proxy
        description: "역사상 가장 오래 산 인물의 이름을 딴 위스키. 맥아 함량이 높아 고소하고 진합니다."
    },
    {
        id: "w80",
        name: "Compass Box Hedonism",
        type: "Blended Grain",
        region: "Scotland",
        priceRange: "premium",
        basePrice: 110,
        currency: "USD",
        flavorProfile: { peat: 0, sweet: 9, fruit: 5, spice: 4, body: 8 },
        tags: ["grain whisky", "vanilla", "creamy", "컴파스박스"],
        imageUrl: "/images/whiskies/talisker-10.png",
        description: "그레인 위스키의 재발견. 바닐라 아이스크림을 마시는 듯한 환상적인 부드러움."
    }
];

