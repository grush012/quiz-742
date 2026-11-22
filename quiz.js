/* ============================================================
   Викторина гуля · патч 7.42
   Вопросы составлены по официальным патчноутам 7.42 (19.11.2026)
   ============================================================ */

(function () {
  "use strict";

  /* ── Вопросы ──────────────────────────────────────────── */

  var QUESTIONS = [
    {
      topic: "Механики",
      q: "Насколько Valve подняла базовое здоровье всех героев в 7.42?",
      options: [
        "Со 120 до 200",
        "Со 120 до 180",
        "Со 150 до 200",
        "Со 100 до 160"
      ],
      answer: 0,
      explain: "База выросла со 120 до 200 HP, а вот прирост здоровья за единицу силы срезали с 22 до 20. Итог: стартовый запас больше, а масштабирование от силы — слабее."
    },
    {
      topic: "Экономика",
      q: "Что случилось с пассивным золотом?",
      options: [
        "Теперь это фиксированные 90 золота в минуту",
        "Оно растёт на 5 золота каждую минуту",
        "Его убрали из игры совсем",
        "Оно выросло до 120 золота в минуту"
      ],
      answer: 0,
      explain: "Раньше пассивный доход увеличивался по ходу матча. Теперь он всегда 90 золота в минуту — никакого «разгона» экономики со временем."
    },
    {
      topic: "Карта",
      q: "Во сколько впервые появляется Терзатель?",
      options: [
        "В 15:00",
        "В 20:00",
        "В 10:00",
        "В 12:00"
      ],
      answer: 0,
      explain: "Первое появление сдвинули с 20:00 на 15:00. Заодно Unyielding Shield вырос с 3000 до 4000, а отражение упало с 35% до 15% и растёт на 5% за каждую смерть (максимум 30%)."
    },
    {
      topic: "Терзатель",
      q: "Что теперь всегда выпадает с Терзателя?",
      options: [
        "Greater Horn of Battle",
        "Aghanim's Shard",
        "Roshan's Banner",
        "Refresher Shard"
      ],
      answer: 0,
      explain: "С каждой смерти падает Greater Horn of Battle — рог, который призывает по волне мегакрипов на каждую линию. Со второй смерти дополнительно выпадает Aghanim's Shard."
    },
    {
      topic: "Нейтральные предметы",
      q: "Сколько разрядов осталось у нейтральных предметов?",
      options: [
        "4",
        "5",
        "6",
        "3"
      ],
      answer: 0,
      explain: "Разрядов стало 4 вместо 5: 0:00, 15:00, 30:00 и 50:00. А на предмет 4-го разряда теперь нужно 14 безумрудов вместо 10."
    },
    {
      topic: "Предметы",
      q: "Какой предмет Valve убрала из игры?",
      options: [
        "Javelin",
        "Quarterstaff",
        "Maelstrom",
        "Blood Grenade"
      ],
      answer: 0,
      explain: "Javelin удалён. Maelstrom и Monkey King Bar теперь собираются через рецепт и вернувшийся Quarterstaff, а не через копьё."
    },
    {
      topic: "Предметы",
      q: "Какой предмет вернулся в игру и сколько он стоит?",
      options: [
        "Quarterstaff, 900 золота",
        "Javelin, 900 золота",
        "Helm of the Overlord, 6000 золота",
        "Khanda, 5000 золота"
      ],
      answer: 0,
      explain: "Quarterstaff вернулся за 900 золота и даёт +10 к урону и +10 к скорости атаки. А Helm of the Overlord и Khanda, наоборот, удалены."
    },
    {
      topic: "Механики",
      q: "Что такое «действенность предметов» (item potency)?",
      options: [
        "Множитель эффектов предметов, накладываемых атаками",
        "Бонус к урону от предметов",
        "Шанс срабатывания предметов",
        "Скорость перезарядки предметов"
      ],
      answer: 0,
      explain: "Обычная атака — 100%, у иллюзий — 20%, у Swashbuckle Pangolier — 60%. Поэтому Desolator снимает 7,2 брони, а через Swashbuckle — только 3,6."
    },
    {
      topic: "Рошан",
      q: "Как изменилось возрождение Рошана?",
      options: [
        "Уменьшается на минуту за каждое убийство (минимум 5 минут)",
        "Увеличилось до 11 минут",
        "Не изменилось",
        "Зависит от количества героев на карте"
      ],
      answer: 0,
      explain: "Базовое время возрождения теперь снижается на минуту с каждым убийством, но не опускается ниже 5 минут. Плюс у таймера появилась подсказка с владельцем Эгиды."
    },
    {
      topic: "Нейтралы",
      q: "Какой новый крип появился в среднем лагере Сил Света?",
      options: [
        "Чайкосветица",
        "Морж-морозник",
        "Эймеркрот-бригадир",
        "Древний морской слогр"
      ],
      answer: 0,
      explain: "Чайкосветица (Radigull) откладывает два взрывных яйца с сайленсом. Моржи — новый лагерь Тьмы, эймеркроты — крупный лагерь Света, а морские слогры — новый древний лагерь."
    },
    {
      topic: "Руны",
      q: "Что теперь даёт руна невидимости?",
      options: [
        "Маскировку, как у Smoke of Deceit, но без бонуса к скорости",
        "Просто невидимость, как раньше",
        "Скорость передвижения +30%",
        "Снятие всех дебаффов"
      ],
      answer: 0,
      explain: "Эффект маскировки включается через 2 секунды после активации и работает как дым: защищает от раскрытия невидимости, если не подходить к вражеским героям и постройкам. Скорости не даёт."
    },
    {
      topic: "Постройки",
      q: "Что изменилось у «Укрепления построек» (Fortify)?",
      options: [
        "2 заряда, восстановление 6 минут, интервал 7 секунд",
        "1 заряд, восстановление 5 минут",
        "3 заряда, восстановление 8 минут",
        "Ничего, только перезарядка больше не сбрасывается"
      ],
      answer: 0,
      explain: "Теперь у Fortify 2 заряда, каждый восстанавливается 6 минут, а применять их можно с интервалом 7 секунд. Перезарядка больше не сбрасывается при разрушении построек."
    }
  ];

  var TIME_PER_QUESTION = 20;

  var RANKS = [
    { min: 12, title: "Пожиратель душ", text: "Ты прочитал патчноут целиком и выжил. Гули уважают, склеп гордится." },
    { min: 10, title: "Повелитель склепа", text: "Почти идеально. Пара могил осталась непроверенной — но 7.42 ты знаешь." },
    { min: 7, title: "Могильщик", text: "Крепко. Но некоторые изменения прошли мимо тебя, как крипы мимо башни." },
    { min: 4, title: "Гуль-стажёр", text: "Ты уже не в яме, но патчноут всё ещё страшнее тебя. Перечитай и возвращайся." },
    { min: 0, title: "Свежий труп", text: "Ничего, земля ещё мягкая. Откопай патчноут 7.42 и попробуй снова." }
  ];

  var LETTERS = ["А", "Б", "В", "Г"];

  /* ── Состояние ────────────────────────────────────────── */

  var state = {
    index: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    locked: true,
    timerId: null,
    timeLeft: TIME_PER_QUESTION,
    soundOn: true
  };

  var audioCtx = null;

  /* ── DOM ──────────────────────────────────────────────── */

  var el = {
    screens: {
      start: document.getElementById("screen-start"),
      quiz: document.getElementById("screen-quiz"),
      result: document.getElementById("screen-result")
    },
    qNum: document.getElementById("q-num"),
    qTotal: document.getElementById("q-total"),
    score: document.getElementById("hud-score"),
    streak: document.getElementById("hud-streak"),
    topic: document.getElementById("topic"),
    question: document.getElementById("question"),
    answers: document.getElementById("answers"),
    feedback: document.getElementById("feedback"),
    verdict: document.getElementById("verdict"),
    explain: document.getElementById("explain"),
    next: document.getElementById("btn-next"),
    bar: document.getElementById("bar-fill"),
    timer: document.getElementById("timer"),
    timerFill: document.getElementById("timer-fill"),
    timerNum: document.getElementById("timer-num"),
    best: document.getElementById("best-score"),
    finalScore: document.getElementById("final-score"),
    finalTotal: document.getElementById("final-total"),
    finalStreak: document.getElementById("final-streak"),
    rank: document.getElementById("rank"),
    rankText: document.getElementById("rank-text"),
    sound: document.getElementById("btn-sound"),
    embers: document.getElementById("embers")
  };

  /* ── Звук ─────────────────────────────────────────────── */

  function ensureAudio() {
    if (audioCtx) return;
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    try { audioCtx = new Ctx(); } catch (e) { audioCtx = null; }
  }

  function tone(freq, duration, type, gain, delay) {
    if (!state.soundOn || !audioCtx) return;
    try {
      var t0 = audioCtx.currentTime + (delay || 0);
      var osc = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      osc.type = type || "sine";
      osc.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain || 0.06, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + duration + 0.02);
    } catch (e) { /* звук — не критично */ }
  }

  function sfxCorrect() {
    tone(523.25, 0.12, "triangle", 0.07, 0);
    tone(783.99, 0.18, "triangle", 0.06, 0.1);
  }
  function sfxWrong() {
    tone(146.83, 0.22, "sawtooth", 0.05, 0);
    tone(110, 0.3, "sawtooth", 0.04, 0.08);
  }
  function sfxClick() { tone(330, 0.05, "square", 0.03, 0); }

  /* ── Утилиты ──────────────────────────────────────────── */

  function showScreen(name) {
    Object.keys(el.screens).forEach(function (key) {
      el.screens[key].classList.toggle("is-active", key === name);
    });
  }

  function loadBest() {
    try {
      var raw = localStorage.getItem("quiz742.best");
      return raw === null ? null : parseInt(raw, 10);
    } catch (e) { return null; }
  }

  function saveBest(value) {
    try { localStorage.setItem("quiz742.best", String(value)); } catch (e) { /* приватный режим */ }
  }

  function renderBest() {
    var best = loadBest();
    el.best.textContent = best === null ? "—" : best + " / " + QUESTIONS.length;
  }

  function shuffle(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  /* ── Угли ─────────────────────────────────────────────── */

  function spawnEmbers() {
    if (!el.embers) return;
    var count = window.innerWidth < 620 ? 12 : 22;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.className = "ember";
      var size = (Math.random() * 2.4 + 1.6).toFixed(1);
      s.style.left = (Math.random() * 100).toFixed(1) + "%";
      s.style.setProperty("--s", size + "px");
      s.style.setProperty("--d", (9 + Math.random() * 10).toFixed(1) + "s");
      s.style.setProperty("--delay", (-Math.random() * 12).toFixed(1) + "s");
      s.style.setProperty("--dx", ((Math.random() - 0.5) * 90).toFixed(0) + "px");
      frag.appendChild(s);
    }
    el.embers.appendChild(frag);
  }

  /* ── Игра ─────────────────────────────────────────────── */

  function startGame() {
    ensureAudio();
    state.index = 0;
    state.score = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.locked = true;
    el.score.textContent = "0";
    el.streak.textContent = "0";
    el.qTotal.textContent = String(QUESTIONS.length);
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var item = QUESTIONS[state.index];

    state.locked = false;
    state.timeLeft = TIME_PER_QUESTION;

    el.qNum.textContent = String(state.index + 1);
    el.topic.textContent = item.topic;
    el.question.textContent = item.q;

    el.feedback.hidden = true;
    el.verdict.textContent = "";
    el.explain.textContent = "";
    el.verdict.className = "verdict";

    el.bar.style.width = ((state.index / QUESTIONS.length) * 100).toFixed(1) + "%";

    // Варианты перемешиваем, чтобы нельзя было запомнить позиции
    var variants = item.options.map(function (text, i) {
      return { text: text, correct: i === item.answer };
    });

    el.answers.textContent = "";
    shuffle(variants).forEach(function (variant, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.dataset.correct = variant.correct ? "1" : "0";

      var key = document.createElement("span");
      key.className = "answer-key";
      key.textContent = LETTERS[i];

      var label = document.createElement("span");
      label.className = "answer-label";
      label.textContent = variant.text;

      btn.appendChild(key);
      btn.appendChild(label);
      btn.addEventListener("click", function () { pickAnswer(btn); });

      el.answers.appendChild(btn);
    });

    startTimer();
  }

  function startTimer() {
    stopTimer();
    var total = TIME_PER_QUESTION;
    var tickMs = 100;

    el.timer.classList.remove("is-low");
    el.timerNum.textContent = String(total);
    el.timerFill.style.transform = "scaleX(1)";

    state.timerId = window.setInterval(function () {
      state.timeLeft -= tickMs / 1000;
      if (state.timeLeft <= 0) {
        state.timeLeft = 0;
        renderTimer(0, total);
        stopTimer();
        pickAnswer(null);
        return;
      }
      renderTimer(state.timeLeft, total);
    }, tickMs);
  }

  function renderTimer(left, total) {
    var ratio = Math.max(0, left / total);
    el.timerFill.style.transform = "scaleX(" + ratio.toFixed(3) + ")";
    el.timerNum.textContent = String(Math.ceil(left));
    el.timer.classList.toggle("is-low", left <= 5.05);
  }

  function stopTimer() {
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function pickAnswer(clicked) {
    if (state.locked) return;
    state.locked = true;
    stopTimer();

    var item = QUESTIONS[state.index];
    var buttons = Array.prototype.slice.call(el.answers.querySelectorAll(".answer"));
    var isCorrect = clicked !== null && clicked.dataset.correct === "1";

    buttons.forEach(function (btn) {
      btn.disabled = true;
      if (btn.dataset.correct === "1") {
        btn.classList.add("is-correct");
      } else if (btn === clicked) {
        btn.classList.add("is-wrong");
      } else {
        btn.classList.add("is-dim");
      }
    });

    if (isCorrect) {
      state.score += 1;
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      el.verdict.textContent = "Верно. Гуль одобряет.";
      el.verdict.className = "verdict is-good";
      sfxCorrect();
    } else {
      state.streak = 0;
      if (clicked === null) {
        el.verdict.textContent = "Время вышло — твой череп треснул.";
      } else {
        el.verdict.textContent = "Мимо. " + (item.options[item.answer] ? "Правильный ответ — «" + item.options[item.answer] + "»." : "");
      }
      el.verdict.className = "verdict is-bad";
      sfxWrong();
    }

    el.score.textContent = String(state.score);
    el.streak.textContent = String(state.streak);
    el.explain.textContent = item.explain;
    el.feedback.hidden = false;
    el.bar.style.width = (((state.index + 1) / QUESTIONS.length) * 100).toFixed(1) + "%";

    window.setTimeout(function () { el.next.focus(); }, 60);
  }

  function nextQuestion() {
    sfxClick();
    state.index += 1;
    if (state.index >= QUESTIONS.length) {
      finishGame();
      return;
    }
    renderQuestion();
  }

  function finishGame() {
    showScreen("result");

    var score = state.score;
    var total = QUESTIONS.length;
    var rank = RANKS[RANKS.length - 1];

    for (var i = 0; i < RANKS.length; i++) {
      if (score >= RANKS[i].min) { rank = RANKS[i]; break; }
    }

    el.finalScore.textContent = String(score);
    el.finalTotal.textContent = String(total);
    el.finalStreak.textContent = String(state.bestStreak);
    el.rank.textContent = rank.title;
    el.rankText.textContent = rank.text;

    var best = loadBest();
    if (best === null || score > best) {
      saveBest(score);
      renderBest();
    }
  }

  /* ── Управление ───────────────────────────────────────── */

  el.next.addEventListener("click", nextQuestion);

  document.getElementById("btn-start").addEventListener("click", function () {
    sfxClick();
    startGame();
  });

  document.getElementById("btn-restart").addEventListener("click", function () {
    startGame();
  });

  document.getElementById("btn-home").addEventListener("click", function () {
    sfxClick();
    showScreen("start");
    renderBest();
  });

  el.sound.addEventListener("click", function () {
    state.soundOn = !state.soundOn;
    el.sound.setAttribute("aria-pressed", String(state.soundOn));
    el.sound.setAttribute("aria-label", state.soundOn ? "Выключить звук" : "Включить звук");
    if (state.soundOn) { ensureAudio(); sfxClick(); }
  });

  document.addEventListener("keydown", function (event) {
    if (!el.screens.quiz.classList.contains("is-active")) return;

    if (!el.feedback.hidden) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        nextQuestion();
      }
      return;
    }

    var digit = parseInt(event.key, 10);
    if (digit >= 1 && digit <= 4) {
      var btn = el.answers.children[digit - 1];
      if (btn) btn.click();
    }
  });

  /* ── Инициализация ────────────────────────────────────── */

  spawnEmbers();
  renderBest();

  // Видео-кот: автоплей может блокироваться, поэтому пробуем ещё и по первому касанию
  var bgVideo = document.querySelector(".cat-video-media");
  if (bgVideo) {
    var tryPlay = function () {
      if (bgVideo.paused) {
        var p = bgVideo.play();
        if (p && typeof p.catch === "function") p.catch(function () {});
      }
    };
    tryPlay();
    document.addEventListener("pointerdown", tryPlay, { once: true });
    document.addEventListener("keydown", tryPlay, { once: true });
  }

  // Быстрый вход в игру: quiz-742/index.html#quiz
  if (window.location.hash === "#quiz") {
    startGame();
  }
})();
