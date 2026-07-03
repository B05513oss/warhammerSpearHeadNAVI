const armies = [
  "未選択",
  "ブレイド・オヴ・コーン — ブラッドバウンド・ゴア・ピルグリム",
  "ブレイド・オヴ・コーン — ファング・オヴ・ザ・ブラッドゴッド",
  "シティ・オヴ・シグマー — キャステライト・カンパニー",
  "シティ・オヴ・シグマー — フュージル・プラトーン",
  "シティ・オヴ・シグマー — ゼネストラの熱狂者たち",
  "シティ・オヴ・シグマー — エンバーガードの歩哨",
  "ドーター・オヴ・カイン — ハートフレイヤー・トループ",
  "ドーター・オヴ・カイン — カイナイト・シャドウ・カヴン",
  "ディサイプル・オヴ・ティーンチ — フラックスブレイド・カヴン",
  "ディサイプル・オヴ・ティーンチ — ツァーンゴール・ウォーフロック",
  "フレッシュイーター・コート — キャリオン・リテイナー",
  "フレッシュイーター・コート — チャーネル・ウォッチ",
  "ファイアスレイヤー — サーガ・アックスバンド",
  "グルームスパイト・ギット — バッドムーン・マッドモブ",
  "グルームスパイト・ギット — スナールパック・ハンターズ",
  "ヘドナイト・オヴ・スラーネッシュ — エピキュリアン・レヴェラー",
  "ヘドナイト・オヴ・スラーネッシュ — ルリッド・ドリームの刃",
  "ヘルスミス・オヴ・ハシュト — ヘルフォージ・ホスト",
  "アイドネス・ディープキン — ソウルレイド・ハント",
  "アイドネス・ディープキン — アケリアン・タイドガード",
  "カラドロン・オーヴァーロード — グルンドストック・トレイルブレイザー",
  "カラドロン・オーヴァーロード — スカイハンマー・タスクフォース",
  "ルミネス・レルムロード — グリッタリング・ファランクス",
  "ルミネス・レルムロード —ハラカン・ヴァンガード",
  "マゴットキン・オヴ・ナーグル — ブボニック・セル",
  "マゴットキン・オヴ・ナーグル — ブリーク・ホスト",
  "ナイトホーント — スラッシャー・ホスト",
  "ナイトホーント — カースド・シャックルホード",
  "オゴウル・モウトライブ — スクラップグラット",
  "オゴウル・モウトライブ — タイラントの咆哮",
  "オールク・ウォークラン — アイアンジョウズ・ビッグモブ",
  "オールク・ウォークラン — スワンプスカルカ・ギャング",
  "オシアーク・ボーンリーパー — カヴァロス・ヴァンガード",
  "オシアーク・ボーンリーパー — タイス・リーパー・エシュロン",
  "オシアーク・ボーンリーパー — モーティサン・エリート",
  "セラフォン — サンブラッデッド・プロウラー",
  "セラフォン — スタースケイル・ウォーホスト",
  "スケイヴン — ノーフィースト・クローパック",
  "スケイヴン — クリクシットのキルパック",
  "スレイヴ・トゥ・ダークネス — ダークオース・レイダー",
  "スレイヴ・トゥ・ダークネス — ブラッドウィンド・レギオン",
  "サンズ・オヴ・ベヘマット — ウォールスマッシャ・ストンプ",
  "ソウルブライト・グレイヴロード — ブラッドクレイヴ・ハント",
  "ソウルブライト・グレイヴロード — デスラトル・トゥーム・ホスト",
  "ストームキャスト・エターナル — イーンドラスタのスピアヘッド",
  "ストームキャスト・エターナル — ヴィジラント・ブラザーフッド",
  "シルヴァネス — スパイトウィング・フライト",
  "シルヴァネス — ビターバーク・コプス"
];

