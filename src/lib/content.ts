/* ── 人物 ── */

export const person = {
  name: "大原唯人",
  nameEn: "Yuito Ohara",
  greeting: "はじめまして、大阪出身・神奈川在住の大原唯人と申します。",
  intro: [
    "Webアプリケーション開発（バックエンド中心）",
    "ECサイトの設計・構築・運用",
    "業務システムの開発・保守",
  ],
  introNote: "現在の主な仕事は上記になります。",
  philosophy:
    "お客様の課題に寄り添いながら、使いやすく\n長く運用できるシステムを作ることを大切にしています。",
  message:
    "このページでは私の経歴や趣味など記載しているので\nお時間あるときにでもご覧いただけると幸いです。",
};

/* ── 性格・人柄 ── */

export const aboutMe = [
  {
    title: "とりあえずやってみるタイプ",
    body: "ゲームではレベル上げをせずにボス戦まで突っ込んでしまう人でした。何事も経験と思って行動するタイプです。",
  },
  {
    title: "人の話を聞くのが好き",
    body: "友達の相談をよく聞く役回りでした。自分から話すより、相手の話を引き出すほうが得意です。",
  },
  {
    title: "地元が好き",
    body: "大阪を離れても関西弁は抜けません。帰省するたびに「やっぱり大阪が落ち着くなぁ」と思います。",
  },
];

/* ── 経歴 ── */

export type TimelineItem = {
  date: string;
  title: string;
  note?: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "1998",
    title: "誕生",
    note: "大阪府生まれ。関西で育つ",
  },
  {
    date: "2014.04",
    title: "大阪桐蔭高等学校 普通科 入学",
    note: "朝から晩まで勉強漬けの3年間。超進学校の環境でひたすら学業に打ち込む",
  },
  {
    date: "2017.03",
    title: "大阪桐蔭高等学校 卒業",
  },
  {
    date: "2017.04",
    title: "同志社大学 生命医科学部 医工学科 入学",
    note: "ティッシュエンジニアリングを専攻。医療と工学の交差点でものづくりの面白さに出会う",
  },
  {
    date: "2018",
    title: "プログラミングに本格的にハマり始める",
    note: "授業きっかけでコードを書く楽しさに目覚める。自主的にWebアプリを作り始める",
  },
  {
    date: "2021.03",
    title: "同志社大学 卒業",
    note: "研究漬けの毎日。実験を繰り返すなかで「仮説→検証→改善」のサイクルが自然と身についた",
  },
  {
    date: "2021 – 2022",
    title: "独学でWeb技術を学ぶ",
    note: "JavaScript / TypeScript / React / Next.js など、フロントからバックまで幅広く独学",
  },
  {
    date: "2022.09",
    title: "IT 企業に入社（Web / 業務システム領域）",
    note: "大手家電メーカーの EC サイトを担当。ECCUBE / PHP / MySQL での開発・運用を経験",
  },
  {
    date: "2023.04",
    title: "社内ホームページ刷新プロジェクトに参加",
    note: "Next.js を使ったモダンなサイトへのリニューアルを担当",
  },
  {
    date: "2024.07",
    title: "脆弱性管理システムの開発・運用を担当",
    note: "ServiceNow を使ったシステムの機能設計・改修・保守を経験",
  },
  {
    date: "2025.08",
    title: "退社",
    note: "約3年の実務を経て、もっと広い領域で挑戦したいと思い退職",
  },
  {
    date: "2025.10",
    title: "業務委託で EC 支援に参画",
    note: "Next.js / AWS（Amplify / Lambda / DynamoDB）を使ったシステムの設計から運用まで一人で担当",
  },
  {
    date: "2026.03",
    title: "案件終了、次のステップへ",
  },
];

/* ── スキル ── */

export const skills = [
  { label: "TypeScript / JavaScript", years: "3年" },
  { label: "Next.js", years: "2年" },
  { label: "PHP（Laravel / ECCUBE）", years: "2年" },
  { label: "MySQL", years: "3年" },
  { label: "Docker / Git", years: "3年" },
  { label: "AWS（Amplify / Lambda / DynamoDB）", years: "1年" },
  { label: "ServiceNow", years: "1年" },
  { label: "PowerShell", years: "1年" },
];

