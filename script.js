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

  const p = document.createElement("p");
  p.className = "army-tool-subtitle";
  p.textContent = "この軍の専用カウンターは今後の更新で追加します。現在は対戦メモとフェイズチェックを利用してください。";
  content.appendChild(p);
}

function render() {
  $("setupScreen").classList.toggle("hidden", state.started);
  $("battleScreen").classList.toggle("hidden", !state.started);

  $("playerName").value = state.playerName;
  $("opponentName").value = state.opponentName;
  $("playerArmy").value = state.playerArmy;
  $("opponentArmy").value = state.opponentArmy;
  $("battlepack").value = state.battlepack;

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
  state.started = true;
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
