(function () {
  document.documentElement.classList.remove('js-yok');
  var azHareket = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobilSorgu = window.matchMedia('(max-width: 760px)');
  function mobil() { return mobilSorgu.matches; }
  var govde = document.body;

  // Dil: tr/ altındaki sayfalar lang="tr"; betikle üretilen metinler buradan
  var dil = /^tr/i.test(document.documentElement.lang || '') ? 'tr' : 'en';
  var M = {
    en: {
      teklif: 'Request a Quote', slogan: 'Fuel and flight, planned together.', kapat: 'Close', tur: 'Request type',
      yakit: 'Aviation Fuel', charter: 'Charter',
      meydan: 'Airport', meydanOrnek: 'e.g. Antalya', ucak: 'Aircraft', ucakOrnek: 'e.g. G650',
      tarih: 'Date', bugun: 'Today', yarin: 'Tomorrow', rota: 'Route', rotaOrnek: 'e.g. Istanbul – Nice',
      yolcu: 'Passengers', azYolcu: 'Fewer passengers', cokYolcu: 'More passengers',
      iletisim: 'Email or WhatsApp', iletisimOrnek: 'Where we reply', gonder: 'Send Request',
      kvkk: 'We use your details to respond to this request.', kvkkLink: 'KVKK Notice',
      secim: 'Choose a request type to see the details we need.',
      tercih: 'Prefer to call or write?', iletisimLink: 'Contact',
      yolcuTek: ' passenger', yolcuCok: ' passengers', tarihDil: 'en-GB',
      kaydir: 'Swipe through the regions and the globe follows. Availability varies by airport and date.',
      formYakit: 'Fuel quote request', formCharter: 'Charter quote request',
      hazirYakit: 'Your request is ready. Send it to our fuel team:', hazirCharter: 'Your request is ready. Send it to our charter team:',
      epostaIle: 'Send by Email', waIle: 'Send on WhatsApp', toastHazir: 'Request prepared. Choose how to send it.',
      kopyalandi: 'Copied: ', kopyalanamadi: 'Could not copy. Please select the text instead.',
      cerezMetin: 'We use essential storage to run this site and, only with your consent, Google Analytics cookies to understand how it is used.',
      cerezKabul: 'Accept', cerezReddet: 'Reject', cerezLink: 'Privacy Policy', cerezBolge: 'Cookie preferences', cerezKaydedildi: 'Cookie preference saved.',
      gonderiliyor: 'Sending…', toastGitti: 'Request sent.',
      gittiYakit: 'Thank you. Your request has been sent to our fuel team. We will get back to you using the contact details you gave.',
      gittiCharter: 'Thank you. Your request has been sent to our charter team. We will get back to you using the contact details you gave.',
      gitmedi: 'Your request could not be sent. You can send it by email or WhatsApp instead:', toastGitmedi: 'Could not send. Please use email or WhatsApp.',
      dur: 'Pause', devam: 'Play', yasalGuncel: 'Last updated', tarihSec: 'Select a date',
      ucusTuru: 'Flight type', tipPrivate: 'Private', tipGroup: 'Group', tipCargo: 'Cargo', kargoOrnek: 'e.g. 2 tonnes, 3 pallets',
      sinif: 'Aircraft category', sinifKaldir: 'Remove aircraft category', sablonKopyalandi: 'Request template copied.',
      meydanEklendi: 'Airport added to your fuel request: '
    },
    tr: {
      teklif: 'Teklif İste', slogan: 'Yakıt ve uçuş, birlikte planlanır.', kapat: 'Kapat', tur: 'Talep türü',
      yakit: 'Uçak Yakıtı', charter: 'Charter',
      meydan: 'Meydan', meydanOrnek: 'ör. Antalya', ucak: 'Uçak', ucakOrnek: 'ör. G650',
      tarih: 'Tarih', bugun: 'Bugün', yarin: 'Yarın', rota: 'Rota', rotaOrnek: 'ör. İstanbul – Nice',
      yolcu: 'Yolcu', azYolcu: 'Yolcu sayısını azalt', cokYolcu: 'Yolcu sayısını artır',
      iletisim: 'E-posta / WhatsApp', iletisimOrnek: 'Yanıt adresi', gonder: 'Talebi Gönder',
      kvkk: 'Bilgilerinizi bu talebe yanıt vermek için kullanırız.', kvkkLink: 'KVKK Aydınlatma Metni',
      secim: 'Gereken bilgileri görmek için talep türünü seçin.',
      tercih: 'Aramak ya da yazmak mı istersiniz?', iletisimLink: 'İletişim',
      yolcuTek: ' yolcu', yolcuCok: ' yolcu', tarihDil: 'tr-TR',
      kaydir: 'Bölgeler arasında kaydırın, küre de onları izler. Uygunluk meydana ve tarihe göre değişir.',
      formYakit: 'Yakıt teklif talebi', formCharter: 'Charter teklif talebi',
      hazirYakit: 'Talebiniz hazır. Yakıt ekibimize gönderin:', hazirCharter: 'Talebiniz hazır. Charter ekibimize gönderin:',
      epostaIle: 'E-postayla Gönder', waIle: 'WhatsApp ile Gönder', toastHazir: 'Talebiniz hazırlandı. Gönderim yolunu seçin.',
      kopyalandi: 'Kopyalandı: ', kopyalanamadi: 'Kopyalanamadı; lütfen metni seçip kopyalayın.',
      cerezMetin: 'Sitenin çalışması için zorunlu depolama kullanırız. Google Analytics çerezleri ise yalnızca onay verirseniz, sitenin nasıl kullanıldığını anlamak için yüklenir.',
      cerezKabul: 'Kabul Et', cerezReddet: 'Reddet', cerezLink: 'Gizlilik Politikası', cerezBolge: 'Çerez tercihleri', cerezKaydedildi: 'Çerez tercihiniz kaydedildi.',
      gonderiliyor: 'Gönderiliyor…', toastGitti: 'Talebiniz gönderildi.',
      gittiYakit: 'Teşekkürler. Talebiniz yakıt ekibimize iletildi. Verdiğiniz iletişim bilgisi üzerinden size dönüş yapacağız.',
      gittiCharter: 'Teşekkürler. Talebiniz charter ekibimize iletildi. Verdiğiniz iletişim bilgisi üzerinden size dönüş yapacağız.',
      gitmedi: 'Talebiniz gönderilemedi. E-posta ya da WhatsApp ile iletebilirsiniz:', toastGitmedi: 'Gönderilemedi. Lütfen e-posta ya da WhatsApp kullanın.',
      dur: 'Durdur', devam: 'Oynat', yasalGuncel: 'Son güncelleme', tarihSec: 'Tarih seçin',
      ucusTuru: 'Uçuş türü', tipPrivate: 'Özel', tipGroup: 'Grup', tipCargo: 'Kargo', kargoOrnek: 'ör. 2 ton, 3 palet',
      sinif: 'Uçak sınıfı', sinifKaldir: 'Uçak sınıfını kaldır', sablonKopyalandi: 'Talep şablonu kopyalandı.',
      meydanEklendi: 'Meydan yakıt talebinize eklendi: '
    }
  }[dil];
  // Ekipler: form gönderimi ve iletişim
  var EKIP = { yakit: { posta: 'sales@cwavia.com', wa: '905537311434' }, charter: { posta: 'charter@cwavia.com', wa: '905302360904' } };

  // KURULUM AYARLARI (yayından önce doldurulur; ayrıntı: README → "Analiz ve form kurulumu")
  //   ga4: Google Analytics 4 ölçüm kimliği, ör. 'G-ABC123XYZ'. Boşsa analiz hiç yüklenmez.
  //        Doluysa bile yalnızca ziyaretçi çerez bandında "Kabul Et" dediğinde yüklenir.
  //   formAdresi: talepleri e-postaya ileten sunucu adresi (cwavia.com IIS: '/api/talep.ashx').
  //        Boşsa ya da sunucu yanıt vermezse form, talebi e-posta / WhatsApp mesajı olarak hazırlar.
  var AYAR = { ga4: '', formAdresi: '' };

  // Sayfa geçişi: yeni açılan sayfa en üstten başlar (çapa ya da geri/ileri yoksa).
  // Bazı ortamlar (ör. önizleme çerçeveleri) önceki kaydırmayı geri yükleyebildiği için kısa süre korunur.
  var gecis = (performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || {};
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash && gecis.type !== 'back_forward') {
    var kullaniciKaydirdi = false;
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (o) {
      window.addEventListener(o, function () { kullaniciKaydirdi = true; }, { once: true, passive: true });
    });
    var basaDon = function () { if (!kullaniciKaydirdi && window.scrollY) window.scrollTo({ top: 0, behavior: 'instant' }); };
    basaDon();
    window.addEventListener('load', basaDon);
    [80, 300, 700].forEach(function (ms) { setTimeout(basaDon, ms); });
  }

  var kilitler = 0;
  function kaydirmaKilidi(acik) {
    kilitler = Math.max(0, kilitler + (acik ? 1 : -1));
    govde.style.overflow = kilitler ? 'hidden' : '';
  }

  // Üst bar: hero geçilince koyu zemine döner
  var bar = document.getElementById('bar');
  function barDurum() { if (bar) bar.classList.toggle('dolu', window.scrollY > 40); }
  barDurum();

  // Mobil menü: tam ekran, masalara kısa yol
  var menuAc = document.querySelector('.menu-ac');
  var anaMenu = document.getElementById('ana-menu');
  function menuKapat(odakGeri) {
    if (!bar || !bar.classList.contains('menu-acik')) return;
    menuAc.setAttribute('aria-expanded', 'false');
    bar.classList.remove('menu-acik');
    kaydirmaKilidi(false);
    document.querySelectorAll('body > main, body > footer').forEach(function (el) { el.removeAttribute('inert'); });
    if (odakGeri === true && anaMenu.contains(document.activeElement)) menuAc.focus({ preventScroll: true });
  }
  if (menuAc && bar && anaMenu) {
    var ek = document.createElement('div');
    ek.className = 'menu-ek';
    var dilSecici = document.querySelector('.bar-sag .dil');
    ek.innerHTML =
      '<a class="menu-ek__teklif" href="#teklif" data-sheet="">' + M.teklif + '</a>' +
      '<p>' + M.slogan + '</p>';
    // Dil seçici: iki eşit hücre (EN | TR); ara nokta yalnız üst barda kalır
    if (dilSecici) {
      var menuDil = document.createElement('div');
      menuDil.className = 'menu-dil';
      menuDil.setAttribute('role', 'group');
      menuDil.setAttribute('aria-label', dilSecici.getAttribute('aria-label') || 'Language');
      Array.prototype.forEach.call(dilSecici.children, function (el) { menuDil.appendChild(el.cloneNode(true)); });
      ek.insertBefore(menuDil, ek.lastChild);
    }
    anaMenu.appendChild(ek);
    menuAc.addEventListener('click', function () {
      var acik = menuAc.getAttribute('aria-expanded') !== 'true';
      if (!acik) { menuKapat(); return; }
      menuAc.setAttribute('aria-expanded', 'true');
      bar.classList.add('menu-acik');
      kaydirmaKilidi(true);
      document.querySelectorAll('body > main, body > footer').forEach(function (el) { el.setAttribute('inert', ''); });
    });
    anaMenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menuKapat(); }); });
    mobilSorgu.addEventListener('change', function () { if (!mobil()) menuKapat(); });
  }

  // Form sekmeleri (sayfada varsa)
  var sekmeler = { yakit: document.getElementById('sekme-yakit'), charter: document.getElementById('sekme-charter') };
  var formlar = { yakit: document.getElementById('form-yakit'), charter: document.getElementById('form-charter') };
  function sekmeSec(tur) {
    if (!sekmeler.yakit || !sekmeler.charter) return;
    Object.keys(sekmeler).forEach(function (k) {
      var secili = k === tur;
      sekmeler[k].setAttribute('aria-selected', secili);
      formlar[k].hidden = !secili;
    });
  }
  if (sekmeler.yakit && sekmeler.charter) {
    sekmeler.yakit.addEventListener('click', function () { sekmeSec('yakit'); });
    sekmeler.charter.addEventListener('click', function () { sekmeSec('charter'); });
  }
  // body de data-tur taşır; dinleyici yalnız bağlantı ve butonlarda (yoksa her tıklama formu sayfa türüne döndürür)
  document.querySelectorAll('a[data-tur], button[data-tur]').forEach(function (a) {
    a.addEventListener('click', function () { sekmeSec(a.dataset.tur); });
  });

  // Mobil teklif paneli: alttan açılır, iki sekmeli kısa form
  var alan = function (id, ad, etiket, yer, ek, tam) {
    return '<div class="alan' + (tam ? ' alan--tam' : '') + '"><label for="' + id + '">' + etiket + '</label><input id="' + id + '" name="' + ad + '" placeholder="' + yer + '" required' + (ek || '') + '></div>';
  };
  // Tarih: telefonun takvimi ve "Today / Tomorrow" kısa yolları
  var tarihAlani = function (id) {
    return '<div class="alan alan--tam"><label for="' + id + '">' + M.tarih + '</label><div class="tarih-satiri">' +
      '<span class="tarih-kutu"><input id="' + id + '" name="date" type="date" required><span class="tarih-ipucu" aria-hidden="true">' + M.tarihSec + '</span></span>' +
      '<button type="button" class="cip" data-gun="0">' + M.bugun + '</button><button type="button" class="cip" data-gun="1">' + M.yarin + '</button></div></div>';
  };
  // Yolcu sayısı: − / + ile
  var yolcuAlani = '<div class="alan"><label for="sh-yolcu">' + M.yolcu + '</label><div class="sayici">' +
    '<button type="button" data-adim="-1" aria-label="' + M.azYolcu + '">−</button>' +
    '<input id="sh-yolcu" name="passengers" type="number" min="1" max="400" inputmode="numeric" placeholder="6" required>' +
    '<button type="button" data-adim="1" aria-label="' + M.cokYolcu + '">+</button></div></div>';
  var kvkk = '<p class="sheet__not">' + M.kvkk + ' <a href="legal.html#kvkk" data-yasal="kvkk">' + M.kvkkLink + '</a></p>';
  var sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.id = 'sheet';
  sheet.hidden = true;
  sheet.innerHTML =
    '<div class="sheet__perde" data-kapat></div>' +
    '<div class="sheet__panel" role="dialog" aria-modal="true" aria-labelledby="sheet-baslik">' +
      '<div class="sheet__tutamac" aria-hidden="true"><i></i></div>' +
      '<div class="sheet__ust"><h2 id="sheet-baslik">' + M.teklif + '</h2><button type="button" class="sheet__kapat" data-kapat aria-label="' + M.kapat + '"><i></i><i></i></button></div>' +
      '<div class="sekmeler" role="tablist" aria-label="' + M.tur + '">' +
        '<button type="button" role="tab" data-sekme="yakit" aria-selected="true">' + M.yakit + '</button>' +
        '<button type="button" role="tab" data-sekme="charter" aria-selected="false">' + M.charter + '</button>' +
      '</div>' +
      '<p class="sheet__secim" hidden>' + M.secim + '</p>' +
      '<form class="sheet__form" data-form="yakit" onsubmit="return false" aria-label="' + M.formYakit + '">' +
        alan('sh-icao', 'airport', M.meydan, M.meydanOrnek, ' autocomplete="off"') + alan('sh-ucak', 'aircraft', M.ucak, M.ucakOrnek) +
        tarihAlani('sh-tarih-y') +
        alan('sh-iletisim-y', 'contact', M.iletisim, M.iletisimOrnek, ' autocomplete="email"', true) +
        '<p class="sheet__ozet" aria-live="polite" hidden></p>' + kvkk +
        '<button class="btn btn--mavi" type="submit">' + M.gonder + '</button>' +
      '</form>' +
      '<form class="sheet__form" data-form="charter" onsubmit="return false" aria-label="' + M.formCharter + '" hidden>' +
        alan('sh-rota', 'route', M.rota, M.rotaOrnek, '', true) +
        tarihAlani('sh-tarih-c') +
        yolcuAlani + alan('sh-iletisim-c', 'contact', M.iletisim, M.iletisimOrnek, ' autocomplete="email"') +
        '<p class="sheet__ozet" aria-live="polite" hidden></p>' + kvkk +
        '<button class="btn btn--mavi" type="submit">' + M.gonder + '</button>' +
      '</form>' +
      '<div class="sheet__hat"><span>' + M.tercih + '</span><a href="#iletisim" data-kapat>' + M.iletisimLink + '</a></div>' +
    '</div>';
  govde.appendChild(sheet);
  var sheetPanel = sheet.querySelector('.sheet__panel');
  var oncekiOdak = null;
  // Tür yoksa (ana sayfa, About) önce seçim istenir; yanlış formla açılmaz
  function sheetSekme(tur) {
    sheet.querySelectorAll('[data-sekme]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.sekme === tur); });
    sheet.querySelectorAll('[data-form]').forEach(function (f) { f.hidden = f.dataset.form !== tur; });
    sheet.querySelector('.sheet__secim').hidden = !!tur;
  }
  // Panel açıkken Tab arka plandaki sayfaya kaçmasın
  function arkaPlan(kapali) {
    document.querySelectorAll('body > header, body > main, body > footer, body > section, .mobil-bar').forEach(function (el) {
      el.toggleAttribute('inert', kapali);
    });
  }
  function sheetAc(tur) {
    menuKapat();
    sheetSekme(tur || govde.dataset.tur || '');
    oncekiOdak = document.activeElement;
    sheet.hidden = false;
    arkaPlan(true);
    kaydirmaKilidi(true);
    govde.classList.add('sheet-acik');
    void sheetPanel.offsetWidth; // başlangıç konumunu uygula, sonra kaydır
    sheet.classList.add('acik');
    setTimeout(function () { var k = sheet.querySelector('.sheet__kapat'); if (k) k.focus({ preventScroll: true }); }, 60);
  }
  function sheetKapat() {
    if (sheet.hidden) return;
    sheet.classList.remove('acik');
    sheetPanel.style.transform = '';
    govde.classList.remove('sheet-acik');
    arkaPlan(false);
    kaydirmaKilidi(false);
    setTimeout(function () { sheet.hidden = true; }, azHareket ? 0 : 380);
    if (oncekiOdak && oncekiOdak.focus) oncekiOdak.focus({ preventScroll: true });
  }
  function isoGun(ek) {
    var d = new Date(); d.setDate(d.getDate() + ek);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  sheet.querySelectorAll('input[type="date"]').forEach(function (t) { t.min = isoGun(0); });
  // Canlı talep özeti: doldurulan bilgiler tek satırda
  function ozetGuncelle(f) {
    var o = f.querySelector('.sheet__ozet');
    if (!o) return;
    var deger = function (ad) { var i = f.querySelector('[name="' + ad + '"]'); return i && i.value.trim(); };
    var tarih = deger('date');
    if (tarih) tarih = new Date(tarih + 'T12:00').toLocaleDateString(M.tarihDil, { day: 'numeric', month: 'short' });
    var yolcu = deger('passengers');
    var parcalar = f.dataset.form === 'yakit'
      ? [deger('airport'), tarih, deger('aircraft')]
      : [deger('route'), tarih, yolcu ? (deger('flight_type') === 'Cargo' ? yolcu : yolcu + (yolcu === '1' ? M.yolcuTek : M.yolcuCok)) : ''];
    var metin = parcalar.filter(Boolean).join(' · ');
    o.textContent = metin;
    o.hidden = !metin;
  }
  sheet.addEventListener('input', function (e) { var f = e.target.closest('.sheet__form'); if (f) ozetGuncelle(f); });
  sheet.addEventListener('click', function (e) {
    var s = e.target.closest('[data-sekme]');
    if (s) { sheetSekme(s.dataset.sekme); return; }
    var g = e.target.closest('[data-gun]');
    if (g) {
      var t = g.parentElement.querySelector('input');
      t.value = isoGun(+g.dataset.gun);
      g.parentElement.querySelectorAll('.cip').forEach(function (c) { c.classList.toggle('secili', c === g); });
      ozetGuncelle(g.closest('.sheet__form'));
      return;
    }
    var a = e.target.closest('[data-adim]');
    if (a) {
      var y = a.parentElement.querySelector('input');
      y.value = Math.min(400, Math.max(1, (+y.value || 0) + +a.dataset.adim));
      ozetGuncelle(a.closest('.sheet__form'));
      return;
    }
    if (e.target.closest('[data-kapat]')) sheetKapat();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (typeof yasalKapat === 'function' && yasalKapat()) return;
    sheetKapat(); menuKapat(true);
  });
  // Tutamaçtan aşağı çekince kapanır
  var cekBas = null;
  sheetPanel.addEventListener('touchstart', function (e) {
    if (sheetPanel.scrollTop > 0) { cekBas = null; return; }
    cekBas = e.touches[0].clientY;
  }, { passive: true });
  sheetPanel.addEventListener('touchmove', function (e) {
    if (cekBas === null) return;
    var d = e.touches[0].clientY - cekBas;
    if (d > 0) sheetPanel.style.transform = 'translateY(' + d + 'px)';
  }, { passive: true });
  sheetPanel.addEventListener('touchend', function (e) {
    if (cekBas === null) return;
    var d = e.changedTouches[0].clientY - cekBas;
    cekBas = null;
    if (d > 110) sheetKapat(); else sheetPanel.style.transform = '';
  });
  // Mobilde teklif bağlantıları paneli açar; masaüstünde sayfadaki forma gider
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-sheet], a[href$="#teklif"]');
    if (!a || sheet.contains(a)) return;
    if (mobil()) { e.preventDefault(); sheetAc(a.dataset.sheet || a.dataset.tur); return; }
    // Masaüstü: aynı sayfadaki teklif kartını ortalar ve ilk alana odaklanır
    var hedef = a.getAttribute('href') === '#teklif' && document.getElementById('teklif');
    if (!hedef) return;
    e.preventDefault();
    hedef.scrollIntoView({ behavior: azHareket ? 'auto' : 'smooth', block: 'center' });
    setTimeout(function () {
      var alan = hedef.querySelector('form:not([hidden]) input:not([type="hidden"])');
      if (alan) alan.focus({ preventScroll: true });
    }, azHareket ? 0 : 500);
  });

  // Charter formları: uçuş türü (Private / Group / Cargo) ve uçak sınıfı kartından gelen seçim.
  // Dört alan aynı kalır; tür önceden seçilidir, sınıf yalnızca karttan gelirse görünür.
  var charterFormlar = [].slice.call(document.querySelectorAll('#form-charter, .sheet__form[data-form="charter"]'));
  function turAyarla(f, tip) {
    f.querySelector('[name="flight_type"]').value = tip;
    f.querySelector('[name="flight_type"]').dataset.goster = M['tip' + tip];
    f.querySelectorAll('.tur-secim .cip').forEach(function (c) {
      var secili = c.dataset.tip === tip;
      c.classList.toggle('secili', secili);
      c.setAttribute('aria-pressed', secili);
    });
    var y = f.querySelector('[name="passengers"]'), e = y && f.querySelector('label[for="' + y.id + '"]');
    if (!y || !e) return;
    var kargo = tip === 'Cargo';
    if (!y.dataset.etiket) { y.dataset.etiket = e.textContent; y.dataset.ornek = y.placeholder; y.dataset.tip = y.type; }
    e.textContent = kargo ? M.tipCargo : y.dataset.etiket;
    y.placeholder = kargo ? M.kargoOrnek : y.dataset.ornek;
    if (y.dataset.tip === 'number') y.type = kargo ? 'text' : 'number';
    if (kargo) y.removeAttribute('inputmode'); else y.setAttribute('inputmode', 'numeric');
    if (y.parentElement.classList.contains('sayici')) y.parentElement.classList.toggle('sayici--metin', kargo);
    if (kargo !== (y.dataset.kargo === '1')) y.value = '';
    y.dataset.kargo = kargo ? '1' : '';
    ozetGuncelle(f);
  }
  function sinifAyarla(f, deger, goster) {
    var g = f.querySelector('[name="aircraft_category"]'), c = f.querySelector('.sinif-cip');
    g.value = deger || '';
    g.dataset.goster = goster || '';
    c.querySelector('b').textContent = goster || '';
    c.hidden = !deger;
  }
  charterFormlar.forEach(function (f) {
    var ust = document.createElement('div');
    ust.className = 'tur-secim';
    ust.setAttribute('role', 'group');
    ust.setAttribute('aria-label', M.ucusTuru);
    ust.innerHTML = '<span>' + M.ucusTuru + '</span>' + ['Private', 'Group', 'Cargo'].map(function (tip) {
      return '<button type="button" class="cip" data-tip="' + tip + '">' + M['tip' + tip] + '</button>';
    }).join('') +
      '<input type="hidden" name="flight_type" data-etiket-ad="' + M.ucusTuru + '">' +
      '<input type="hidden" name="aircraft_category" data-etiket-ad="' + M.sinif + '">';
    var cip = document.createElement('p');
    cip.className = 'sinif-cip';
    cip.hidden = true;
    cip.innerHTML = '<span>' + M.sinif + ':</span> <b></b><button type="button" aria-label="' + M.sinifKaldir + '">×</button>';
    f.insertBefore(cip, f.firstChild);
    f.insertBefore(ust, f.firstChild);
    turAyarla(f, 'Private');
    f.addEventListener('click', function (e) {
      var t = e.target.closest('.tur-secim .cip');
      if (t) { charterFormlar.forEach(function (x) { turAyarla(x, t.dataset.tip); }); return; }
      if (e.target.closest('.sinif-cip button')) charterFormlar.forEach(function (x) { sinifAyarla(x); });
    });
    f.addEventListener('reset', function () { setTimeout(function () { turAyarla(f, 'Private'); sinifAyarla(f); }, 0); });
  });
  // Uçak sınıfı kartı: seçimi forma taşır (kaydırma ve mobil panel yukarıdaki dinleyicide)
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.sinif-sec');
    if (!a) return;
    var baslik = a.parentElement.querySelector('h3');
    charterFormlar.forEach(function (f) {
      turAyarla(f, a.dataset.tip || 'Private');
      sinifAyarla(f, a.dataset.sinif, baslik ? baslik.textContent : a.dataset.sinif);
    });
  });

  // Meydan seçimi (küredeki ICAO kodu ya da bölge rozetleri): yakıt formundaki meydan alanını doldurur.
  // Sayfada yakıt formu varsa forma gider (mobilde panel açılır); yoksa yakıt sayfasındaki forma taşır.
  function meydanSec(kod) {
    var alanlar = document.querySelectorAll('input[name="airport"]');
    [].forEach.call(alanlar, function (i) { i.value = kod; i.dispatchEvent(new Event('input', { bubbles: true })); });
    if (mobil()) { sheetAc('yakit'); return; }
    var hedef = document.getElementById('teklif'), alan = hedef && hedef.querySelector('input[name="airport"]');
    if (!alan) { location.href = 'fuel.html?airport=' + encodeURIComponent(kod) + '#teklif'; return; }
    sekmeSec('yakit');
    hedef.scrollIntoView({ behavior: azHareket ? 'auto' : 'smooth', block: 'center' });
    setTimeout(function () { alan.focus({ preventScroll: true }); }, azHareket ? 0 : 500);
    toast(M.meydanEklendi + kod);
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-icao]');
    if (el) meydanSec(el.dataset.icao);
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key !== 'Enter' && e.key !== ' ') || !e.target.matches || !e.target.matches('.icao[data-icao]')) return;
    e.preventDefault(); meydanSec(e.target.dataset.icao);
  });
  // Başka sayfadan meydanla gelindiyse (fuel.html?airport=LTAI#teklif) alan dolu açılır
  var gelenMeydan = /[?&]airport=([A-Za-z]{4})(?:&|$)/.exec(location.search);
  if (gelenMeydan) [].forEach.call(document.querySelectorAll('input[name="airport"]'), function (i) { i.value = gelenMeydan[1].toUpperCase(); i.dispatchEvent(new Event('input', { bubbles: true })); });

  // Bildirim (toast): köşede belirir, kendiliğinden söner; ekran okuyucuya da okunur
  var toastAlan = document.createElement('div');
  toastAlan.className = 'toastlar';
  toastAlan.setAttribute('role', 'status');
  toastAlan.setAttribute('aria-live', 'polite');
  govde.appendChild(toastAlan);
  function toast(metin) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = metin;
    toastAlan.appendChild(t);
    void t.offsetWidth; t.classList.add('acik');
    setTimeout(function () { t.classList.remove('acik'); setTimeout(function () { t.remove(); }, 450); }, 3600);
  }

  // Form gönderimi. AYAR.formAdresi doluysa talep sunucuya gider ve ilgili ekibin e-postasına düşer.
  // Adres boşsa ya da gönderim başarısızsa dört bilgi, ilgili ekibe e-posta / WhatsApp mesajı olarak hazırlanır.
  var formAcilis = Date.now();
  // Bot tuzağı: görünmeyen alan; insan doldurmaz, sunucu dolu gelen talebi sessizce atar
  document.querySelectorAll('form.hizli, .sheet__form').forEach(function (f) {
    var tuzak = document.createElement('div');
    tuzak.className = 'tuzak';
    tuzak.setAttribute('aria-hidden', 'true');
    tuzak.innerHTML = '<label>Website <input type="text" name="web" tabindex="-1" autocomplete="off"></label>';
    f.appendChild(tuzak);
  });
  function sonucKutusu(f) {
    var kutu = f.querySelector('.gonder-secim');
    if (!kutu) {
      kutu = document.createElement('div');
      kutu.className = 'gonder-secim';
      f.appendChild(kutu);
    }
    return kutu;
  }
  function secenekleriGoster(f, tur, metin, baslik, bildirim) {
    var ekip = EKIP[tur], konu = tur === 'charter' ? M.formCharter : M.formYakit;
    var kutu = sonucKutusu(f);
    kutu.innerHTML = '<p>' + baslik + '</p>' +
      '<div class="gonder-secim__butonlar">' +
        '<a class="btn btn--mavi" href="mailto:' + ekip.posta + '?subject=' + encodeURIComponent(konu) + '&amp;body=' + encodeURIComponent(metin) + '">' + M.epostaIle + '</a>' +
        '<a class="btn btn--cizgi" href="https://wa.me/' + ekip.wa + '?text=' + encodeURIComponent(metin) + '" target="_blank" rel="noopener">' + M.waIle + '</a>' +
      '</div>';
    if (!govde.classList.contains('sheet-acik')) toast(bildirim);
    var ilk = kutu.querySelector('a');
    if (ilk) ilk.focus({ preventScroll: true });
    kutu.scrollIntoView({ block: 'nearest', behavior: azHareket ? 'auto' : 'smooth' });
  }
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f.matches('form.hizli, .sheet__form')) return;
    e.preventDefault();
    if (f.classList.contains('gonderiliyor')) return;
    var tur = f.dataset.form || (f.id === 'form-charter' ? 'charter' : 'yakit');
    var konu = tur === 'charter' ? M.formCharter : M.formYakit;
    var alanlar = [].filter.call(f.querySelectorAll('input[name]'), function (i) { return i.name !== 'web' && (i.type !== 'hidden' || i.value); });
    var satirlar = alanlar.map(function (i) {
      var etiket = i.id && f.querySelector('label[for="' + i.id + '"]');
      return (etiket ? etiket.textContent.trim() : i.dataset.etiketAd || i.name) + ': ' + (i.dataset.goster || i.value.trim());
    });
    var metin = konu + '\n\n' + satirlar.join('\n');
    var hazir = tur === 'charter' ? M.hazirCharter : M.hazirYakit;
    if (!AYAR.formAdresi || !window.fetch || !window.URLSearchParams) {
      secenekleriGoster(f, tur, metin, hazir, M.toastHazir);
      olcum('talep_hazirlandi', { talep_turu: tur });
      return;
    }
    var veri = new URLSearchParams();
    veri.append('tur', tur);
    veri.append('dil', dil);
    veri.append('sayfa', location.pathname);
    alanlar.forEach(function (i) { veri.append(i.name, i.value.trim()); });
    veri.append('ozet', satirlar.join('\n'));
    var tuzakAlan = f.querySelector('input[name="web"]');
    veri.append('web', tuzakAlan ? tuzakAlan.value : '');
    veri.append('sure', String(Date.now() - formAcilis));
    var dugme = f.querySelector('[type="submit"]');
    var dugmeMetni = dugme ? dugme.innerHTML : '';
    f.classList.add('gonderiliyor');
    if (dugme) { dugme.disabled = true; dugme.textContent = M.gonderiliyor; }
    var bitir = function () {
      f.classList.remove('gonderiliyor');
      if (dugme) { dugme.disabled = false; dugme.innerHTML = dugmeMetni; }
    };
    fetch(AYAR.formAdresi, { method: 'POST', body: veri, headers: { Accept: 'application/json' }, credentials: 'same-origin' })
      .then(function (r) {
        if (!r.ok) throw new Error('durum ' + r.status);
        return r.json().catch(function () { return { ok: true }; });
      })
      .then(function (j) {
        if (j && j.ok === false) throw new Error('red');
        bitir();
        f.reset();
        var kutu = sonucKutusu(f);
        kutu.innerHTML = '<p class="gonder-secim__tamam" tabindex="-1">' + (tur === 'charter' ? M.gittiCharter : M.gittiYakit) + '</p>';
        toast(M.toastGitti);
        kutu.firstChild.focus({ preventScroll: true });
        kutu.scrollIntoView({ block: 'nearest', behavior: azHareket ? 'auto' : 'smooth' });
        olcum('generate_lead', { talep_turu: tur });
      })
      .catch(function () {
        bitir();
        secenekleriGoster(f, tur, metin, tur === 'charter' ? M.hazirCharter : M.hazirYakit, M.toastHazir);
        olcum('talep_gonderilemedi', { talep_turu: tur });
      });
  });

  // Ölçüm: iletişim bağlantılarına tıklama (telefon, WhatsApp, e-posta). Yalnızca analiz onayı varsa gider.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me/"]');
    if (!a) return;
    var href = a.getAttribute('href');
    olcum('iletisim_tiklama', { kanal: /^tel:/.test(href) ? 'telefon' : /^mailto:/.test(href) ? 'eposta' : 'whatsapp' });
  });

  // Kopyala düğmeleri (telefon, e-posta)
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.kopyala, .sablon-kopyala');
    if (!b) return;
    var sablon = b.classList.contains('sablon-kopyala');
    var metin = sablon
      ? [].map.call(document.querySelectorAll('#' + b.dataset.hedef + ' li'), function (li) { return li.textContent.trim(); }).join('\n')
      : b.dataset.kopyala;
    var tamam = sablon ? M.sablonKopyalandi : M.kopyalandi + metin;
    var yedek = function () {
      var t = document.createElement('textarea');
      t.value = metin; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
      govde.appendChild(t); t.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (x) {}
      t.remove();
      toast(ok ? tamam : M.kopyalanamadi);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(metin).then(function () { toast(tamam); }, yedek);
    } else yedek();
  });

  // Odak hapsi: açık diyalogda Tab yalnız diyalog içinde döner
  function odakHapsi(e, kap) {
    if (e.key !== 'Tab') return;
    var odaklar = [].filter.call(kap.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'), function (el) { return el.offsetParent !== null; });
    if (!odaklar.length) return;
    var ilk = odaklar[0], son = odaklar[odaklar.length - 1];
    if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); }
    else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
  }
  sheetPanel.addEventListener('keydown', function (e) { odakHapsi(e, sheetPanel); });

  // Yasal metinler (Gizlilik, KVKK, Kullanım Koşulları): sayfadan koparmadan sağdan kayan çekmece
  var cekmece = document.createElement('div');
  cekmece.className = 'cekmece';
  cekmece.hidden = true;
  cekmece.innerHTML =
    '<div class="cekmece__perde" data-cekmece-kapat></div>' +
    '<aside class="cekmece__panel" role="dialog" aria-modal="true" aria-labelledby="cekmece-baslik">' +
      '<div class="cekmece__ust"><h2 id="cekmece-baslik"></h2><button type="button" class="cekmece__kapat" data-cekmece-kapat aria-label="' + M.kapat + '"><i></i><i></i></button></div>' +
      '<div class="cekmece__icerik"></div>' +
    '</aside>';
  govde.appendChild(cekmece);
  var cekmecePanel = cekmece.querySelector('.cekmece__panel'), cekmeceOnceki = null;
  function yasalAc(anahtar) {
    var metinler = (window.CW_YASAL || {})[dil];
    var y = metinler && metinler[anahtar];
    if (!y) return false;
    menuKapat(); sheetKapat();
    cekmece.querySelector('#cekmece-baslik').textContent = y.baslik;
    cekmece.querySelector('.cekmece__icerik').innerHTML = '<p class="cekmece__tarih">' + M.yasalGuncel + ': ' + y.tarih + '</p>' + y.govde;
    cekmeceOnceki = document.activeElement;
    cekmece.hidden = false;
    arkaPlan(true);
    kaydirmaKilidi(true);
    void cekmecePanel.offsetWidth;
    cekmece.classList.add('acik');
    cekmece.querySelector('.cekmece__icerik').scrollTop = 0;
    setTimeout(function () { cekmece.querySelector('.cekmece__kapat').focus({ preventScroll: true }); }, 60);
    return true;
  }
  function yasalKapat() {
    if (cekmece.hidden) return false;
    cekmece.classList.remove('acik');
    arkaPlan(false);
    kaydirmaKilidi(false);
    setTimeout(function () { cekmece.hidden = true; }, azHareket ? 0 : 420);
    if (cekmeceOnceki && cekmeceOnceki.focus) cekmeceOnceki.focus({ preventScroll: true });
    return true;
  }
  cekmecePanel.addEventListener('keydown', function (e) { odakHapsi(e, cekmecePanel); });
  cekmece.addEventListener('click', function (e) { if (e.target.closest('[data-cekmece-kapat]')) yasalKapat(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-yasal]');
    if (!a) return;
    if (yasalAc(a.dataset.yasal)) e.preventDefault();
  });

  // Çerez tercihi: altta köşede zarif bar, eşit görünen "Kabul Et / Reddet".
  // 'hepsi' = analiz çerezlerine onay, 'zorunlu' = ret. Seçim 12 ay saklanır, sonra yeniden sorulur.
  // Google Analytics yalnızca onay varsa ve AYAR.ga4 doluysa yüklenir; reklam özellikleri kapalıdır.
  var CEREZ_ANAHTAR = 'cw-cerez', CEREZ_SURE = 365 * 24 * 3600 * 1000;
  function cerezOku() {
    try {
      var c = JSON.parse(localStorage.getItem(CEREZ_ANAHTAR));
      if (!c || !c.secim) return null;
      if (c.tarih && Date.now() - Date.parse(c.tarih) > CEREZ_SURE) return null;
      return c;
    } catch (x) { return null; }
  }
  window.cwCerez = function () { var c = cerezOku(); return c ? c.secim : null; };

  var gaYuklendi = false;
  function analizYukle() {
    if (gaYuklendi || !AYAR.ga4 || window.cwCerez() !== 'hepsi') return;
    gaYuklendi = true;
    window['ga-disable-' + AYAR.ga4] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', AYAR.ga4, { allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: 395 * 24 * 3600 }); // çerez en geç 13 ayda silinir
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(AYAR.ga4);
    document.head.appendChild(s);
  }
  // Onay geri alınınca: ölçüm durur, Google Analytics çerezleri (_ga, _ga_*) silinir
  function analizKapat() {
    if (!AYAR.ga4) return;
    window['ga-disable-' + AYAR.ga4] = true;
    var parcalar = location.hostname.split('.');
    document.cookie.split(';').forEach(function (c) {
      var ad = c.split('=')[0].trim();
      if (!/^_ga(_|$)/.test(ad)) return;
      document.cookie = ad + '=; Max-Age=0; path=/';
      for (var i = 0; i < parcalar.length - 1; i++) {
        document.cookie = ad + '=; Max-Age=0; path=/; domain=.' + parcalar.slice(i).join('.');
      }
    });
  }
  function olcum(ad, ozellik) {
    if (gaYuklendi && window.gtag && window.cwCerez() === 'hepsi') window.gtag('event', ad, ozellik || {});
  }

  var cerezBar = document.createElement('div');
  cerezBar.className = 'cerez';
  cerezBar.setAttribute('role', 'region');
  cerezBar.setAttribute('aria-label', M.cerezBolge);
  cerezBar.hidden = true;
  cerezBar.innerHTML =
    '<p>' + M.cerezMetin + ' <a href="legal.html#gizlilik" data-yasal="gizlilik">' + M.cerezLink + '</a></p>' +
    '<div class="cerez__butonlar">' +
      '<button type="button" class="cerez__btn" data-cerez="hepsi">' + M.cerezKabul + '</button>' +
      '<button type="button" class="cerez__btn" data-cerez="zorunlu">' + M.cerezReddet + '</button>' +
    '</div>';
  govde.appendChild(cerezBar);
  function cerezGoster() {
    cerezBar.hidden = false;
    govde.classList.add('cerez-acik');
    void cerezBar.offsetWidth; cerezBar.classList.add('acik');
  }
  function cerezKaydet(secim, sessiz) {
    try { localStorage.setItem(CEREZ_ANAHTAR, JSON.stringify({ secim: secim, tarih: new Date().toISOString() })); } catch (x) {}
    cerezBar.classList.remove('acik');
    govde.classList.remove('cerez-acik');
    setTimeout(function () { cerezBar.hidden = true; }, azHareket ? 0 : 400);
    if (secim === 'hepsi') analizYukle(); else analizKapat();
    if (!sessiz) toast(M.cerezKaydedildi);
    window.dispatchEvent(new CustomEvent('cw:cerez', { detail: { secim: secim } }));
  }
  cerezBar.addEventListener('click', function (e) { var b = e.target.closest('[data-cerez]'); if (b) cerezKaydet(b.dataset.cerez); });
  // Esc: bar odaktayken "Reddet" sayılır (onay verilmemiş)
  cerezBar.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); cerezKaydet('zorunlu'); } });
  document.addEventListener('click', function (e) { if (e.target.closest('[data-cerez-ac]')) { e.preventDefault(); cerezGoster(); cerezBar.querySelector('button').focus({ preventScroll: true }); } });
  // Analiz kimliği girilmemişse analiz çerezi yoktur: bant çıkmaz, alt bilgideki tercih bağlantısı gizlenir
  if (!AYAR.ga4) [].forEach.call(document.querySelectorAll('[data-cerez-ac]'), function (a) { a.hidden = true; });
  else if (!cerezOku()) setTimeout(cerezGoster, 900);
  else analizYukle();

  // Business Partners: liste bir kez kopyalanır (dikişsiz döngü); Pause düğmesi, ekran dışında durma
  var partnerSerit = document.getElementById('partner-serit');
  if (partnerSerit) {
    var partnerListe = partnerSerit.querySelector('.partner-akis');
    var partnerKopya = partnerListe.cloneNode(true);
    partnerKopya.setAttribute('aria-hidden', 'true');
    partnerKopya.removeAttribute('role');
    partnerKopya.removeAttribute('aria-labelledby');
    partnerKopya.querySelectorAll('img').forEach(function (i) { i.alt = ''; });
    partnerSerit.appendChild(partnerKopya);
    var partnerDur = document.querySelector('.partner-dur');
    if (partnerDur) {
      var durEtiketi = function () {
        var durdu = partnerSerit.classList.contains('durdu');
        partnerDur.setAttribute('aria-pressed', durdu);
        partnerDur.querySelector('span').textContent = durdu ? M.devam : M.dur;
      };
      durEtiketi();
      partnerDur.addEventListener('click', function () { partnerSerit.classList.toggle('durdu'); durEtiketi(); });
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (g) {
        partnerSerit.classList.toggle('gizli', !g[0].isIntersecting);
        if (g[0].isIntersecting) partnerSerit.querySelectorAll('img[loading="lazy"]').forEach(function (i) { i.loading = 'eager'; });
      }, { rootMargin: '200px 0px' }).observe(partnerSerit);
    }
  }

  // Mobil alt bar: ilk ekran geçilince yukarı kayar
  // Contact bölümündeyken gizlenir (aynı bağlantılar orada; KVKK satırını örtmesin)
  var mobilBar = document.querySelector('.mobil-bar');
  var iletisimde = false;
  var iletisim = document.getElementById('iletisim');
  if (mobilBar && iletisim && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (g) { iletisimde = g[0].isIntersecting; mobilBarDurum(); }, { rootMargin: '0px 0px -30% 0px' }).observe(iletisim);
  }
  function mobilBarDurum() {
    if (mobilBar) mobilBar.classList.toggle('gorunsun', !iletisimde && window.scrollY > window.innerHeight * 0.55);
  }

  // Hero videosu: kapak görselinin üstünde, ancak akıcı oynatılabilir olunca belirir.
  // İlk açılışta yükleme sürerken ya da arada tamponlarken video gizlenir, kapak görünür (donmuş kare görünmez).
  // Video kesintisiz döner: iki katman arasında eriyerek geçiş (12 Kasım; önce tek oynatıp son karede kalıyordu, K36).
  // Mobilde dikey kare kullanılır.
  var video = document.getElementById('hero-video');
  if (video) {
    var baglanti = navigator.connection;
    var tasarruf = baglanti && (baglanti.saveData || /2g|3g/.test(baglanti.effectiveType || ''));
    var heroGorunur = true;
    video.style.opacity = 0;
    if (tasarruf || azHareket) {
      video.removeAttribute('autoplay'); video.pause(); video.style.display = 'none';
    } else {
      video.preload = 'auto';
      // Çekim dizisi: hero birden fazla çekimden oluşabilir (uzak, yakın, yakın); sırayla, birbirinin üstünde eriyerek döner
      var klipler = ((mobil() ? video.dataset.mobilDizi : video.dataset.dizi) || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      if (!klipler.length) klipler = [mobil() && video.dataset.mobilSrc ? video.dataset.mobilSrc : ''];
      var klipI = 0;
      var klipAdi = function (yol) { return (yol || '').split('/').pop().split('?')[0]; };
      if (klipler[0] && klipAdi(video.currentSrc) !== klipAdi(klipler[0])) { video.src = klipler[0]; video.load(); }
      // Kesintisiz döngü: iki video katmanı. Etkin video bitmeden az önce öteki baştan başlar ve üstünde eriyerek belirir;
      // ne son karede donma olur ne de başa sararken sıçrama. Tempo biraz yavaşlatılır (daha ağırbaşlı yaklaşma).
      var TEMPO = 0.85, ERIME = 2.2;
      var yedek = video.cloneNode(true);
      yedek.removeAttribute('id'); yedek.removeAttribute('autoplay'); yedek.preload = 'auto';
      yedek.className = 'hero__video-tampon';
      // Birden fazla çekim varsa ikinci katman ilk çekimi boşuna indirmez; sıradaki çekim ana video hazır olunca atanır
      if (klipler.length > 1) { yedek.removeAttribute('src'); while (yedek.firstChild) yedek.removeChild(yedek.firstChild); }
      yedek.style.opacity = 0;
      video.parentNode.appendChild(yedek);
      var aktif = video, gecisVar = false, ilkGosterim = false, gecisSayaci = null;
      var tempoAyarla = function (v) { v.defaultPlaybackRate = TEMPO; v.playbackRate = TEMPO; };
      [video, yedek].forEach(function (v) {
        tempoAyarla(v);
        v.addEventListener('loadedmetadata', function () { tempoAyarla(v); });
        v.addEventListener('error', function () { v.style.display = 'none'; }, true);
      });
      var videoHazir = video.readyState >= 4;
      var videoGoster = function () {
        if (aktif !== video || ilkGosterim || !videoHazir || video.paused || video.readyState < 3) return;
        ilkGosterim = true; video.style.opacity = 1;
      };
      var videoOynat = function () { if (heroGorunur && aktif.paused) aktif.play().catch(function () {}); };
      videoOynat();
      // İkinci katman, ana video oynamaya hazır olunca bir kez arka planda tamponlanır (ilk geçişte boş kalmasın)
      var yedekHazirlandi = false;
      video.addEventListener('canplaythrough', function () {
        videoHazir = true; videoGoster();
        if (yedekHazirlandi) return;
        yedekHazirlandi = true;
        var sonraki = klipler[1 % klipler.length] || video.currentSrc;
        if (sonraki && klipAdi(yedek.currentSrc) !== klipAdi(sonraki)) yedek.src = sonraki;
        if (yedek.readyState < 3) { try { yedek.load(); } catch (x) {} }
      });
      video.addEventListener('playing', videoGoster);
      // İlk gösterimden önce tamponlama olursa kapak görünür kalır (donmuş kare görünmez)
      video.addEventListener('waiting', function () { if (!ilkGosterim) video.style.opacity = 0; });
      function gecis() {
        if (gecisVar) return;
        var eski = aktif, yeni = aktif === video ? yedek : video;
        if (yeni.readyState < 2) { try { yeni.load(); } catch (x) {} }
        gecisVar = true;
        if (yeni.readyState >= 1) { try { yeni.currentTime = 0; } catch (x) {} }
        tempoAyarla(yeni);
        yeni.style.transition = 'none';
        yeni.style.opacity = 0;
        yeni.style.transform = 'scale(1.03)';
        yeni.style.zIndex = 2; eski.style.zIndex = 1;
        yeni.play().then(function () {
          void yeni.offsetWidth;
          yeni.style.transition = 'opacity ' + ERIME + 's cubic-bezier(.22, 1, .36, 1), transform ' + ERIME + 's cubic-bezier(.22, 1, .36, 1)';
          yeni.style.opacity = 1;
          yeni.style.transform = 'scale(1)';
          aktif = yeni;
          klipI = (klipI + 1) % klipler.length;
          gecisSayaci = setTimeout(function () {
            eski.pause();
            eski.style.transition = 'none'; eski.style.opacity = 0;
            gecisVar = false;
            // Boşalan katman sıradaki çekimi arka planda yükler
            var sonraki = klipler[(klipI + 1) % klipler.length];
            if (sonraki && klipAdi(eski.currentSrc) !== klipAdi(sonraki)) { eski.src = sonraki; try { eski.load(); } catch (x) {} }
            if (!heroGorunur) aktif.pause();
          }, ERIME * 1000 + 120);
        }).catch(function () { gecisVar = false; });
      }
      [video, yedek].forEach(function (v) {
        v.addEventListener('timeupdate', function () {
          if (v !== aktif || gecisVar || !v.duration || !ilkGosterim) return;
          if (v.duration - v.currentTime <= ERIME * TEMPO) gecis();
        });
        // Sekme arka plandayken süre atlanmışsa: bittiği anda geçiş
        v.addEventListener('ended', function () { if (v === aktif && heroGorunur) gecis(); });
      });
      // Hero ekrandan çıkınca video durur (kaydırırken çözümleme yükü olmasın), geri gelince sürer
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (g) {
          heroGorunur = g[0].isIntersecting;
          if (heroGorunur) { if (aktif.ended) gecis(); else videoOynat(); }
          else if (!gecisVar) { video.pause(); yedek.pause(); }
        }, { threshold: 0.05 }).observe(video.closest('section') || video);
      }
    }
  }

  // Hero derinliği: aşağı kaydırırken arka plan hafifçe geride kalır, metin yukarı süzülüp solar (masaüstü)
  var heroBolum = document.querySelector('.hero'), heroMedya = heroBolum && heroBolum.querySelector('.hero__media'), heroIcerik = heroBolum && heroBolum.querySelector('.hero__icerik');
  var sonParalaks = -1;
  if (mobilSorgu.addEventListener) mobilSorgu.addEventListener('change', function () { heroParalaks(); });
  function heroParalaks() {
    if (!heroMedya || !heroIcerik) return;
    if (azHareket || mobil()) {
      if (heroMedya.style.transform) { heroMedya.style.transform = ''; heroIcerik.style.transform = ''; heroIcerik.style.opacity = ''; }
      sonParalaks = -1;
      return;
    }
    var y = Math.min(window.scrollY, heroBolum.offsetHeight);
    if (y === sonParalaks) return;
    sonParalaks = y;
    heroMedya.style.transform = 'translate3d(0,' + (y * 0.16).toFixed(1) + 'px,0) scale(' + (1 + y * 0.00008).toFixed(4) + ')';
    heroIcerik.style.transform = 'translate3d(0,' + (y * -0.08).toFixed(1) + 'px,0)';
    heroIcerik.style.opacity = Math.max(0, 1 - y / 520).toFixed(3);
  }

  // Küre: akan çizgiler ve rota gecikmeleri (mobilde daha az akan çizgi)
  var kure = document.getElementById('kure');
  if (kure) {
    var akanlar = kure.querySelector('.akanlar');
    [].forEach.call(kure.querySelectorAll('.rota'), function (r, i) {
      r.style.transitionDelay = (i * 0.05).toFixed(2) + 's';
      // Akan ışıklar SVG'yi her karede yeniden çizer: masaüstünde yarısı, mobilde üçte biri
      if (!akanlar || r.classList.contains('rota--ic') || i % (mobil() ? 3 : 2)) return;
      var a = r.cloneNode();
      a.setAttribute('class', 'akan');
      a.style.setProperty('--sure', (4.5 + (i % 5) * 0.9).toFixed(1) + 's');
      a.style.setProperty('--gecikme', (2.2 + (i * 0.37) % 4).toFixed(2) + 's');
      akanlar.appendChild(a);
    });

    // Küre ekranda değilken sürekli animasyonlar durur
    new IntersectionObserver(function (g) { kure.classList.toggle('durdur', !g[0].isIntersecting); }).observe(kure);

    // Bölge seçimi: ilgili rotaları vurgular, küreyi bölgeye yaklaştırır, paneli değiştirir
    var butonlar = document.querySelectorAll('.bolge-sec button');
    var panel = document.getElementById('bolge-panel');
    var ic = kure.querySelector('.kure__ic');
    // Bölge odağı: [x, y, yakınlaşma]. Türkiye'de meydanlar birbirine yakın olduğu için yakınlaşma daha büyük.
    var odak = { tr: [486, 498, 2.35], eu: [355, 425, 1.68], me: [605, 598, 1.72], ca: [660, 435, 1.62], af: [405, 680, 1.42] };
    function bolgeSec(b) {
      // Yakınlaşma CSS değişkenleriyle: çizgi, düğüm ve etiketler aynı değişkenle dengelenir (kabalaşmaz)
      ['--z', '--tx', '--ty'].forEach(function (ad, i) {
        if (!b) { kure.style.removeProperty(ad); return; }
        kure.style.setProperty(ad, i ? ((500 - odak[b][i - 1]) / 10) + '%' : String(mobil() ? (1.3 + (odak[b][2] - 1) * 0.45).toFixed(2) : odak[b][2]));
      });
      kure.dataset.secili = b || '';
      butonlar.forEach(function (btn) { btn.setAttribute('aria-pressed', btn.dataset.bolge === b); });
      kure.classList.toggle('secim', !!b);
      kure.querySelectorAll('.vurgu').forEach(function (el) { el.classList.remove('vurgu'); });
      if (b) {
        var secici = b === 'tr'
          ? '.rota[data-kaynak="tr"], .akan[data-kaynak="tr"], .rota--ic, .dugum--tr, .etiket[data-bolge="tr"], .icao[data-bolge="tr"]'
          : 'svg [data-bolge="' + b + '"]';
        kure.querySelectorAll(secici).forEach(function (el) { el.classList.add('vurgu'); });
      }
      if (panel) {
        panel.querySelectorAll('[data-icerik]').forEach(function (d) { d.hidden = d.dataset.icerik !== (b || 'hepsi'); });
        panel.removeAttribute('data-anim'); void panel.offsetWidth; panel.setAttribute('data-anim', '');
      }
    }
    // Bölgeyi otomatik tur mu kullanıcı mı açtı: turun açtığı bölgeye tıklamak onu kapatmaz, seçili bırakır
    var kullaniciSecti = false;
    butonlar.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var kapat = btn.getAttribute('aria-pressed') === 'true' && kullaniciSecti;
        kullaniciSecti = true;
        bolgeSec(kapat ? null : btn.dataset.bolge);
      });
    });

    // Mobil: bölge kartları kaydırıldıkça küre o bölgeye döner
    if (panel) {
      var kartDizi = document.createElement('div');
      kartDizi.className = 'bolge-kartlar';
      panel.querySelectorAll('[data-icerik]').forEach(function (d) {
        var k = document.createElement('article');
        k.dataset.kart = d.dataset.icerik;
        k.innerHTML = d.innerHTML;
        if (d.dataset.icerik === 'hepsi') k.querySelector('p').textContent = M.kaydir;
        kartDizi.appendChild(k);
      });
      panel.after(kartDizi);
      kartDizi.onSecim = function (k) { if (mobil()) bolgeSec(k.dataset.kart === 'hepsi' ? null : k.dataset.kart); };
    }

    // Masaüstü: bölüm görünürken bölgeler sırayla gezilir; fare bölümün üstündeyken bekler, bir bölge seçilince durur
    var bolum = kure.closest('section');
    if (bolum && butonlar.length && !azHareket) {
      var turSira = ['tr', 'eu', 'me', 'ca', 'af', null], turI = 0, turBitti = false, fareUstte = false;
      bolum.addEventListener('mouseenter', function () { fareUstte = true; });
      bolum.addEventListener('mouseleave', function () { fareUstte = false; });
      var turuBitir = function () { turBitti = true; bolum.classList.remove('tur-acik'); if (panel) panel.setAttribute('aria-live', 'polite'); };
      butonlar.forEach(function (btn) { btn.addEventListener('click', turuBitir); });
      // Klavyeyle bölüme girilince tur durur (odak bölge değişince kaybolmasın)
      bolum.addEventListener('focusin', turuBitir);
      if (panel) panel.setAttribute('aria-live', 'off');
      bolum.classList.add('tur-acik');
      var tur = setInterval(function () {
        if (turBitti) { clearInterval(tur); return; }
        if (mobil() || fareUstte || bolum.contains(document.activeElement) || !kure.classList.contains('ciz') || kure.classList.contains('durdur')) return;
        bolgeSec(turSira[turI++ % turSira.length]);
      }, 4200);
    }
  }

  // Mobil kaydırmalı kart dizileri: altta konum noktaları
  [].forEach.call(document.querySelectorAll('.paneller, .akis, .bolgeler-izgara, .ilkeler, .siniflar, .bolge-kartlar'), function (dizi) {
    var kartlar = [].filter.call(dizi.children, function (c) { return !c.matches('.akis__cizgi, .not'); });
    if (kartlar.length < 2) return;
    var noktalar = document.createElement('div');
    noktalar.className = 'noktalar';
    noktalar.setAttribute('aria-hidden', 'true');
    kartlar.forEach(function (k, i) { var n = document.createElement('i'); if (!i) n.className = 'etkin'; noktalar.appendChild(n); });
    dizi.after(noktalar);
    var bekle = false;
    dizi.addEventListener('scroll', function () {
      if (bekle) return;
      bekle = true;
      requestAnimationFrame(function () {
        bekle = false;
        var ort = dizi.scrollLeft + dizi.clientWidth / 2, en = 0, fark = Infinity;
        kartlar.forEach(function (k, i) {
          var m = Math.abs(k.offsetLeft + k.offsetWidth / 2 - ort);
          if (m < fark) { fark = m; en = i; }
        });
        [].forEach.call(noktalar.children, function (n, i) { n.classList.toggle('etkin', i === en); });
        if (dizi.onSecim && en !== dizi.sonSecim) { dizi.sonSecim = en; dizi.onSecim(kartlar[en]); }
      });
    }, { passive: true });
  });

  // Kaydırma ile beliren öğeler: bölüm içinde sırayla (mobilde kısa gecikme)
  document.querySelectorAll('section').forEach(function (s) {
    [].forEach.call(s.querySelectorAll('.yukari'), function (el, i) {
      el.style.setProperty('--gec', Math.min(i * (mobil() ? 0.04 : 0.07), mobil() ? 0.16 : 0.56).toFixed(2) + 's');
    });
  });
  function sayac(el) {
    // data-on / data-son: sayının önündeki ve arkasındaki metin (ör. "7/" + 24, 5 + "M+ USG"); yoksa "+"
    var hedef = +el.dataset.say, on = el.dataset.on || '', son = el.dataset.son != null ? el.dataset.son : '+', t0 = null;
    function adim(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = on + Math.round(hedef * e) + son;
      if (p < 1) requestAnimationFrame(adim);
    }
    requestAnimationFrame(adim);
  }
  var gozcu = new IntersectionObserver(function (girdiler) {
    girdiler.forEach(function (g) {
      if (!g.isIntersecting) return;
      var el = g.target;
      if (el.classList.contains('kure')) el.classList.add('ciz');
      else if (el.dataset.say) { if (!azHareket && !mobil()) sayac(el); }
      else el.classList.add('gorunur');
      gozcu.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  document.querySelectorAll('.yukari, .gorsel, .panel, .kure, [data-say]').forEach(function (el) { gozcu.observe(el); });

  // Sayfa içi menü: görünen bölümün bağlantısını işaretler
  var menuLinkleri = [].slice.call(document.querySelectorAll('.sayfa-menu a[href^="#"]'));
  if (menuLinkleri.length) {
    var izci = new IntersectionObserver(function (girdiler) {
      girdiler.forEach(function (g) {
        if (!g.isIntersecting) return;
        menuLinkleri.forEach(function (a) { a.classList.toggle('etkin', a.getAttribute('href') === '#' + g.target.id); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    menuLinkleri.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) izci.observe(s); });
  }

  // Paralaks arka planlar ve planlama çizgisi (mobilde paralaks yok)
  var paralaks = [].slice.call(document.querySelectorAll('[data-paralaks]'));
  var akis = document.getElementById('akis'), dolgu = document.getElementById('akis-dolgu');
  var bekliyor = false;
  function kare() {
    bekliyor = false;
    barDurum();
    mobilBarDurum();
    heroParalaks();
    if (azHareket) return;
    var vh = window.innerHeight;
    // Önce tüm ölçümler, sonra yazımlar (düzen hesaplaması tek seferde)
    var olcumler = mobil() ? [] : paralaks.map(function (el) { return el.parentElement.getBoundingClientRect(); });
    var ar = akis && dolgu ? akis.getBoundingClientRect() : null;
    paralaks.forEach(function (el, i) {
      var r = olcumler[i];
      if (!r) { if (el.style.transform) el.style.transform = ''; return; }
      if (r.bottom < 0 || r.top > vh) return;
      var orta = r.top + r.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (orta * -parseFloat(el.dataset.paralaks)).toFixed(1) + 'px,0)';
    });
    if (ar) {
      var p = Math.min(Math.max((vh * 0.85 - ar.top) / (vh * 0.6), 0), 1);
      dolgu.style.transform = 'scaleX(' + p.toFixed(3) + ')';
    }
  }
  window.addEventListener('scroll', function () { if (!bekliyor) { bekliyor = true; requestAnimationFrame(kare); } }, { passive: true });
  window.addEventListener('resize', kare);
  kare();
})();