/* ── 実績 ── */

export const projects = [
  {
    period: "2025.10 – 2026.03",
    name: "EC 支援システム（Next.js / AWS）",
    role: "機能設計・新規実装・改修、保守・運用",
  },
  {
    period: "2024.07 – 2025.08",
    name: "脆弱性管理システム（ServiceNow）",
    role: "機能設計・改修、保守・運用",
  },
  {
    period: "2022.12 – 2024.06",
    name: "大手家電メーカー EC サイト（ECCUBE / PHP / MySQL）",
    role: "機能設計・改修、保守・運用",
  },
  {
    period: "2023.04 – 2023.11",
    name: "社内ホームページ刷新（Next.js）",
    role: "Next.js を用いた実装",
  },
];

/* ── 資格 ── */

export const certifications = [
  { year: "2018", title: "普通自動車第一種運転免許" },
  { year: "2022", title: "ファイナンシャル・プランニング技能士 3級" },
  { year: "2022", title: "基本情報技術者試験" },
];

/* ── 制作環境 ── */

export const devEnvironment = [
  "Windows 11 / macOS",
  "VS Code",
  "Docker / Git / GitHub",
  "Figma",
];

/* ── 略歴 ── */

export type BiographySection = {
  period: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    objectPositionClassName?: string;
    objectFitClassName?: string;
    imageClassName?: string;
  }[];
};

export const biography: BiographySection[] = [
  {
    period: "小学校時代",
    title: "のびのび育った少年時代",
    description:
      "大阪の下町で育ち、友達と走り回る毎日。テニスに体操、英会話教室、スイミングスクール、書道、料理教室など多くの習い事を経験し、家ではパソコンにも触れていた。気になったらまずやってみる好奇心旺盛な子どもだった。",
    images: [
      {
        src: "/images/biography/elementary-1.jpg",
        alt: "小学校時代（英会話教室）",
      },
      {
        src: "/images/biography/elementary-2.jpg",
        alt: "小学校時代（テニス）",
      },
      {
        src: "/images/biography/elementary-3.jpg",
        alt: "小学校時代（お出かけ）",
      },
      {
        src: "/images/biography/elementary-4.jpg",
        alt: "小学校時代（パソコン）",
      },
      {
        src: "/images/biography/elementary-5.jpg",
        alt: "小学校時代（料理教室）",
      },
      {
        src: "/images/biography/elementary-6.jpg",
        alt: "小学校時代（家族写真）",
        objectPositionClassName: "object-top",
      },
    ],
  },
  {
    period: "中学校時代",
    title: "部活と勉強に夢中だった日々",
    description:
      "卓球部に入ってからは、練習と試合に全力投球の毎日。部長としてチームをまとめながら、自分のプレーも磨いた。部活だけでなく勉強も手を抜かず、文武両道で駆け抜けた時期だった。家ではセキセイインコを飼っていて、毎日の癒しでもあった。勝てない時期も含めて、努力を積み重ねることの大切さを学んだ。",
    images: [
      {
        src: "/images/biography/middle-1.jpg",
        alt: "中学校時代（卓球大会の表彰）",
        objectFitClassName: "object-contain",
        objectPositionClassName: "object-top",
        imageClassName: "bg-black/5",
      },
      {
        src: "/images/biography/middle-2.jpg",
        alt: "中学校時代（卓球の試合）",
      },
      {
        src: "/images/biography/middle-3.jpg",
        alt: "中学校時代（勉強とセキセイインコ）",
      },
    ],
  },
  {
    period: "高校時代",
    title: "勉強漬けの3年間",
    description:
      "進学校だったこともあり、3年間ほぼ勉強漬けの毎日。朝7時から20時まで学校で学習するような生活で、土日も関係なく勉強中心だった。振り返ると、その分写真が驚くほど残っていない。",
    images: [],
  },
  {
    period: "大学時代",
    title: "医工学とプログラミングに出会う",
    description:
      "同志社大学で医工学を専攻。研究に打ち込む傍ら、プログラミングの楽しさに目覚め、Web アプリを自作し始める。人工心臓や再生医療などのテーマにも触れながら、課題や実験に向き合う日々だった。髪を染めてみたり、ブログで AdSense 収益化に挑戦してみたり、音ゲーで全国大会に出場したり、作曲に没頭したり。興味の方向に全力で振り切れるのが、自分らしさだと思う。",
    images: [
      { src: "/images/biography/university-1.jpg", alt: "大学時代（卒業式）" },
      {
        src: "/images/biography/university-2.jpg",
        alt: "大学時代（研究・課題）",
      },
      {
        src: "/images/biography/university-3.jpg",
        alt: "大学時代（レポート・資料）",
        objectFitClassName: "object-contain",
        objectPositionClassName: "object-top",
        imageClassName: "bg-black/5",
      },
      {
        src: "/images/biography/university-4.jpg",
        alt: "大学時代（音ゲー全国大会）",
      },
      {
        src: "/images/biography/university-5.jpg",
        alt: "大学時代（ブログの収益化）",
        objectFitClassName: "object-contain",
        objectPositionClassName: "object-top",
        imageClassName: "bg-black/5",
      },
      {
        src: "/images/biography/university-6.jpg",
        alt: "大学時代（髪を染めていた頃）",
      },
    ],
  },
  {
    period: "社会人",
    title: "エンジニアとしてのキャリアをスタート",
    description:
      "IT 企業に入社し、EC サイトや業務システムの開発を経験。社会人になって一人暮らしも始まり、仕事に向き合う時間が一気に増えた。上司と二人三脚でプロジェクト対応を進め、オフショア開発では中国のメンバーともやり取りしながら、仕様のすり合わせや進行管理の難しさと面白さを学んだ。並行して基本情報技術者試験にも合格し、基礎を固めることで実務の理解も深まった。趣味ではポーカーを“ガチ勉強”し、確率や期待値で考える癖がついたのもこの頃。",
    images: [
      {
        src: "/images/biography/career-1.jpg",
        alt: "社会人（オフィスで開発）",
      },
      { src: "/images/biography/career-2.jpg", alt: "社会人（打ち合わせ）" },
      {
        src: "/images/biography/career-3.jpg",
        alt: "社会人（仕事終わりの一枚）",
      },
      { src: "/images/biography/career-4.jpg", alt: "趣味（ポーカー）" },
      { src: "/images/biography/career-5.jpg", alt: "趣味（ポーカーの勉強）" },
      {
        src: "/images/biography/career-6.jpg",
        alt: "資格（基本情報技術者試験 合格証書）",
        objectFitClassName: "object-contain",
        objectPositionClassName: "object-top",
        imageClassName: "bg-black/5",
      },
    ],
  },
];

