/* All 35 categories from Категории.docx — single source for sketch pages. */
(function (global) {
  var img = {
    sbRental: "assets/gear/snowboard-rental.jpg",
    sbStandard: "assets/gear/snowboard-standard.jpg",
    sbAll: "assets/gear/snowboard-allmountain.jpg",
    sbFree: "assets/gear/snowboard-freeride.jpg",
    skiRental: "assets/gear/skis-rental.jpg",
    skiStandard: "assets/gear/skis-standard.jpg",
    skiAll: "assets/gear/skis-allmountain.jpg",
    skiFree: "assets/gear/skis-freeride.jpg",
    boots: "assets/gear/boots.jpg",
    jacket: "assets/gear/jacket.jpg",
    helmet: "assets/gear/helmet.jpg",
    goggles: "assets/gear/goggles.jpg",
    gloves: "assets/gear/gloves.jpg",
    poles: "assets/gear/skis-standard.jpg",
    pants: "assets/gear/jacket.jpg",
    suit: "assets/gear/jacket.jpg",
    shorts: "assets/gear/helmet.jpg",
    back: "assets/gear/helmet.jpg",
    elbow: "assets/gear/gloves.jpg",
    knee: "assets/gear/gloves.jpg",
    wrist: "assets/gear/goggles.jpg",
    bagSb: "assets/gear/snowboard-standard.jpg",
    bagSki: "assets/gear/skis-allmountain.jpg",
    bagBoot: "assets/gear/boots.jpg"
  };

  /* id, title, group, blurb, priceFrom (BYN/day example), photo, level, sizeLabel, use, age, kit, sizesCsv */
  var items = [
    ["sb-rental", "Сноуборды Rental", "snowboards", "Мягкая доска для первых спусков.", "58", img.sbRental, "Начинающий", "145–160 см", "Трасса, обучение", "Взрослые", "Доска и крепления", "145,150,155,160"],
    ["sb-standard", "Сноуборды Standard", "snowboards", "На подготовленную трассу.", "74", img.sbStandard, "Любитель", "150–162 см", "Подготовленная трасса", "Взрослые", "Доска и крепления", "150,154,158,162"],
    ["sb-allmountain", "Сноуборды All Mountain", "snowboards", "Трасса и снег рядом с ней.", "86", img.sbAll, "Любитель", "152–164 см", "Трасса и рельеф", "Взрослые", "Доска и крепления", "152,156,159,164"],
    ["sb-freeride", "Сноуборды Freeride", "snowboards", "Длиннее, для глубокого снега.", "98", img.sbFree, "Опытный", "156–168 см", "Глубокий снег", "Взрослые", "Доска и крепления", "156,160,162,168"],
    ["sb-kids", "Сноуборд детский", "snowboards", "Короче и легче, для детей.", "42", img.sbRental, "Начинающий", "110–140 см", "Учебный склон", "Дети", "Доска и крепления", "110,120,130,140"],

    ["boot-rental", "Ботинки Rental", "sb-boots", "Мягкие прокатные ботинки.", "22", img.boots, "Начинающий", "36–45", "Под прокат", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["boot-standard", "Ботинки Standard", "sb-boots", "Жёстче, для уверенной трассы.", "28", img.boots, "Любитель", "36–45", "Трасса", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["boot-speedzone", "Ботинки SpeedZone", "sb-boots", "Быстрая застёжка SpeedZone.", "34", img.boots, "Любитель", "36–45", "Трасса", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["boot-boa", "Ботинки Boa", "sb-boots", "Система Boa, точная подгонка.", "36", img.boots, "Любитель", "36–45", "Трасса", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["boot-2boa", "Ботинки 2Boa", "sb-boots", "Два диска Boa.", "40", img.boots, "Любитель", "36–45", "Трасса и парк", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["boot-kids", "Ботинки детские", "sb-boots", "Детские размеры под доску.", "18", img.boots, "Начинающий", "28–36", "Обучение", "Дети", "Пара ботинок", "30,32,34,36"],

    ["ski-rental", "Горные лыжи Rental", "skis", "Короче и мягче, для учёбы.", "54", img.skiRental, "Начинающий", "150–170 см", "Учебный склон", "Взрослые", "Лыжи и крепления", "150,160,170"],
    ["ski-standard", "Горные лыжи Standard", "skis", "Спокойная подготовленная трасса.", "70", img.skiStandard, "Любитель", "155–175 см", "Подготовленная трасса", "Взрослые", "Лыжи и крепления", "155,165,175"],
    ["ski-allmountain", "Горные лыжи All Mountain", "skis", "Трасса и разбитый снег.", "84", img.skiAll, "Любитель", "160–180 см", "Трасса и рельеф", "Взрослые", "Лыжи и крепления", "160,170,180"],
    ["ski-freeride", "Горные лыжи Freeride", "skis", "Шире, когда снег глубокий.", "96", img.skiFree, "Опытный", "170–186 см", "Вне трассы", "Взрослые", "Лыжи и крепления", "170,178,186"],
    ["ski-kids", "Горные лыжи детские", "skis", "Детская длина и мягкость.", "40", img.skiRental, "Начинающий", "90–140 см", "Учебный склон", "Дети", "Лыжи и крепления", "90,110,130,140"],

    ["ski-boot-rental", "Горнолыжные ботинки Rental", "ski-boots", "Мягкие прокатные ботинки.", "24", img.boots, "Начинающий", "36–46", "Обучение", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["ski-boot-standard", "Горнолыжные ботинки Standard", "ski-boots", "Средняя жёсткость на трассу.", "30", img.boots, "Любитель", "36–46", "Трасса", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["ski-boot-hard", "Горнолыжные ботинки Hard", "ski-boots", "Жёсткая колодка для опытных.", "38", img.boots, "Опытный", "36–46", "Трасса", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["ski-boot", "Горнолыжные ботинки", "ski-boots", "Базовая горнолыжная пара.", "32", img.boots, "Любитель", "36–46", "Трасса", "Взрослые", "Пара ботинок", "38,40,42,44"],
    ["ski-poles", "Горнолыжные палки", "ski-boots", "Палки под рост.", "6", img.poles, "Любой", "110–135 см", "Трасса", "Взрослые / дети", "Пара палок", "110,120,125,135"],

    ["jacket", "Куртка для зимнего отдыха", "clothes", "Куртка на день на склоне.", "25", img.jacket, "Любой", "S–XL", "Зимний отдых", "Взрослые", "Куртка", "S,M,L,XL"],
    ["pants", "Горнолыжные штаны", "clothes", "Штаны под куртку.", "20", img.pants, "Любой", "S–XL", "Склон", "Взрослые", "Штаны", "S,M,L,XL"],
    ["suit", "Горнолыжный комбинезон", "clothes", "Цельный комбинезон.", "35", img.suit, "Любой", "S–XL", "Склон", "Взрослые", "Комбинезон", "S,M,L,XL"],

    ["helmet", "Горнолыжный шлем", "protect", "Шлем размеров S–L.", "12", img.helmet, "Любой", "S–L", "Склон", "Взрослые / дети", "Шлем", "S,M,L"],
    ["goggles", "Лыжная маска", "protect", "Тёмная линза на ясный день.", "10", img.goggles, "Любой", "Один размер", "Склон", "Взрослые / дети", "Маска", "Универсальный"],
    ["gloves", "Горнолыжные перчатки", "protect", "Тёплые, на полный день.", "8", img.gloves, "Любой", "S–L", "Склон", "Взрослые / дети", "Пара перчаток", "S,M,L"],
    ["shorts", "Защитные шорты", "protect", "Защита таза и бёдер.", "10", img.shorts, "Любой", "S–L", "Парк и трасса", "Взрослые", "Шорты", "S,M,L"],
    ["back", "Защита для спины", "protect", "Жилет / панцирь на спину.", "12", img.back, "Любой", "S–L", "Склон", "Взрослые", "Защита спины", "S,M,L"],
    ["elbow", "Налокотники", "protect", "Пара налокотников.", "6", img.elbow, "Любой", "S–L", "Парк", "Взрослые / дети", "Пара", "S,M,L"],
    ["knee", "Наколенники", "protect", "Пара наколенников.", "6", img.knee, "Любой", "S–L", "Парк", "Взрослые / дети", "Пара", "S,M,L"],
    ["wrist", "Защита для запястий", "protect", "Защита запястий.", "5", img.wrist, "Любой", "S–L", "Сноуборд", "Взрослые / дети", "Пара", "S,M,L"],

    ["bag-sb", "Чехол для сноуборда", "bags", "Чехол под доску.", "8", img.bagSb, "Любой", "Под длину доски", "Перевозка", "Все", "Чехол", "Универсальный"],
    ["bag-ski", "Чехол для горных лыж", "bags", "Чехол под пару лыж.", "8", img.bagSki, "Любой", "Под длину лыж", "Перевозка", "Все", "Чехол", "Универсальный"],
    ["bag-boots", "Чехол для ботинок", "bags", "Сумка / чехол для ботинок.", "5", img.bagBoot, "Любой", "Один размер", "Перевозка", "Все", "Чехол", "Универсальный"]
  ];

  var groups = [
    { id: "snowboards", title: "Сноуборды", note: "Пять классов из файла категорий, включая детский." },
    { id: "sb-boots", title: "Сноубордические ботинки", note: "Шесть позиций: Rental → 2Boa и детские." },
    { id: "skis", title: "Горные лыжи", note: "Пять классов, включая детские." },
    { id: "ski-boots", title: "Горнолыжные ботинки и комплектующие", note: "Ботинки Rental / Standard / Hard, ботинки и палки." },
    { id: "clothes", title: "Одежда", note: "Куртка, штаны, комбинезон." },
    { id: "protect", title: "Защита и аксессуары", note: "Шлем, маска, перчатки и защита тела." },
    { id: "bags", title: "Чехлы", note: "Для сноуборда, лыж и ботинок." }
  ];

  /* Blocks for page: 4 photo cards + 4 archive rows in 2 columns (direction-3 pattern) */
  var sections = [
    {
      id: "snowboards",
      title: "Сноуборды",
      note: "4 класса в ряду",
      cards: ["sb-rental", "sb-standard", "sb-allmountain", "sb-freeride"],
      rows: ["boot-rental", "boot-standard", "boot-speedzone", "boot-boa"]
    },
    {
      id: "skis",
      title: "Горные лыжи",
      note: "4 класса в ряду",
      cards: ["ski-rental", "ski-standard", "ski-allmountain", "ski-freeride"],
      rows: ["ski-boot-rental", "ski-boot-standard", "ski-boot-hard", "ski-poles"]
    },
    {
      id: "clothes",
      title: "Одежда",
      note: "4 класса в ряду",
      cards: ["jacket", "pants", "suit", "gloves"],
      rows: ["helmet", "goggles", "shorts", "back"]
    },
    {
      id: "kids",
      title: "Детское и чехлы",
      note: "4 класса в ряду",
      cards: ["sb-kids", "ski-kids", "boot-kids", "boot-2boa"],
      rows: ["ski-boot", "bag-sb", "bag-ski", "bag-boots"]
    },
    {
      id: "protect",
      title: "Защита",
      note: "3 позиции",
      cards: ["elbow", "knee", "wrist"],
      rows: []
    }
  ];

  var byId = {};
  items.forEach(function (row) {
    byId[row[0]] = {
      id: row[0],
      title: row[1],
      group: row[2],
      blurb: row[3],
      price: row[4],
      photo: row[5],
      level: row[6],
      size: row[7],
      use: row[8],
      age: row[9],
      kit: row[10],
      sizes: row[11]
    };
  });

  /* Legacy aliases used by older links on the sketch */
  var aliases = {
    rental: "sb-rental",
    standard: "sb-standard",
    allmountain: "sb-allmountain",
    freeride: "sb-freeride",
    boots: "boot-rental"
  };

  function resolveId(id) {
    if (!id) return "sb-rental";
    if (byId[id]) return id;
    if (aliases[id]) return aliases[id];
    return "sb-rental";
  }

  function productHref(id) {
    return "product.html?id=" + encodeURIComponent(id);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cardLabel(item) {
    var t = item.title;
    var map = {
      "Сноуборды Rental": "Rental",
      "Сноуборды Standard": "Standard",
      "Сноуборды All Mountain": "All Mountain",
      "Сноуборды Freeride": "Freeride",
      "Сноуборд детский": "Детский",
      "Ботинки Rental": "Ботинки Rental",
      "Ботинки Standard": "Ботинки Standard",
      "Ботинки SpeedZone": "SpeedZone",
      "Ботинки Boa": "Boa / 2Boa",
      "Ботинки 2Boa": "2Boa",
      "Ботинки детские": "Детские",
      "Горные лыжи Rental": "Rental",
      "Горные лыжи Standard": "Standard",
      "Горные лыжи All Mountain": "All Mountain",
      "Горные лыжи Freeride": "Freeride",
      "Горные лыжи детские": "Детские",
      "Горнолыжные ботинки Rental": "Ботинки Rental",
      "Горнолыжные ботинки Standard": "Ботинки Standard",
      "Горнолыжные ботинки Hard": "Ботинки Hard",
      "Горнолыжные ботинки": "Ботинки",
      "Горнолыжные палки": "Палки",
      "Куртка для зимнего отдыха": "Куртка",
      "Горнолыжные штаны": "Штаны",
      "Горнолыжный комбинезон": "Комбинезон",
      "Горнолыжный шлем": "Шлем",
      "Лыжная маска": "Маска",
      "Горнолыжные перчатки": "Перчатки",
      "Защитные шорты": "Шорты",
      "Защита для спины": "Спина",
      "Налокотники": "Налокотники",
      "Наколенники": "Наколенники",
      "Защита для запястий": "Запястья",
      "Чехол для сноуборда": "Сноуборд",
      "Чехол для горных лыж": "Лыжи",
      "Чехол для ботинок": "Ботинки"
    };
    return map[t] || t;
  }

  function countLabel(n) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    var word =
      mod10 === 1 && mod100 !== 11
        ? "категория"
        : mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)
          ? "категории"
          : "категорий";
    return n + " " + word;
  }

  function cardHtml(item, variant) {
    var href = productHref(item.id);
    var title = escapeHtml(item.title);
    var label = escapeHtml(cardLabel(item));
    var blurb = escapeHtml(item.blurb);
    var price = escapeHtml(item.price);
    var photo = escapeHtml(item.photo);
    if (variant === "d1") {
      return (
        '<a class="card" href="' + href + '">' +
        '<div class="card-media"><img src="' + photo + '" alt="' + title + '"></div>' +
        "<h4>" + label + "</h4>" +
        '<p class="note">' + blurb + "</p>" +
        '<p class="price">от ' + price + " руб.</p>" +
        '<span class="link">Посмотреть</span>' +
        "</a>"
      );
    }
    if (variant === "d2") {
      return (
        '<a class="card" href="' + href + '">' +
        '<div class="card-media"><img src="' + photo + '" alt="' + title + '"></div>' +
        "<h4>" + label + "</h4>" +
        '<p class="price">от ' + price + " руб.</p>" +
        '<span class="more">Посмотреть</span>' +
        "</a>"
      );
    }
    /* d3 / site — archive card from direction 3 */
    return (
      '<a class="card" href="' + href + '">' +
      '<div class="card-media"><img src="' + photo + '" alt="' + title + '"></div>' +
      '<div class="card-meta">' +
      "<h3>" + label + "</h3>" +
      '<p class="price">от ' + price + "</p>" +
      '<span class="more">Посмотреть</span>' +
      "</div></a>"
    );
  }

  function rowHtml(item) {
    return (
      '<a href="' +
      productHref(item.id) +
      '"><span>' +
      escapeHtml(cardLabel(item)) +
      '</span><span>от ' +
      escapeHtml(item.price) +
      "</span></a>"
    );
  }

  function mount(root, options) {
    if (!root) return;
    options = options || {};
    var variant = options.variant || "d3";
    var bands = options.bands || {};
    var html = "";
    sections.forEach(function (sec) {
      if (bands[sec.id]) {
        html +=
          '<div class="photo-band" aria-hidden="true"><img src="' +
          escapeHtml(bands[sec.id]) +
          '" alt="" loading="lazy"></div>';
      }
      var cards = (sec.cards || []).map(function (id) { return byId[id]; }).filter(Boolean);
      var rows = (sec.rows || []).map(function (id) { return byId[id]; }).filter(Boolean);

      html += '<div class="cat-group" id="' + escapeHtml(sec.id) + '">';
      html +=
        '<div class="group-head"><h2>' +
        escapeHtml(sec.title) +
        "</h2><p>" +
        escapeHtml(sec.note || "") +
        "</p></div>";

      if (cards.length) {
        html += '<div class="grid4">';
        cards.forEach(function (item) {
          html += cardHtml(item, variant === "site" ? "d3" : variant);
        });
        html += "</div>";
      }

      if (rows.length) {
        html += '<div class="archive" aria-label="Дополнительно в разделе">';
        rows.forEach(function (item) {
          html += rowHtml(item);
        });
        html += "</div>";
      }

      html += "</div>";
    });
    root.innerHTML = html;
  }

  function catalogListHtml(extraClass) {
    var html =
      '<a class="' +
      (extraClass || "") +
      '" href="catalog.html">Весь каталог</a>';
    items.forEach(function (row) {
      var item = byId[row[0]];
      html +=
        '<a class="' +
        (extraClass || "") +
        '" href="' +
        productHref(item.id) +
        '">' +
        escapeHtml(item.title) +
        "</a>";
    });
    return html;
  }

  function isCatalogHref(href) {
    if (!href) return false;
    return /catalog\.html(?:#|$)/.test(href) || /#katalog\b/.test(href);
  }

  function mountNav() {
    document.querySelectorAll("a.bar-link").forEach(function (link) {
      if (!isCatalogHref(link.getAttribute("href"))) return;
      if (link.closest(".nav-drop")) return;

      var wrap = document.createElement("div");
      wrap.className = "nav-drop";
      link.parentNode.insertBefore(wrap, link);
      wrap.appendChild(link);

      var chevron = document.createElement("button");
      chevron.type = "button";
      chevron.className = "nav-drop-chevron";
      chevron.setAttribute("aria-label", "Все категории каталога");
      chevron.setAttribute("aria-expanded", "false");
      chevron.setAttribute("aria-haspopup", "true");
      chevron.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      wrap.appendChild(chevron);

      var panel = document.createElement("div");
      panel.className = "nav-drop-panel";
      panel.setAttribute("role", "menu");
      panel.innerHTML = catalogListHtml();
      wrap.appendChild(panel);

      function setOpen(open) {
        wrap.classList.toggle("is-open", open);
        chevron.setAttribute("aria-expanded", open ? "true" : "false");
      }

      var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
      wrap.addEventListener("mouseenter", function () {
        if (finePointer.matches) setOpen(true);
      });
      wrap.addEventListener("mouseleave", function () {
        if (finePointer.matches) setOpen(false);
      });
      wrap.addEventListener("focusin", function () {
        setOpen(true);
      });
      wrap.addEventListener("focusout", function (event) {
        if (!wrap.contains(event.relatedTarget)) setOpen(false);
      });
      /* Touch / coarse pointer: tap chevron */
      chevron.addEventListener("click", function (event) {
        if (finePointer.matches) return;
        event.preventDefault();
        event.stopPropagation();
        setOpen(!wrap.classList.contains("is-open"));
      });
      document.addEventListener("click", function (event) {
        if (!finePointer.matches && !wrap.contains(event.target)) setOpen(false);
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setOpen(false);
      });
    });

    var mobile = document.getElementById("nav");
    if (mobile && !mobile.querySelector(".nav-cats")) {
      var catalogLink = null;
      Array.prototype.forEach.call(mobile.children, function (el) {
        if (!catalogLink && el.tagName === "A" && isCatalogHref(el.getAttribute("href"))) {
          catalogLink = el;
        }
      });
      if (catalogLink) {
        var box = document.createElement("div");
        box.className = "nav-cats";
        box.innerHTML = catalogListHtml();
        catalogLink.insertAdjacentElement("afterend", box);
      }
    }
  }

  global.SklonCatalog = {
    groups: groups,
    sections: sections,
    items: items.map(function (row) { return byId[row[0]]; }),
    byId: byId,
    count: items.length,
    resolveId: resolveId,
    get: function (id) {
      return byId[resolveId(id)];
    },
    productHref: productHref,
    mount: mount,
    mountNav: mountNav
  };
})(window);
