import { Activity, Product, Community } from '../types'

export const communities: Community[] = [
  {
    name: 'UIT INSIDE',
    role: 'Podcaster and Director'
  },
  {
    name: 'UIT meetup',
    role: 'Co-Organizer'
  },
  {
    name: 'FRONTEND CONFERENCE 2017',
    role: 'Organizer'
  },
  {
    name: 'JSLounge',
    role: 'Organizer'
  },
  {
    name: 'Vue.js Fes Japan 2018',
    role: 'Staff'
  },
  {
    name: 'Vue.js Japan User Group',
    role: 'ex-Member'
  },
  {
    name: 'reactjs/ja.reactjs.org',
    role: 'Primary Maintainer'
  },
  {
    name: 'vuejs/jp.vuejs.org',
    role: 'Primary Maintainer'
  },
  {
    name: 'nuxt/docs',
    role: 'Maintainer'
  },
  {
    name: 'WordBench Kyoto',
    role: 'ex-Moderator'
  }
]

export const products: Product[] = [
  {
    title: 'minimalytm',
    about: 'Desktop application',
    stack: 'Electron / TypeScript',
    url: 'https://www.minimalytm.app',
    link_url: 'https://www.minimalytm.app'
  },
  {
    title: 'Internet programming',
    stack: 'DTP Design / Writing',
    url: 'https://okimoti.booth.pm/items/1003204',
    link_url: 'https://okimoti.booth.pm/items/1003204'
  },
  {
    title: 'connpassport',
    about: 'Unofficial connpass mobile acceptance system.',
    stack: 'Nuxt.js / AWS Lambda',
    url: 'https://connpassport.com/',
    link_url: 'https://connpassport.com/'
  },
  {
    title: 'SeQueue',
    about: 'The invoice management for freelancer.',
    stack: 'Nuxt.js / Express(TypeORM,puppeteer,Vue SSR)',
    url: 'https://sequeue.jp',
    link_url: 'https://sequeue.jp'
  },
  {
    title: 'Contributter',
    about: 'Notification of GitHub activity status to Twitter.',
    stack: 'Next.js / Firebase',
    url: 'https://contributter.potato4d.me',
    link_url: 'https://contributter.potato4d.me'
  },
  {
    title: 'Qiita Feed Gen',
    about: 'Qiita private feed rss converter.',
    stack: 'Next.js',
    url: 'https://qiita-feed-gen.potato4d.me',
    link_url: 'https://qiita-feed-gen.potato4d.me'
  },
  {
    title: 'Nuxt tech book',
    about: 'Nuxt technical book',
    stack: 'Writing',
    url: 'https://potato4d.booth.pm/items/824745',
    link_url: 'https://potato4d.booth.pm/items/824745'
  },
  {
    title: 'JSLounge',
    about: '「週末の渋谷で一歩ずつステップアップ」をサポートする団体',
    stack: 'Event Organize',
    url: 'https://jslounge.connpass.com/',
    link_url: 'https://jslounge.connpass.com/'
  }
]

export const activities: Activity[] = [
  {
    title: '【査読】実践 TypeScript',
    source: 'マイナビ出版',
    show_link: 'https://www.amazon.co.jp/dp/483996937X/',
    link: 'https://amzn.to/2XFb3Ba'
  },
  {
    title:
      '【登壇】持続可能なプロダクト開発のために - フロントエンドと新陳代謝の話',
    source: 'HTML5 Conference 2018',
    link: 'https://speakerdeck.com/potato4d/frontend-premised-on-making-changes'
  },
  {
    title: '【登壇】破綻しない Vue.js アプリケーション開発のために大切なこと',
    source: 'JSLounge at UUUM',
    link:
      'https://speakerdeck.com/potato4d/how-to-make-a-robust-vue-dot-js-application'
  },
  {
    title: '【執筆】Nuxt.js ビギナーズガイド',
    source: 'C&R研究所',
    show_link: 'https://www.amazon.co.jp/gp/product/4863542569/',
    link: 'https://amzn.to/2Qol7eZ'
  },
  {
    title: '【査読】Vue.js 入門',
    source: '技術評論社',
    show_link: 'https://www.amazon.co.jp/gp/product/4297100916/',
    link: 'https://amzn.to/2Oric3P'
  },
  {
    title: '【登壇】Vue.js プロジェクトの爆発させかた',
    source: '市ヶ谷Geek★Night',
    link: 'https://speakerdeck.com/potato4d/how-to-explosion-vue-dot-js-project'
  },
  {
    title: '【登壇】「結局Nuxt.jsって何がいいの？」に対する回答',
    source: 'Vue.js meetup #7 メインセッション',
    link: 'https://slides.com/potato4d/vuejs_meetup7'
  },
  {
    title:
      '【執筆】Vue.js製フレームワークNuxt.jsではじめるUniversalアプリケーション開発',
    source: 'HTML5 Experts.jp',
    link: 'https://html5experts.jp/potato4d/24346/'
  },
  {
    title: '【登壇】「現代におけるプロダクト開発とPHPを選定するワケ 」（再演）',
    source: 'PHPカンファレンス2017Kansai',
    link:
      'https://speakerdeck.com/potato4d/xian-dai-niokerupurodakutokai-fa-tophpwoxuan-ding-suruwake-at-tokyo-number-phpcon2017'
  },
  {
    title: '【執筆】「完全HTTPS化のメリットと極意を大規模Webサービス」',
    source: 'ITmedia(@IT)',
    link: 'http://www.atmarkit.co.jp/ait/articles/1707/13/news010.html'
  },
  {
    title: '【登壇】「Draft.jsによる 統制のとれたテキスト編集の世界」',
    source: '初夏のJavaScript祭 in mixi',
    link:
      'https://speakerdeck.com/potato4d/draft-dot-jsniyoru-tong-zhi-falsetoretatekisutobian-ji-falseshi-jie-number-jsfes'
  },
  {
    title: '【登壇】「あらゆる人のためのフロントエンド」',
    source: 'FRONTEND CONFERENCE 2017 基調講演',
    link:
      'https://speakerdeck.com/potato4d/arayururen-falsetamefalsehurontoendo-number-frontkansai'
  }
]