/* ── 趣味・好きなもの ── */

export const hobbies = [
  {
    category: "好きな言葉",
    items: [
      "二兎を追う者は一兎をも得ず、だが二兎を追うものだけが二兎を得る",
      "やりたいことが複数あるときも、諦めずに「両方やるためのやり方」を考える指針にしています",
    ],
  },
  {
    category: "音楽",
    items: [
      "ケルト音楽が好き（作業中もよく流します）",
      "落ち着くメロディや民族楽器の音が好きです",
      "作曲（DTM）",
    ],
  },
  {
    category: "ゲーム",
    items: [
      "音ゲー",
      "ポケモン",
      "どうぶつの森",
      "マリオカート",
      "スマブラ",
      "スプラトゥーン",
      "モンハン",
      "ドラクエ",
      "パズルゲーム",
    ],
  },
  {
    category: "スポーツ",
    items: ["卓球", "テニス"],
  },
  {
    category: "ポーカー",
    items: [
      "主に NLH（テキサス・ホールデム）をプレイ",
      "座学（確率・期待値・ポットオッズ）",
      "ハンドレビューで振り返り",
    ],
  },
  {
    category: "旅行",
    items: [
      "最近行ったところだと、湯田温泉（山口）・佐世保・箱根・仙台",
      "行き先の名物を食べる",
      "街の空気感を歩いて楽しむ",
      "頻繁ではなく、タイミングが合ったときにふらっと行く感じです",
    ],
  },
];
