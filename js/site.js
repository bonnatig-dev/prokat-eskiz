(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) document.documentElement.classList.add("js");

  function withCatalog(done) {
    if (window.SklonCatalog) {
      done();
      return;
    }
    var script = document.createElement("script");
    script.src = "js/categories.js";
    script.onload = done;
    document.head.appendChild(script);
  }

  withCatalog(function () {
    if (window.SklonCatalog && SklonCatalog.mountNav) SklonCatalog.mountNav();
  });

  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.textContent = open ? "Закрыть" : "Меню";
      document.body.style.overflow = open ? "hidden" : "";
    });
    function closeNav() {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.textContent = "Меню";
      var modal = document.getElementById("book-modal");
      if (!modal || !modal.open) document.body.style.overflow = "";
    }
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a, [data-open-book]")) closeNav();
    });
  }

  var cross = document.querySelector("[data-crossfade]");
  if (cross) {
    var frames = Array.prototype.slice.call(cross.querySelectorAll("img, video"));
    var i = 0;
    function show(n) {
      i = (n + frames.length) % frames.length;
      frames.forEach(function (el, idx) {
        el.classList.toggle("is-on", idx === i);
        if (el.tagName === "VIDEO") {
          if (idx === i && !reduce) {
            var play = el.play();
            if (play && play.catch) play.catch(function () {});
          } else {
            el.pause();
          }
        }
      });
    }
    show(0);
    if (!reduce && frames.length > 1) {
      setInterval(function () { show(i + 1); }, 5600);
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        frames.forEach(function (el) {
          if (el.tagName === "VIDEO") el.pause();
        });
      } else if (!reduce) {
        show(i);
      }
    });
  }

  function ensureBookModal() {
    var existing = document.getElementById("book-modal");
    if (existing) return existing;
    var dialog = document.createElement("dialog");
    dialog.id = "book-modal";
    dialog.className = "book-modal";
    dialog.setAttribute("aria-labelledby", "book-title");
    dialog.innerHTML =
      '<div class="book-modal-panel">' +
      '<button type="button" class="book-modal-close" aria-label="Закрыть">&times;</button>' +
      '<div class="book-inner">' +
      "<div>" +
      '<h2 id="book-title">Заявка на прокат</h2>' +
      "<p>Оставьте контакты и дату — подтвердим размеры и соберём комплект.</p>" +
      "</div>" +
      '<form class="form" action="mailto:rent@sklon.example" method="post" enctype="text/plain">' +
      '<label>Имя <input name="name" type="text" autocomplete="name" required maxlength="80"></label>' +
      '<label>Телефон <input name="phone" type="tel" autocomplete="tel" required maxlength="32"></label>' +
      '<label>Что необходимо <input name="need" type="text" required maxlength="200" placeholder="Сноуборд Rental + ботинки"></label>' +
      '<label>Дата проката <input name="date" type="date" required></label>' +
      '<p class="form-note" role="status"></p>' +
      '<button class="btn" type="submit">Отправить заявку</button>' +
      "</form>" +
      "</div></div>";
    document.body.appendChild(dialog);

    var form = dialog.querySelector(".form");
    var closeBtn = dialog.querySelector(".book-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        dialog.close();
      });
    }
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", function () {
      document.body.style.overflow = "";
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var body = [
        "Имя: " + data.get("name"),
        "Телефон: " + data.get("phone"),
        "Нужно: " + data.get("need"),
        "Дата: " + data.get("date")
      ].join("\n");
      var note = form.querySelector(".form-note");
      if (note) note.textContent = "Откроется письмо с заявкой. Почту заменим на рабочую.";
      window.location.href =
        "mailto:rent@sklon.example?subject=" +
        encodeURIComponent("Бронь снаряжения") +
        "&body=" +
        encodeURIComponent(body);
    });
    return dialog;
  }

  function openBookModal(presetNeed) {
    var dialog = ensureBookModal();
    var need = dialog.querySelector('input[name="need"]');
    var note = dialog.querySelector(".form-note");
    if (note) note.textContent = "";
    if (need) {
      if (presetNeed) need.value = presetNeed;
      else if (!need.value) {
        var productName = document.querySelector("[data-product] [data-field='name']");
        if (productName && productName.textContent) need.value = productName.textContent.trim();
      }
    }
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
    var first = dialog.querySelector('input[name="name"]');
    if (first) first.focus();
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-open-book]");
    if (!trigger) return;
    event.preventDefault();
    var preset = trigger.getAttribute("data-need") || "";
    openBookModal(preset);
  });

  if (location.hash === "#zayavka" || location.hash === "#bron") {
    history.replaceState(null, "", location.pathname + location.search);
    openBookModal();
  }

  function siteFooterHtml() {
    return (
      '<footer class="footer">' +
      '<div class="footer-photo">' +
      '<img src="assets/photos/rastkogel-ski-slope.jpg" alt="Склон крупным планом" width="1920" height="1280" loading="lazy">' +
      "</div>" +
      '<div class="footer-menu">' +
      '<a class="logo" href="index.html">Склон</a>' +
      '<nav aria-label="Подвал">' +
      '<a href="catalog.html">Каталог</a>' +
      '<a href="index.html#prokat">Прокат</a>' +
      '<a href="blog.html">Блог</a>' +
      '<a href="index.html#kontakty">Контакты</a>' +
      '<a href="privacy.html">Политика</a>' +
      "</nav>" +
      '<div class="footer-meta">' +
      "<div>" +
      '<p><a href="tel:+375290000000">+375 29 000-00-00</a></p>' +
      "<p>Telegram · WhatsApp</p>" +
      "</div>" +
      "<div>" +
      "<p>Цены «от», BYN / сутки</p>" +
      "<p>Пример наполнения эскиза</p>" +
      "</div>" +
      "</div>" +
      "</div></footer>"
    );
  }

  (function ensureFooter() {
    var existing = document.querySelector("footer.footer");
    if (existing && existing.querySelector(".footer-menu")) return;
    var wrap = document.createElement("div");
    wrap.innerHTML = siteFooterHtml();
    var footer = wrap.firstChild;
    if (existing) {
      existing.replaceWith(footer);
    } else {
      var anchor = document.querySelector("script[src*='site.js']");
      if (anchor) document.body.insertBefore(footer, anchor);
      else document.body.appendChild(footer);
    }
  })();

  /* Dev-only stress dataset for break-ui (?stress=1) */
  if (window.SklonCatalog && /(?:\?|&)stress=1(?:&|$)/.test(location.search)) {
    var stress = SklonCatalog.items.slice();
    if (stress[0]) {
      stress[0] = Object.assign({}, stress[0], {
        title: "Сноуборды All-Mountain Freeride Premium Rental Extended",
        blurb: "Очень подробное описание категории для проверки переноса текста на две и три строки в карточке каталога и на странице товара без поломки сетки.",
        price: "12580"
      });
    }
    if (stress[1]) {
      stress[1] = Object.assign({}, stress[1], {
        title: "X",
        blurb: "",
        photo: "",
        price: "8"
      });
    }
    if (stress[2]) {
      stress[2] = Object.assign({}, stress[2], {
        title: "Горнолыжные ботинки Hard Race Edition",
        sizes: "36,37,38,39,40,41,42,43,44,45,46,47,48",
        kit: "Пара ботинок, сушилка, чехол, инструкция по подгонке и запасные стельки"
      });
    }
    SklonCatalog.items = stress;
    Object.keys(SklonCatalog.byId).forEach(function (id) {
      var found = stress.filter(function (row) { return row.id === id; })[0];
      if (found) SklonCatalog.byId[id] = found;
    });
    var phone = document.querySelector(".visit-card .phone, .phone-link");
    if (phone) phone.textContent = "+375 (29) 000-00-00 доб. 1234";
    var addr = document.querySelector(".visit-card .addr");
    if (addr) {
      addr.innerHTML =
        "Пункт выдачи на пересечении улицы Оченьдлинногоназвания и проспекта<br>Город, район, корпус 12, строение 3, офис 417";
    }
  }

  var product = document.querySelector("[data-product]");
  if (product && window.SklonCatalog) {
    var params = new URLSearchParams(window.location.search);
    var item = SklonCatalog.get(params.get("id"));
    var set = function (sel, text) {
      var node = product.querySelector(sel);
      if (node) node.textContent = text;
    };
    set("[data-field='name']", item.title);
    set("[data-field='cat']", item.title);
    set("[data-field='price']", "от " + item.price + " руб. / сутки");
    set("[data-field='level']", item.level);
    set("[data-field='size']", item.size);
    set("[data-field='use']", item.use);
    set("[data-field='age']", item.age);
    set("[data-field='kit']", item.kit);
    document.title = item.title + ". Склон";
    var photo = product.querySelector("[data-field='photo']");
    if (photo) {
      if (item.photo) {
        photo.src = item.photo;
        photo.alt = item.title;
      } else {
        photo.removeAttribute("src");
        photo.alt = "";
        photo.style.display = "none";
      }
    }
    var sizes = product.querySelector("[data-sizes]");
    if (sizes) {
      sizes.innerHTML = "";
      String(item.sizes || "")
        .split(",")
        .filter(Boolean)
        .forEach(function (size, index) {
          var button = document.createElement("button");
          button.type = "button";
          button.textContent = size;
          button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
          button.addEventListener("click", function () {
            Array.prototype.forEach.call(sizes.children, function (other) {
              other.setAttribute("aria-pressed", other === button ? "true" : "false");
            });
          });
          sizes.appendChild(button);
        });
    }

    var day = Number(item.price) || 0;
    var terms = {
      day: day,
      weekend: Math.round(day * 1.7),
      week: Math.round(day * 4)
    };
    var priceNode = product.querySelector("[data-field='price']");
    product.querySelectorAll("[data-term]").forEach(function (button) {
      button.addEventListener("click", function () {
        product.querySelectorAll("[data-term]").forEach(function (other) {
          other.setAttribute("aria-pressed", other === button ? "true" : "false");
        });
        if (priceNode) {
          priceNode.textContent =
            "от " + terms[button.getAttribute("data-term")] + " руб. / сутки";
        }
      });
    });

    var related = product.querySelector("[data-related]");
    if (related) {
      var peers = SklonCatalog.items
        .filter(function (row) {
          return row.group === item.group && row.id !== item.id;
        })
        .slice(0, 4);
      if (peers.length < 4) {
        peers = peers.concat(
          SklonCatalog.items
            .filter(function (row) {
              return row.id !== item.id && peers.indexOf(row) === -1;
            })
            .slice(0, 4 - peers.length)
        );
      }
      related.innerHTML = peers
        .map(function (row) {
          return (
            '<a href="' +
            SklonCatalog.productHref(row.id) +
            '"><span>' +
            (row.photo
              ? '<img src="' + row.photo + '" alt="">'
              : "") +
            "</span>" +
            row.title +
            "</a>"
          );
        })
        .join("");
    }
  }
})();