const armyProfiles = {
  "ブラッドバウンド・ゴア・ピルグリム": {
    "summary": "ブラッド・タイスポイントと使用済み報酬を管理します。",
    "counters": [
      [
        "bloodTithe",
        "ブラッド・タイスポイント",
        0,
        8
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "強化能力使用済み"
    ],
    "reminders": [
      "ユニットが全滅した時：ブラッド・タイス獲得を確認",
      "ポイント消費前に必要数と効果を確認",
      "各フェイズの軍固有リアクションを確認"
    ]
  },
  "ファング・オヴ・ザ・ブラッドゴッド": {
    "summary": "獲物の指定・更新と一度きり能力を管理します。",
    "textFields": [
      [
        "preyTarget",
        "現在の獲物"
      ]
    ],
    "toggles": [
      "獲物を指定済み",
      "獲物を倒した／更新が必要",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ラウンド開始時：獲物の状態を確認",
      "対象が倒れた時：新しい獲物の指定条件を確認",
      "獲物を対象にする攻撃・移動効果を確認"
    ]
  },
  "キャステライト・カンパニー": {
    "summary": "防御陣形、移動の有無、増援をまとめて確認します。",
    "toggles": [
      "キャステライト陣形を維持",
      "対象ユニットはこのターン移動していない",
      "増援配置済み"
    ],
    "textFields": [
      [
        "formationUnit",
        "陣形／強化対象ユニット"
      ]
    ],
    "reminders": [
      "移動フェイズ：動かなかったユニットの防御効果を確認",
      "射撃フェイズ：砲撃・支援能力を確認",
      "壊滅時：増援対象か確認"
    ]
  },
  "フュージル・プラトーン": {
    "summary": "スクワイア・トークン、統合復帰、増援を管理します。",
    "selects": [
      [
        "squireUnit",
        "スクワイアの所属先",
        [
          "未配置",
          "フュージリア第1分隊",
          "フュージリア第2分隊"
        ]
      ]
    ],
    "toggles": [
      "フュージリア2ユニット壊滅",
      "10体統合ユニットを復帰済み",
      "ワイルダーコープス増援済み"
    ],
    "reminders": [
      "ターン開始時：スクワイアの移動可否を確認",
      "2個のフュージリア壊滅後：統合復帰を確認",
      "移動していないユニットの防御効果を確認"
    ]
  },
  "ゼネストラの熱狂者たち": {
    "summary": "レリック・エンヴォイ、予備戦力、モデル復帰を管理します。",
    "textFields": [
      [
        "envoyUnit",
        "レリック・エンヴォイの所属先"
      ]
    ],
    "toggles": [
      "ウィスパーブレイド配置済み",
      "命令カードを手札へ戻した",
      "スティールヘルム復帰処理済み",
      "コマンドコープ復帰処理済み"
    ],
    "reminders": [
      "ヒーローフェイズ：ゼネストラの祈り対象を確認",
      "命令使用後：カード回収条件を確認",
      "壊滅・損耗時：モデル復帰能力を確認"
    ]
  },
  "エンバーガードの歩哨": {
    "summary": "テクサ・トークン、グレナディア増援、再配置を管理します。",
    "textFields": [
      [
        "thexaUnit",
        "テクサ・トークンの所属先"
      ]
    ],
    "toggles": [
      "グレナディア増援済み",
      "戦闘後再配置を使用済み",
      "地形／目標争奪ダメージ処理済み"
    ],
    "reminders": [
      "戦闘後：再配置能力を確認",
      "敵が地形・目標を争う時：グレナディア能力を確認",
      "壊滅時：増援対象を確認"
    ]
  },
  "ハートフレイヤー・トループ": {
    "summary": "強化対象と使用済み能力を管理します。",
    "textFields": [
      [
        "markedUnit",
        "現在の強化／標的ユニット"
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "強化能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：強化と魔法を確認",
      "移動・突撃時：飛行／再配置能力を確認",
      "戦闘フェイズ：標的に対する追加効果を確認"
    ]
  },
  "カイナイト・シャドウ・カヴン": {
    "summary": "影からの配置、標的、使用済み能力を管理します。",
    "textFields": [
      [
        "shadowTarget",
        "現在の標的"
      ]
    ],
    "toggles": [
      "予備配置ユニットを配置済み",
      "影移動能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "移動フェイズ：予備戦力・再配置を確認",
      "射撃／戦闘：標的への効果を確認",
      "ターン終了時：位置条件を確認"
    ]
  },
  "フラックスブレイド・カヴン": {
    "summary": "魔法・変転効果と一度きり能力を管理します。",
    "counters": [
      [
        "fluxPoints",
        "フラックス／魔力カウンター",
        0,
        9
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "強化能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：呪文と軍固有能力を確認",
      "ダイス変更・再ロール効果の使用済みを確認",
      "戦闘前：対象ユニットへの強化を確認"
    ]
  },
  "ツァーンゴール・ウォーフロック": {
    "summary": "ウォーフロックの強化対象と使用済み能力を管理します。",
    "textFields": [
      [
        "warflockTarget",
        "強化対象ユニット"
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "強化能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：魔法と強化を確認",
      "味方ヒーロー周辺の保護効果を確認",
      "戦闘フェイズ：ツァーンゴール固有効果を確認"
    ]
  },
  "キャリオン・リテイナー": {
    "summary": "饗宴・復帰・予備戦力を管理します。",
    "counters": [
      [
        "feastPoints",
        "饗宴／威信カウンター",
        0,
        9
      ]
    ],
    "toggles": [
      "予備戦力配置済み",
      "モデル復帰処理済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：妄想・命令系効果を確認",
      "敵モデル撃破時：饗宴系効果を確認",
      "ターン終了時：モデル復帰を確認"
    ]
  },
  "チャーネル・ウォッチ": {
    "summary": "各ラウンドの妄想選択と使用済み能力を管理します。",
    "selects": [
      [
        "delusion",
        "現在の妄想",
        [
          "未選択",
          "妄想A",
          "妄想B",
          "妄想C"
        ]
      ]
    ],
    "toggles": [
      "今ラウンドの妄想を選択済み",
      "一度きり能力使用済み",
      "復帰処理済み"
    ],
    "reminders": [
      "ラウンド開始時：妄想を1つ選択",
      "妄想の効果を対象ユニットへ適用",
      "ターン終了時：復帰・回復を確認"
    ]
  },
  "バッドムーン・マッドモブ": {
    "summary": "月の影響、強化対象、一度きり能力を管理します。",
    "textFields": [
      [
        "moonTarget",
        "月の影響／強化対象"
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "強化能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ラウンド開始時：月関連の効果を確認",
      "ヒーローフェイズ：呪文・強化を確認",
      "戦闘フェイズ：群れ・狂乱効果を確認"
    ]
  },
  "スナールパック・ハンターズ": {
    "summary": "狩りの標的、罠、使用済み能力を管理します。",
    "textFields": [
      [
        "huntTarget",
        "狩りの標的"
      ]
    ],
    "toggles": [
      "罠／奇襲能力使用済み",
      "増援配置済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ラウンド開始時：標的を確認",
      "移動フェイズ：奇襲・再配置を確認",
      "戦闘後：標的撃破時の効果を確認"
    ]
  },
  "エピキュリアン・レヴェラー": {
    "summary": "現在の味方ユニット数に応じた効果を確認します。",
    "counters": [
      [
        "friendlyUnits",
        "現在の味方ユニット数",
        0,
        12
      ]
    ],
    "toggles": [
      "一時強化を付与済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ユニット数が変わるたびに『移ろいやすい寵愛』を確認",
      "3体モデルを個別ユニットとして数えるルールを確認",
      "各ターンの強化対象を記録"
    ]
  },
  "ヘルフォージ・ホスト": {
    "summary": "鍛造・燃料カウンターと強化対象を管理します。",
    "counters": [
      [
        "forgePoints",
        "鍛造／燃料カウンター",
        0,
        9
      ]
    ],
    "textFields": [
      [
        "forgeTarget",
        "鍛造強化の対象"
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：鍛造・強化を確認",
      "射撃フェイズ：火器・砲撃能力を確認",
      "ダメージを受けた時：反応能力を確認"
    ]
  },
  "アケリアン・タイドガード": {
    "summary": "潮流、予備戦力、騎兵の強化を管理します。",
    "textFields": [
      [
        "tideGuardTarget",
        "潮流／強化対象"
      ]
    ],
    "toggles": [
      "予備戦力配置済み",
      "連隊アビリティ使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "各ラウンドの潮流効果を確認",
      "移動・突撃フェイズ：騎兵の機動効果を確認",
      "戦闘後：回復・再配置を確認"
    ]
  },
  "グルンドストック・トレイルブレイザー": {
    "summary": "弾薬・命令・再配置を管理します。",
    "counters": [
      [
        "ammo",
        "特殊弾薬／補給",
        0,
        6
      ]
    ],
    "toggles": [
      "特殊弾薬使用済み",
      "再配置能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：命令・装備選択を確認",
      "射撃フェイズ：特殊弾薬と射程を確認",
      "移動フェイズ：飛行・再配置を確認"
    ]
  },
  "スカイハンマー・タスクフォース": {
    "summary": "空挺配置、爆撃、使用済み能力を管理します。",
    "toggles": [
      "空挺ユニット配置済み",
      "爆撃能力使用済み",
      "一度きり能力使用済み"
    ],
    "textFields": [
      [
        "skyTarget",
        "爆撃／強襲対象"
      ]
    ],
    "reminders": [
      "移動フェイズ：空挺配置を確認",
      "通過移動時：爆撃能力を確認",
      "射撃・突撃：強襲ボーナスを確認"
    ]
  },
  "グリッタリング・ファランクス": {
    "summary": "現在の『戦争の相』と使用済み能力を管理します。",
    "selects": [
      [
        "facet",
        "現在の戦争の相",
        [
          "未選択",
          "相A",
          "相B",
          "相C"
        ]
      ]
    ],
    "toggles": [
      "今ラウンドの相を選択済み",
      "連隊アビリティ使用済み"
    ],
    "reminders": [
      "ラウンド開始時：使用する相を確認",
      "相の制限・対象を確認",
      "ヒーローフェイズ：魔法と強化を確認"
    ]
  },
  "ハラカン・ヴァンガード": {
    "summary": "風の姿勢、移動後能力、使用済み能力を管理します。",
    "selects": [
      [
        "windStance",
        "風の姿勢",
        [
          "未選択",
          "速度重視",
          "攻撃重視",
          "防御重視"
        ]
      ]
    ],
    "toggles": [
      "移動後能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "移動フェイズ：飛行・再配置を確認",
      "射撃後：追加移動の有無を確認",
      "突撃・戦闘：風の姿勢の効果を確認"
    ]
  },
  "ブボニック・セル": {
    "summary": "腐敗のサイクルと増援・回復を管理します。",
    "counters": [
      [
        "corruptionCycle",
        "腐敗サイクル",
        1,
        4
      ]
    ],
    "toggles": [
      "今ラウンドのサイクル処理済み",
      "増援配置済み",
      "回復／復帰処理済み"
    ],
    "reminders": [
      "ラウンド開始時：腐敗サイクルの段階を進める",
      "各段階の効果対象を確認",
      "ターン終了時：回復・復帰を確認"
    ]
  },
  "スラッシャー・ホスト": {
    "summary": "予備戦力、恐怖効果、使用済み能力を管理します。",
    "toggles": [
      "予備戦力配置済み",
      "恐怖能力使用済み",
      "一度きり能力使用済み"
    ],
    "textFields": [
      [
        "terrorTarget",
        "恐怖／標的ユニット"
      ]
    ],
    "reminders": [
      "移動フェイズ：予備配置を確認",
      "突撃後：恐怖・デバフを確認",
      "戦闘フェイズ：標的への追加効果を確認"
    ]
  },
  "カースド・シャックルホード": {
    "summary": "予備戦力の到着、恐怖対象、敵増援の半減状態を管理します。",
    "toggles": [
      "ブレイドガイスト到着済み",
      "ハリダン到着済み",
      "敵増援半減を付与済み"
    ],
    "textFields": [
      [
        "dreadTarget",
        "マウンティング・ドレッド対象"
      ]
    ],
    "reminders": [
      "第2ラウンド以降：予備から1ユニット配置を確認",
      "対象敵の確保力減少量＝現在ラウンド数",
      "敵増援が出る時：半減状態を確認"
    ]
  },
  "スクラップグラット": {
    "summary": "スクラップ／食料カウンターと強化対象を管理します。",
    "counters": [
      [
        "scrap",
        "スクラップ／食料",
        0,
        9
      ]
    ],
    "textFields": [
      [
        "scrapTarget",
        "強化対象ユニット"
      ]
    ],
    "toggles": [
      "連隊アビリティ使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "敵ユニット撃破時：資源獲得を確認",
      "ヒーローフェイズ：資源消費と強化を確認",
      "突撃・戦闘：モンスター能力を確認"
    ]
  },
  "タイラントの咆哮": {
    "summary": "咆哮対象、命令、使用済み能力を管理します。",
    "textFields": [
      [
        "bellowTarget",
        "咆哮／命令対象"
      ]
    ],
    "toggles": [
      "咆哮能力使用済み",
      "増援配置済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：タイラントの命令を確認",
      "突撃フェイズ：咆哮・衝撃効果を確認",
      "戦闘後：回復・食事効果を確認"
    ]
  },
  "アイアンジョウズ・ビッグモブ": {
    "summary": "勢い・突撃・一度きり能力を管理します。",
    "counters": [
      [
        "waaagh",
        "ウォー！／勢いカウンター",
        0,
        6
      ]
    ],
    "toggles": [
      "ウォー！使用済み",
      "連隊アビリティ使用済み",
      "増援配置済み"
    ],
    "reminders": [
      "移動フェイズ：追加移動・突進を確認",
      "突撃成功時：勢い関連効果を確認",
      "戦闘フェイズ：ウォー！の使用可否を確認"
    ]
  },
  "スワンプスカルカ・ギャング": {
    "summary": "罠、標的、奇襲能力を管理します。",
    "textFields": [
      [
        "swampTarget",
        "罠／奇襲の対象"
      ]
    ],
    "toggles": [
      "罠を設置済み",
      "奇襲能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "移動フェイズ：隠密・再配置を確認",
      "敵が目標へ近づいた時：罠を確認",
      "射撃・戦闘：毒／奇襲効果を確認"
    ]
  },
  "カヴァロス・ヴァンガード": {
    "summary": "命令ポイント、騎兵の突撃、復帰を管理します。",
    "counters": [
      [
        "discipline",
        "規律／命令ポイント",
        0,
        6
      ]
    ],
    "toggles": [
      "突撃強化使用済み",
      "モデル復帰処理済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：命令の獲得・消費を確認",
      "突撃フェイズ：騎兵の追加効果を確認",
      "ターン終了時：モデル復帰を確認"
    ]
  },
  "タイス・リーパー・エシュロン": {
    "summary": "徴収カウンター、標的、復帰を管理します。",
    "counters": [
      [
        "tithe",
        "タイス／徴収カウンター",
        0,
        9
      ]
    ],
    "textFields": [
      [
        "titheTarget",
        "徴収対象"
      ]
    ],
    "toggles": [
      "徴収能力使用済み",
      "モデル復帰処理済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "敵モデル撃破時：徴収獲得を確認",
      "ヒーローフェイズ：徴収消費を確認",
      "ターン終了時：復帰・回復を確認"
    ]
  },
  "モーティサン・エリート": {
    "summary": "規律ロールとフェイズごとの選択効果を管理します。",
    "counters": [
      [
        "disciplineRoll",
        "現在の規律ロール結果",
        0,
        6
      ]
    ],
    "selects": [
      [
        "disciplineEffect",
        "選択した規律効果",
        [
          "未選択",
          "効果A",
          "効果B",
          "効果C"
        ]
      ]
    ],
    "toggles": [
      "今フェイズの規律処理済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "指定タイミングで規律ロールを行う",
      "結果に応じた効果を選択",
      "同じフェイズ内の使用回数を確認"
    ]
  },
  "サンブラッデッド・プロウラー": {
    "summary": "獲物・待ち伏せ・使用済み能力を管理します。",
    "textFields": [
      [
        "sunTarget",
        "獲物／待ち伏せ対象"
      ]
    ],
    "toggles": [
      "待ち伏せ配置済み",
      "獲物能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "配置・移動フェイズ：待ち伏せを確認",
      "射撃・戦闘：獲物への効果を確認",
      "敵ヒーロー／モンスターへの特効を確認"
    ]
  },
  "スタースケイル・ウォーホスト": {
    "summary": "星の加護、怪獣強化、使用済み能力を管理します。",
    "selects": [
      [
        "starBlessing",
        "現在の星の加護",
        [
          "未選択",
          "加護A",
          "加護B",
          "加護C"
        ]
      ]
    ],
    "toggles": [
      "怪獣強化使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ラウンド開始時：星の加護を確認",
      "ヒーローフェイズ：魔法・強化を確認",
      "突撃・戦闘：モンスター能力を確認"
    ]
  },
  "ノーフィースト・クローパック": {
    "summary": "トンネル配置、予備戦力、使用済み能力を管理します。",
    "toggles": [
      "トンネル入口を配置済み",
      "予備ユニット配置済み",
      "一度きり能力使用済み"
    ],
    "textFields": [
      [
        "tunnelExit",
        "現在のトンネル出口／配置先"
      ]
    ],
    "reminders": [
      "配置時：トンネル関連処理を確認",
      "移動フェイズ：予備からの出現を確認",
      "壊滅時：増援対象を確認"
    ]
  },
  "クリクシットのキルパック": {
    "summary": "ボムラット・トークンと暗殺対象を管理します。",
    "counters": [
      [
        "bombRats",
        "残りボムラット",
        0,
        6
      ]
    ],
    "textFields": [
      [
        "assassinationTarget",
        "暗殺対象"
      ]
    ],
    "toggles": [
      "ヒーロー瞬間移動使用済み",
      "ナイトランナー退却判定済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "移動フェイズ：暗殺者の瞬間移動を確認",
      "ボムラット使用時：失敗ならトークン消失",
      "戦闘中の退却判定を確認"
    ]
  },
  "ダークオース・レイダー": {
    "summary": "誓い、達成状況、増援を管理します。",
    "textFields": [
      [
        "oath",
        "現在の誓い"
      ]
    ],
    "toggles": [
      "誓い達成済み",
      "誓いの報酬を適用済み",
      "増援配置済み"
    ],
    "reminders": [
      "ラウンド開始時：誓いを確認",
      "条件達成時：報酬を適用",
      "壊滅時：増援対象を確認"
    ]
  },
  "ブラッドウィンド・レギオン": {
    "summary": "各ユニットの『神々の眼』強化を記録します。",
    "textFields": [
      [
        "eyeHero",
        "ヒーローの強化"
      ],
      [
        "eyeUnit1",
        "ユニット1の強化"
      ],
      [
        "eyeUnit2",
        "ユニット2の強化"
      ]
    ],
    "toggles": [
      "今ラウンドの神々の眼処理済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "敵ユニット撃破時：神々の眼ロールを確認",
      "同じユニットに付いた強化を記録",
      "重複・継続条件を確認"
    ]
  },
  "ウォールスマッシャ・ストンプ": {
    "summary": "破壊対象、瓦礫／勢い、使用済み能力を管理します。",
    "counters": [
      [
        "smash",
        "破壊／勢いカウンター",
        0,
        6
      ]
    ],
    "textFields": [
      [
        "smashTarget",
        "破壊対象の地形／目標"
      ]
    ],
    "toggles": [
      "地形破壊能力使用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "移動・突撃：大型モデルの通過を確認",
      "地形／目標付近：破壊能力を確認",
      "ダメージ表・負傷状態を確認"
    ]
  },
  "ブラッドクレイヴ・ハント": {
    "summary": "ヴァルガイスト到着、スケルトン復帰、吸血回復を管理します。",
    "toggles": [
      "ヴァルガイスト到着済み",
      "スケルトン復帰ユニット配置済み",
      "今ターンのスケルトン復活処理済み",
      "吸血回復処理済み"
    ],
    "counters": [
      [
        "skeletonModels",
        "現在のスケルトンモデル数",
        0,
        20
      ]
    ],
    "reminders": [
      "第3ラウンド以降：ヴァルガイスト到着を確認",
      "壊滅したスケルトンの復帰条件を確認",
      "戦闘後：ヴァンパイアの回復を確認"
    ]
  },
  "デスラトル・トゥーム・ホスト": {
    "summary": "予備スケルトン、毎ターンの復活、オーラ対象を管理します。",
    "toggles": [
      "予備スケルトン配置済み",
      "今ターンのスケルトンD3復活済み",
      "バロウナイト1体復活済み"
    ],
    "textFields": [
      [
        "auraTarget",
        "古代のオーラ対象"
      ],
      [
        "deathmarchTarget",
        "デスマーチ対象"
      ]
    ],
    "reminders": [
      "各ターン：スケルトンとバロウナイトの復活を確認",
      "ヒーローフェイズ：オーラ対象を選択",
      "移動フェイズ：デスマーチの対象と効果を確認"
    ]
  },
  "イーンドラスタのスピアヘッド": {
    "summary": "予備戦力の到着と一度きり能力を管理します。",
    "toggles": [
      "イーンドラスタ配置済み",
      "予備ユニット配置済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "指定ラウンド：予備戦力の到着を確認",
      "ヒーローフェイズ：回復・復帰を確認",
      "突撃・戦闘：対モンスター効果を確認"
    ]
  },
  "ヴィジラント・ブラザーフッド": {
    "summary": "増援、命令、使用済み能力を管理します。",
    "toggles": [
      "増援第1ユニット配置済み",
      "増援第2ユニット配置済み",
      "一度きり能力使用済み"
    ],
    "textFields": [
      [
        "vigilantTarget",
        "命令／強化対象"
      ]
    ],
    "reminders": [
      "壊滅時：増援キーワードを確認",
      "ヒーローフェイズ：命令と強化を確認",
      "目標防衛時：防御効果を確認"
    ]
  },
  "スパイトウィング・フライト": {
    "summary": "獲物の指定とコード数を管理します。",
    "textFields": [
      [
        "spitePrey",
        "現在の獲物"
      ]
    ],
    "counters": [
      [
        "codeCount",
        "達成コード数",
        0,
        6
      ]
    ],
    "toggles": [
      "獲物指定済み",
      "コード報酬を適用済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ラウンド開始時：獲物を確認",
      "条件達成時：コード数を増やす",
      "コード数に応じた累積効果を確認"
    ]
  },
  "ビターバーク・コプス": {
    "summary": "森・樹皮強化、再配置、使用済み能力を管理します。",
    "textFields": [
      [
        "barkTarget",
        "樹皮強化／再配置対象"
      ]
    ],
    "toggles": [
      "再配置能力使用済み",
      "回復処理済み",
      "一度きり能力使用済み"
    ],
    "reminders": [
      "ヒーローフェイズ：回復・強化を確認",
      "移動フェイズ：森／地形を使う再配置を確認",
      "戦闘フェイズ：防御・反撃効果を確認"
    ]
  }
};

const steps = [
  {
    title: "ラウンド開始",
    owner: "先攻決定",
    description: "先攻・後攻を確認し、このラウンドで使用できる能力や予備戦力を確認します。",
    checks: ["先攻プレイヤーを確認", "ラウンド開始時能力を確認", "予備戦力・増援の解禁条件を確認"]
  },
  {
    title: "先攻：ヒーローフェイズ",
    owner: "first",
    description: "呪文、祈り、ヒーローフェイズ能力を処理します。",
    checks: ["ヒーローフェイズ開始時能力", "呪文・祈り", "軍固有能力・強化"]
  },
  {
    title: "先攻：移動フェイズ",
    owner: "first",
    description: "通常移動、全力移動、退却、予備戦力の配置を処理します。",
    checks: ["通常移動・全力移動・退却", "増援・予備戦力の配置", "移動後能力"]
  },
  {
    title: "先攻：射撃フェイズ",
    owner: "first",
    description: "射撃可能なユニットを確認し、射撃攻撃を解決します。",
    checks: ["射撃可能ユニットを確認", "対象と射線を確認", "射撃後能力"]
  },
  {
    title: "先攻：突撃フェイズ",
    owner: "first",
    description: "突撃可能なユニットを選び、突撃ロールと突撃後能力を処理します。",
    checks: ["突撃可能ユニットを確認", "突撃ロール", "突撃後能力"]
  },
  {
    title: "先攻：戦闘フェイズ",
    owner: "first",
    description: "先手・後手効果を確認し、交互にユニットを選んで戦闘します。",
    checks: ["先手・後手を確認", "交互に戦闘", "戦闘後・モデル復帰能力"]
  },
  {
    title: "先攻：ターン終了",
    owner: "first",
    description: "目標支配、得点、ターン終了時能力を確認します。",
    checks: ["目標支配を確認", "得点を加算", "ターン終了時能力"]
  },
  {
    title: "後攻：ヒーローフェイズ",
    owner: "second",
    description: "呪文、祈り、ヒーローフェイズ能力を処理します。",
    checks: ["ヒーローフェイズ開始時能力", "呪文・祈り", "軍固有能力・強化"]
  },
  {
    title: "後攻：移動フェイズ",
    owner: "second",
    description: "通常移動、全力移動、退却、予備戦力の配置を処理します。",
    checks: ["通常移動・全力移動・退却", "増援・予備戦力の配置", "移動後能力"]
  },
  {
    title: "後攻：射撃フェイズ",
    owner: "second",
    description: "射撃可能なユニットを確認し、射撃攻撃を解決します。",
    checks: ["射撃可能ユニットを確認", "対象と射線を確認", "射撃後能力"]
  },
  {
    title: "後攻：突撃フェイズ",
    owner: "second",
    description: "突撃可能なユニットを選び、突撃ロールと突撃後能力を処理します。",
    checks: ["突撃可能ユニットを確認", "突撃ロール", "突撃後能力"]
  },
  {
    title: "後攻：戦闘フェイズ",
    owner: "second",
    description: "先手・後手効果を確認し、交互にユニットを選んで戦闘します。",
    checks: ["先手・後手を確認", "交互に戦闘", "戦闘後・モデル復帰能力"]
  },
  {
    title: "後攻：ターン終了",
    owner: "second",
    description: "目標支配、得点、ターン終了時能力を確認します。",
    checks: ["目標支配を確認", "得点を加算", "ターン終了時能力"]
  },
  {
    title: "ラウンド終了",
    owner: "両者",
    description: "ラウンド終了時能力、得点、次ラウンドの優先権を確認します。",
    checks: ["ラウンド終了時能力", "バトルタクティクスと得点を確認", "次ラウンドの先攻を決定"]
  }
];

const defaultState = {
  started: false,
  round: 1,
  phaseIndex: 0,
  priority: "player",
  playerScore: 0,
  opponentScore: 0,
  playerName: "自分",
  opponentName: "相手",
  playerArmy: "未選択",
  opponentArmy: "未選択",
  battlepack: "Fire and Jade",
  desolationMode: false,
  desolationState: {
    playerPoints: 0,
    opponentPoints: 0,
    objective1: false,
    objective2: false,
    objective3: false
  },
  memo: "",
  roundChecks: {
    battleTactic: false,
    score: false,
    reinforcement: false
  },
  stepChecks: {},
  activeArmyTab: "player",
  armyState: {
    player: {},
    opponent: {}
  }
};

let state = loadState();

const $ = (id) => document.getElementById(id);

function populateArmies() {
  for (const select of [$("playerArmy"), $("opponentArmy")]) {
    select.innerHTML = "";
    armies.forEach((army) => {
      const option = document.createElement("option");
      option.value = army;
      option.textContent = army;
      select.appendChild(option);
    });
  }
}

function saveState() {
  localStorage.setItem("spearheadNaviState", JSON.stringify(state));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("spearheadNaviState"));
    if (!saved) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...saved,
      roundChecks: { ...defaultState.roundChecks, ...(saved.roundChecks || {}) },
      desolationState: { ...defaultState.desolationState, ...(saved.desolationState || {}) },
      armyState: {
        player: { ...(saved.armyState?.player || {}) },
        opponent: { ...(saved.armyState?.opponent || {}) }
      }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function resetState() {
  localStorage.removeItem("spearheadNaviState");
  state = structuredClone(defaultState);
  render();
}

function currentFirstSide() {
  return state.priority;
}

function currentSecondSide() {
  return state.priority === "player" ? "opponent" : "player";
}

function sideName(side) {
  return side === "player" ? state.playerName : state.opponentName;
}

function ownerForStep(step) {
  if (step.owner === "first") return currentFirstSide();
  if (step.owner === "second") return currentSecondSide();
  return null;
}


function getArmyState(side) {
  if (!state.armyState) state.armyState = { player: {}, opponent: {} };
  if (!state.armyState[side]) state.armyState[side] = {};
  return state.armyState[side];
}

function armyIncludes(side, keyword) {
  const army = side === "player" ? state.playerArmy : state.opponentArmy;
  return army.includes(keyword);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateArmyValue(side, key, delta, min = 0, max = 999) {
  const data = getArmyState(side);
  data[key] = clamp(Number(data[key] || 0) + delta, min, max);
  saveState();
  renderArmyTools();
  renderDesolationPanel();
}

function setArmyValue(side, key, value) {
  const data = getArmyState(side);
  data[key] = value;
  saveState();
  renderArmyTools();
}

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function prepareRoundArmyState() {
  for (const side of ["player", "opponent"]) {
    if (armyIncludes(side, "ルリッド・ドリーム")) {
      const data = getArmyState(side);
      data.temptationDice = 6;
      data.specialLog = `第${state.round}ラウンド開始：誘惑ダイスを6個に補充`;
    }
    if (armyIncludes(side, "サーガ・アックスバンド")) {
      const data = getArmyState(side);
      data.currentRune = "";
      data.runeEnhanced = false;
    }
  }
}

function renderCounter(container, side, key, value, min, max, label) {
  const wrap = document.createElement("div");
  wrap.className = "counter-row";
  wrap.innerHTML = `
    <button type="button" data-action="minus">−</button>
    <strong aria-label="${label}">${value}</strong>
    <button type="button" data-action="plus">＋</button>
  `;
  wrap.querySelector('[data-action="minus"]').addEventListener("click", () => updateArmyValue(side, key, -1, min, max));
  wrap.querySelector('[data-action="plus"]').addEventListener("click", () => updateArmyValue(side, key, 1, min, max));
  container.appendChild(wrap);
}


function findArmyProfile(army) {
  const key = Object.keys(armyProfiles).find(name => army.includes(name));
  return key ? armyProfiles[key] : null;
}

function renderGenericProfile(content, side, army, data, profile) {
  const subtitle = document.createElement("p");
  subtitle.className = "army-tool-subtitle";
  subtitle.textContent = profile.summary || "軍固有の確認項目を管理します。";
  content.appendChild(subtitle);

  const grid = document.createElement("div");
  grid.className = "generic-tracker-grid";

  (profile.counters || []).forEach(([key, label, min, max]) => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `<h3>${label}</h3><p>＋／−で現在値を記録します。</p>`;
    renderCounter(card, side, key, Number(data[key] ?? min), min, max, label);
    grid.appendChild(card);
  });

  if ((profile.textFields || []).length) {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = "<h3>対象・状態の記録</h3>";
    (profile.textFields || []).forEach(([key, label]) => {
      const field = document.createElement("div");
      field.className = "tracker-field";
      field.innerHTML = `<label>${label}</label><input type="text" value="${String(data[key] || "").replaceAll('"', '&quot;')}" placeholder="${label}">`;
      field.querySelector("input").addEventListener("input", e => {
        data[key] = e.target.value;
        saveState();
      });
      card.appendChild(field);
    });
    grid.appendChild(card);
  }

  if ((profile.selects || []).length) {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = "<h3>選択状態</h3>";
    (profile.selects || []).forEach(([key, label, options]) => {
      const field = document.createElement("div");
      field.className = "tracker-field";
      const labelEl = document.createElement("label");
      labelEl.textContent = label;
      const select = document.createElement("select");
      options.forEach(option => {
        const el = document.createElement("option");
        el.value = option;
        el.textContent = option;
        el.selected = (data[key] || options[0]) === option;
        select.appendChild(el);
      });
      select.addEventListener("change", e => setArmyValue(side, key, e.target.value));
      field.append(labelEl, select);
      card.appendChild(field);
    });
    grid.appendChild(card);
  }

  if ((profile.toggles || []).length) {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = "<h3>使用済み・完了</h3>";
    const list = document.createElement("div");
    list.className = "once-grid";
    (profile.toggles || []).forEach((label, index) => {
      const key = `toggle_${index}`;
      const row = document.createElement("label");
      row.className = "check-row";
      row.innerHTML = `<input type="checkbox" ${data[key] ? "checked" : ""}><span>${label}</span>`;
      row.querySelector("input").addEventListener("change", e => setArmyValue(side, key, e.target.checked));
      list.appendChild(row);
    });
    card.appendChild(list);
    grid.appendChild(card);
  }

  if ((profile.reminders || []).length) {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = "<h3>固有ルール確認</h3>";
    const list = document.createElement("ul");
    list.className = "reminder-list";
    const phaseTitle = steps[state.phaseIndex]?.title || "";
    (profile.reminders || []).forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      const phaseWords = ["ラウンド開始", "ヒーローフェイズ", "移動フェイズ", "射撃", "突撃", "戦闘", "ターン終了"];
      if (phaseWords.some(word => phaseTitle.includes(word) && text.includes(word))) {
        li.classList.add("phase-match");
      }
      list.appendChild(li);
    });
    card.appendChild(list);
    grid.appendChild(card);
  }

  content.appendChild(grid);

  const note = document.createElement("div");
  note.className = "profile-note";
  note.textContent = "この欄は対戦中の忘れ防止と状態記録用です。能力の正確な対象・距離・ダイス値は、最新のスピアヘッドPDFとルール更新を優先してください。";
  content.appendChild(note);
}

function renderArmyTools() {
  if (!state.started) return;

  const side = state.activeArmyTab || "player";
  const army = side === "player" ? state.playerArmy : state.opponentArmy;
  const data = getArmyState(side);
  const content = $("armyToolContent");

  $("armyTabPlayer").classList.toggle("active", side === "player");
  $("armyTabOpponent").classList.toggle("active", side === "opponent");
  content.innerHTML = "";

  const title = document.createElement("h3");
  title.className = "army-tool-title";
  title.textContent = army;
  content.appendChild(title);

  if (army === "未選択") {
    const p = document.createElement("p");
    p.className = "army-tool-subtitle";
    p.textContent = "スピアヘッドを選択すると、軍固有の管理機能が表示されます。";
    content.appendChild(p);
    return;
  }

  if (army.includes("ブリーク・ホスト")) {
    const subtitle = document.createElement("p");
    subtitle.className = "army-tool-subtitle";
    subtitle.textContent = "病ポイント、汚染目標、予備戦力を管理します。病ポイントはクリティカルヒットごとに1点、最大7点です。";
    content.appendChild(subtitle);

    const grid = document.createElement("div");
    grid.className = "tool-grid two-column";

    const disease = document.createElement("div");
    disease.className = "tool-card";
    disease.innerHTML = "<h3>病ポイント</h3><p>ナーグルの抱擁で、消費した各ポイントにつき戦闘中の敵を1回選び、5+で1致命的ダメージ。</p>";
    renderCounter(disease, side, "diseasePoints", Number(data.diseasePoints || 0), 0, 7, "病ポイント");
    grid.appendChild(disease);

    const reserves = document.createElement("div");
    reserves.className = "tool-card";
    reserves.innerHTML = "<h3>予備戦力</h3><p>第3ラウンド以降、プスゴイル・ブライトロード1体とプレイグベアラー1ユニットを配置可能。</p>";
    const reserveList = document.createElement("div");
    reserveList.className = "status-list";
    [
      ["blightlordArrived", "プスゴイル到着済み"],
      ["plaguebearersArrived", "プレイグベアラー到着済み"]
    ].forEach(([key, label]) => {
      const row = document.createElement("label");
      row.className = "check-row";
      row.innerHTML = `<input type="checkbox" ${data[key] ? "checked" : ""}><span>${label}</span>`;
      row.querySelector("input").addEventListener("change", e => setArmyValue(side, key, e.target.checked));
      reserveList.appendChild(row);
    });
    reserves.appendChild(reserveList);
    grid.appendChild(reserves);

    const objectives = document.createElement("div");
    objectives.className = "tool-card";
    objectives.innerHTML = "<h3>汚染された目標</h3><p>該当する目標を記録します。敵が支配すると解除されます。</p>";
    const objectiveGrid = document.createElement("div");
    objectiveGrid.className = "objective-grid";
    for (let i = 1; i <= 3; i++) {
      const key = `desecrated${i}`;
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" ${data[key] ? "checked" : ""}><span>目標${i}</span>`;
      label.querySelector("input").addEventListener("change", e => setArmyValue(side, key, e.target.checked));
      objectiveGrid.appendChild(label);
    }
    objectives.appendChild(objectiveGrid);
    grid.appendChild(objectives);

    const reminder = document.createElement("div");
    reminder.className = "tool-card";
    reminder.innerHTML = "<h3>フェイズの注意</h3><p>ヒーローフェイズ：プレイグベアラーへの強化を確認。</p><p>射撃フェイズ：疫病の息。</p><p>ターン終了時：プレイグベアラー1体復帰、病ポイント消費を確認。</p>";
    grid.appendChild(reminder);

    content.appendChild(grid);
    return;
  }

  if (army.includes("ルリッド・ドリーム")) {
    if (data.temptationDice === undefined) data.temptationDice = 6;
    if (data.depravityPoints === undefined) data.depravityPoints = 0;

    const subtitle = document.createElement("p");
    subtitle.className = "army-tool-subtitle";
    subtitle.textContent = "誘惑ダイスは各ラウンド開始時に6個。受諾なら堕落ポイント+D6、拒否なら対象へD3致命的ダメージです。";
    content.appendChild(subtitle);

    const grid = document.createElement("div");
    grid.className = "tool-grid two-column";

    const temptation = document.createElement("div");
    temptation.className = "tool-card";
    temptation.innerHTML = "<h3>誘惑ダイス</h3><p>同じ敵ユニットへは1フェイズに1回まで提示できます。</p>";
    renderCounter(temptation, side, "temptationDice", Number(data.temptationDice), 0, 6, "誘惑ダイス");
    const actions = document.createElement("div");
    actions.className = "quick-actions";
    const accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = "受諾：D6";
    accept.addEventListener("click", () => {
      if (Number(data.temptationDice || 0) <= 0) return;
      const roll = rollDice(6);
      data.temptationDice -= 1;
      data.depravityPoints = Number(data.depravityPoints || 0) + roll;
      data.specialLog = `誘惑を受諾：堕落ポイント +${roll}`;
      saveState();
      renderArmyTools();
    });
    const reject = document.createElement("button");
    reject.type = "button";
    reject.textContent = "拒否：D3";
    reject.addEventListener("click", () => {
      if (Number(data.temptationDice || 0) <= 0) return;
      const roll = rollDice(3);
      data.temptationDice -= 1;
      data.specialLog = `誘惑を拒否：対象へ ${roll} 致命的ダメージ`;
      saveState();
      renderArmyTools();
    });
    actions.append(accept, reject);
    temptation.appendChild(actions);
    grid.appendChild(temptation);

    const depravity = document.createElement("div");
    depravity.className = "tool-card";
    depravity.innerHTML = "<h3>堕落ポイント</h3><p>効果は累積します。</p>";
    renderCounter(depravity, side, "depravityPoints", Number(data.depravityPoints), 0, 99, "堕落ポイント");
    const statuses = document.createElement("div");
    statuses.className = "status-list";
    [
      [12, "12+：全力移動後に突撃可能"],
      [18, "18+：白兵武器がクリティカル（致命的）"],
      [24, "24+：加護5+"]
    ].forEach(([threshold, label]) => {
      const pill = document.createElement("div");
      pill.className = `status-pill ${Number(data.depravityPoints) >= threshold ? "active" : ""}`;
      pill.textContent = label;
      statuses.appendChild(pill);
    });
    depravity.appendChild(statuses);
    grid.appendChild(depravity);

    const log = document.createElement("div");
    log.className = "tool-card";
    log.innerHTML = "<h3>直近の処理</h3>";
    const logText = document.createElement("div");
    logText.className = "special-log";
    logText.textContent = data.specialLog || "まだ処理はありません。";
    log.appendChild(logText);
    grid.appendChild(log);

    const reset = document.createElement("div");
    reset.className = "tool-card";
    reset.innerHTML = "<h3>ラウンド操作</h3><p>ラウンド開始時は誘惑ダイス6個、ラウンド終了時に残りは失われます。</p>";
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "primary";
    resetBtn.textContent = "誘惑ダイスを6個にする";
    resetBtn.addEventListener("click", () => {
      data.temptationDice = 6;
      data.specialLog = "誘惑ダイスを6個に補充";
      saveState();
      renderArmyTools();
    });
    reset.appendChild(resetBtn);
    grid.appendChild(reset);

    content.appendChild(grid);
    return;
  }

  if (army.includes("ソウルレイド・ハント")) {
    const tideData = {
      1: ["干潮", "この軍を対象とする射撃攻撃のヒットロールに−1。"],
      2: ["満ち潮", "全力移動後でも、そのターン中に射撃・突撃が可能。"],
      3: ["高潮", "すべての味方ユニットが先手効果を得る。"],
      4: ["引き潮", "退却後でも、そのターン中に射撃・突撃が可能。"]
    };
    const [tideName, tideEffect] = tideData[state.round];

    const subtitle = document.createElement("p");
    subtitle.className = "army-tool-subtitle";
    subtitle.textContent = "現在のバトルラウンドに応じて「死の潮流」を自動表示します。";
    content.appendChild(subtitle);

    const grid = document.createElement("div");
    grid.className = "tool-grid two-column";

    const tide = document.createElement("div");
    tide.className = "tool-card";
    tide.innerHTML = `<h3>第${state.round}ラウンド：${tideName}</h3><p>${tideEffect}</p>`;
    grid.appendChild(tide);

    const reminders = document.createElement("div");
    reminders.className = "tool-card";
    reminders.innerHTML = "<h3>重要な確認</h3><p>ヒーローフェイズ：忍び寄る霧の儀式。</p><p>戦闘後：騎兵が戦闘した場合、ターン終了時にD3回復（各ターン軍全体で1回）。</p><p>アケリアン・アロペクスは増援対象。</p>";
    grid.appendChild(reminders);

    content.appendChild(grid);
    return;
  }

  if (army.includes("サーガ・アックスバンド")) {
    const subtitle = document.createElement("p");
    subtitle.className = "army-tool-subtitle";
    subtitle.textContent = "各ラウンドの自分のターン開始時に、未使用のウル＝ゴールド・ルーンを1つ選びます。6なら強化効果も適用。";
    content.appendChild(subtitle);

    const runes = [
      ["fury", "憤怒のルーン", "白兵攻撃のヒット+1。強化：白兵武器の攻撃回数+1。"],
      ["heat", "灼熱のルーン", "白兵武器の貫通+1。強化：白兵武器のダメージ+1。"],
      ["determination", "燃える決意のルーン", "加護5+。強化：セーヴ+1。"],
      ["zeal", "絶えざる熱意のルーン", "移動力+2インチ。強化：突撃ロール+2。"]
    ];
    if (!data.usedRunes) data.usedRunes = [];

    const grid = document.createElement("div");
    grid.className = "tool-grid two-column";

    const selector = document.createElement("div");
    selector.className = "tool-card";
    selector.innerHTML = "<h3>ルーン選択</h3>";
    const list = document.createElement("div");
    list.className = "rune-list";

    runes.forEach(([key, name, effect]) => {
      const used = data.usedRunes.includes(key);
      const selected = data.currentRune === key;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `rune-button ${used ? "used" : ""} ${selected ? "selected" : ""}`;
      btn.disabled = used && !selected;
      btn.innerHTML = `<strong>${name}</strong><small>${effect}</small>`;
      btn.addEventListener("click", () => {
        data.currentRune = key;
        data.runeEnhanced = false;
        saveState();
        renderArmyTools();
      });
      list.appendChild(btn);
    });
    selector.appendChild(list);
    grid.appendChild(selector);

    const activation = document.createElement("div");
    activation.className = "tool-card";
    const selectedRune = runes.find(r => r[0] === data.currentRune);
    activation.innerHTML = `<h3>発動結果</h3><p>${selectedRune ? selectedRune[1] : "ルーンを選んでください。"}</p>`;
    if (selectedRune) {
      const actions = document.createElement("div");
      actions.className = "quick-actions";
      const normal = document.createElement("button");
      normal.type = "button";
      normal.textContent = "1～5：通常";
      normal.addEventListener("click", () => {
        data.runeEnhanced = false;
        if (!data.usedRunes.includes(data.currentRune)) data.usedRunes.push(data.currentRune);
        data.specialLog = `${selectedRune[1]}：通常効果`;
        saveState();
        renderArmyTools();
      });
      const enhanced = document.createElement("button");
      enhanced.type = "button";
      enhanced.textContent = "6：強化";
      enhanced.addEventListener("click", () => {
        data.runeEnhanced = true;
        if (!data.usedRunes.includes(data.currentRune)) data.usedRunes.push(data.currentRune);
        data.specialLog = `${selectedRune[1]}：通常＋強化効果`;
        saveState();
        renderArmyTools();
      });
      actions.append(normal, enhanced);
      activation.appendChild(actions);
    }
    const log = document.createElement("div");
    log.className = "special-log";
    log.textContent = data.specialLog || "まだルーンは発動していません。";
    activation.appendChild(log);

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "ghost";
    clearBtn.style.marginTop = ".65rem";
    clearBtn.textContent = "ルーン使用状況をリセット";
    clearBtn.addEventListener("click", () => {
      data.usedRunes = [];
      data.currentRune = "";
      data.runeEnhanced = false;
      data.specialLog = "ルーン使用状況をリセット";
      saveState();
      renderArmyTools();
    });
    activation.appendChild(clearBtn);
    grid.appendChild(activation);

    content.appendChild(grid);
    return;
  }

  const profile = findArmyProfile(army);
  if (profile) {
    renderGenericProfile(content, side, army, data, profile);
    return;
  }

  const p = document.createElement("p");
  p.className = "army-tool-subtitle";
  p.textContent = "軍固有データを読み込めませんでした。新しい対戦を開始して軍を選び直してください。";
  content.appendChild(p);
}


function renderDesolationPanel() {
  const panel = $("desolationPanel");
  panel.classList.toggle("hidden", !state.desolationMode);
  if (!state.desolationMode) return;

  const d = state.desolationState;
  const playerBox = $("playerDesolationCounter");
  const opponentBox = $("opponentDesolationCounter");
  playerBox.innerHTML = "";
  opponentBox.innerHTML = "";

  const makeCounter = (container, key, label) => {
    const wrap = document.createElement("div");
    wrap.className = "counter-row";
    wrap.innerHTML = `
      <button type="button" data-action="minus">−</button>
      <strong>${Number(d[key] || 0)}</strong>
      <button type="button" data-action="plus">＋</button>
    `;
    wrap.querySelector('[data-action="minus"]').addEventListener("click", () => {
      d[key] = Math.max(0, Number(d[key] || 0) - 1);
      saveState();
      renderDesolationPanel();
    });
    wrap.querySelector('[data-action="plus"]').addEventListener("click", () => {
      d[key] = Number(d[key] || 0) + 1;
      saveState();
      renderDesolationPanel();
    });
    container.appendChild(wrap);
  };

  makeCounter(playerBox, "playerPoints", "自分の荒廃ポイント");
  makeCounter(opponentBox, "opponentPoints", "相手の荒廃ポイント");

  for (let i = 1; i <= 3; i++) {
    const el = $(`desolatedObjective${i}`);
    el.checked = Boolean(d[`objective${i}`]);
    el.onchange = event => {
      d[`objective${i}`] = event.target.checked;
      saveState();
    };
  }
}

function render() {
  $("setupScreen").classList.toggle("hidden", state.started);
  $("battleScreen").classList.toggle("hidden", !state.started);

  $("playerName").value = state.playerName;
  $("opponentName").value = state.opponentName;
  $("playerArmy").value = state.playerArmy;
  $("opponentArmy").value = state.opponentArmy;
  $("battlepack").value = state.battlepack;
  $("desolationMode").checked = Boolean(state.desolationMode);

  $("playerFirstBtn").classList.toggle("active", state.priority === "player");
  $("opponentFirstBtn").classList.toggle("active", state.priority === "opponent");

  if (!state.started) return;

  $("roundLabel").textContent = `${state.round} / 4`;
  $("prevRoundBtn").disabled = state.round === 1;
  $("nextRoundBtn").disabled = state.round === 4;

  $("playerTitle").textContent = state.playerName;
  $("opponentTitle").textContent = state.opponentName;
  $("playerArmyLabel").textContent = state.playerArmy;
  $("opponentArmyLabel").textContent = state.opponentArmy;
  $("playerScore").textContent = state.playerScore;
  $("opponentScore").textContent = state.opponentScore;
  $("priorityToggle").textContent = sideName(state.priority);

  const step = steps[state.phaseIndex];
  $("phaseTitle").textContent = step.title;
  $("phaseDescription").textContent = step.description;

  const owner = ownerForStep(step);
  $("turnOwnerBadge").textContent = owner ? `${sideName(owner)}の手番` : step.owner;

  $("prevPhaseBtn").disabled = state.phaseIndex === 0 && state.round === 1;
  $("nextPhaseBtn").textContent =
    state.round === 4 && state.phaseIndex === steps.length - 1 ? "対戦終了" : "次へ →";

  const checkKey = `${state.round}-${state.phaseIndex}`;
  const checks = state.stepChecks[checkKey] || [];
  $("phaseChecklist").innerHTML = "";

  step.checks.forEach((label, index) => {
    const row = document.createElement("label");
    row.className = "check-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(checks[index]);
    input.addEventListener("change", () => {
      const current = state.stepChecks[checkKey] || [];
      current[index] = input.checked;
      state.stepChecks[checkKey] = current;
      saveState();
    });

    const span = document.createElement("span");
    span.textContent = label;

    row.append(input, span);
    $("phaseChecklist").appendChild(row);
  });

  $("battleMemo").value = state.memo;
  $("battleTacticCheck").checked = state.roundChecks.battleTactic;
  $("scoreCheck").checked = state.roundChecks.score;
  $("reinforcementCheck").checked = state.roundChecks.reinforcement;
  renderArmyTools();
}

function startBattle() {
  state.playerName = $("playerName").value.trim() || "自分";
  state.opponentName = $("opponentName").value.trim() || "相手";
  state.playerArmy = $("playerArmy").value;
  state.opponentArmy = $("opponentArmy").value;
  state.battlepack = $("battlepack").value;
  state.desolationMode = $("desolationMode").checked;
  state.started = true;
  state.armyState = { player: {}, opponent: {} };
  prepareRoundArmyState();
  saveState();
  render();
}

function resetRoundChecks() {
  state.roundChecks = {
    battleTactic: false,
    score: false,
    reinforcement: false
  };
}

function movePhase(delta) {
  const next = state.phaseIndex + delta;

  if (next < 0) {
    if (state.round > 1) {
      state.round -= 1;
      state.phaseIndex = steps.length - 1;
      resetRoundChecks();
    }
  } else if (next >= steps.length) {
    if (state.round < 4) {
      state.round += 1;
      state.phaseIndex = 0;
      resetRoundChecks();
      prepareRoundArmyState();
    } else {
      alert(`対戦終了\n${state.playerName}: ${state.playerScore}点\n${state.opponentName}: ${state.opponentScore}点`);
    }
  } else {
    state.phaseIndex = next;
  }

  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeRound(delta) {
  const next = Math.min(4, Math.max(1, state.round + delta));
  if (next === state.round) return;
  state.round = next;
  state.phaseIndex = 0;
  resetRoundChecks();
  prepareRoundArmyState();
  saveState();
  render();
}

populateArmies();

$("playerFirstBtn").addEventListener("click", () => {
  state.priority = "player";
  render();
});

$("opponentFirstBtn").addEventListener("click", () => {
  state.priority = "opponent";
  render();
});

$("startBtn").addEventListener("click", startBattle);

$("priorityToggle").addEventListener("click", () => {
  state.priority = state.priority === "player" ? "opponent" : "player";
  saveState();
  render();
});

$("prevPhaseBtn").addEventListener("click", () => movePhase(-1));
$("nextPhaseBtn").addEventListener("click", () => movePhase(1));
$("prevRoundBtn").addEventListener("click", () => changeRound(-1));
$("nextRoundBtn").addEventListener("click", () => changeRound(1));

document.querySelectorAll("[data-score]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.score === "player" ? "playerScore" : "opponentScore";
    state[key] = Math.max(0, state[key] + Number(button.dataset.delta));
    saveState();
    render();
  });
});

$("battleMemo").addEventListener("input", (event) => {
  state.memo = event.target.value;
  saveState();
});

$("battleTacticCheck").addEventListener("change", (event) => {
  state.roundChecks.battleTactic = event.target.checked;
  saveState();
});

$("scoreCheck").addEventListener("change", (event) => {
  state.roundChecks.score = event.target.checked;
  saveState();
});

$("reinforcementCheck").addEventListener("change", (event) => {
  state.roundChecks.reinforcement = event.target.checked;
  saveState();
});

$("armyTabPlayer").addEventListener("click", () => {
  state.activeArmyTab = "player";
  saveState();
  renderArmyTools();
});

$("armyTabOpponent").addEventListener("click", () => {
  state.activeArmyTab = "opponent";
  saveState();
  renderArmyTools();
});

$("resetBtn").addEventListener("click", () => $("confirmDialog").showModal());

$("confirmDialog").addEventListener("close", () => {
  if ($("confirmDialog").returnValue === "confirm") resetState();
});

render();
