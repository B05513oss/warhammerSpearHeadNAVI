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
  stepChecks: {}
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
    return saved ? { ...defaultState, ...saved } : structuredClone(defaultState);
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

$("resetBtn").addEventListener("click", () => $("confirmDialog").showModal());

$("confirmDialog").addEventListener("close", () => {
  if ($("confirmDialog").returnValue === "confirm") resetState();
});

render();
