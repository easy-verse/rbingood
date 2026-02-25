/* sponsor-i18n.js — RU / EN / PT translations for sponsor.html */

const SPONSOR_I18N = {
  ru: {
    nav: {
      business: 'Для бизнеса',
      packages:  'Пакеты',
      cases:     'Кейсы',
      donate:    'Донат',
      cta:       'Закрыть CSRD \u2192'
    },
    hero: {
      title:    'rbingood \u2014 платформа, где любой спонсирует или участвует в эко-инициативах и сразу видит результат.',
      subtitle: 'Спонсоры, волонтёры, организаторы \u2014 вместе чистят города, пляжи и леса.'
    },
    problem: {
      title:   'Города загрязняются быстрее, чем их успевают убирать.',
      sub:     'Много усилий. Мало результата. Нет прозрачности.',
      portugal: 'Португалия',
      stat1: {
        label: 'переработка пластика',
        src:   'среднее по EU \u2014 42.1% \u00b7 <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php/Recycling_-_secondary_material_production_statistics" target="_blank" rel="noopener" style="color:inherit">Eurostat</a>'
      },
      stat2: {
        label: 'упаковки переработано',
        src:   'цель \u2014 65% \u00b7 <a href="https://www.pontoverde.pt/" target="_blank" rel="noopener" style="color:inherit">Ponto Verde</a>'
      },
      stat3: {
        label: 'домашних отходов на полигоны'
      },
      role: {
        biz: {
          text: '<strong style="color:#0f0f0f;">Я бизнес</strong> \u2014 хочу отчёты на реальных, верифицированных данных и вовлечь команду в живые экопроекты',
          btn:  'Бизнес (от €350)'
        },
        ind: {
          text: '<strong style="color:#0f0f0f;">Мне не всё равно</strong> \u2014 хочу быть причастным, даже когда не могу участвовать лично',
          btn:  'Физ. лицо (от €1)'
        }
      }
    },
    b2b: {
      label: 'Для бизнеса',
      title: 'Бизнесу грозит штраф 5% оборота за CSRD',
      stat1: {
        desc: 'от годового оборота \u2014 максимальный штраф за несоответствие CSRD (директива ЕС 2024/1760)',
        src:  'Источник: <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1760" target="_blank" rel="noopener" style="color:#555;text-decoration:underline;text-underline-offset:2px;">EU CSRD Directive 2024/1760</a>'
      },
      stat2: {
        desc: 'компаний в ЕС должны отчитаться по ESRS S3 уже в 2026 году'
      },
      quote: '\u00ab61% людей не верят ESG-отчётам без доказательств.\u00bb',
      cta:   'Вам нужны верифицированные действия, а не намерения.<br>И нужны они до дедлайна.'
    },
    solution: {
      label:    'Решение',
      title:    'Единый партнёр для ESG и HR',
      emphasis: 'Два сценария \u2014 одно решение'
    },
    smb: {
      title:    'Отчётность ESG',
      subtitle: 'Для Sustainability-менеджеров и CFO',
      li1: 'CSRD-ready Data Pack (ESRS S3)',
      li2: 'Отчёт в течение 2 недель после ивента',
      li3: 'Инвестиционная привлекательность',
      li4: 'Официальный договор и инвойс',
      li5: 'До 6 человек \u2014 тестовое мероприятие',
      li6: 'Ваш реальный вклад уже сейчас',
      li7: 'Дифференциация от конкурентов',
      roi: 'Большинство компаний говорят про ценности \u2192 ты показываешь',
      btn: 'Обсудить вашу отчётность'
    },
    hr: {
      title:    'Вовлечение \u2014 Тимбилдинг с пользой',
      subtitle: 'Для HR и фаундеров',
      li1: 'Тимбилдинг лучше, чем пицца',
      li2: 'HR-метрики \u2014 вовлечённость / часы / количество',
      li3: 'Организуем всё под ключ',
      li4: 'Ценности команды \u2014 employer brand без усилий HR',
      li5: 'Ваш логотип на событии',
      li6: 'Фото/видео контент включён',
      li7: 'До 10 участников на тимбилдинг',
      roi: '70% Gen Z выбирают \u00abзелёных\u00bb работодателей \u2014 <a href="https://www.deloitte.com/content/dam/assets-shared/docs/campaigns/2025/2025-genz-millennial-survey.pdf" target="_blank" rel="noopener" style="color:inherit">Deloitte, 2025</a>',
      btn: 'Обсудить тимбилдинг'
    },
    addon: {
      title:    'Что ещё интересует?',
      btn:      'Написать нам',
      more:     'Больше ивентов',
      report:   'Инд. отчётность',
      catering: 'Кейтеринг',
      merch:    'Мерч',
      pr:       'Расширенный PR',
      master:   'Мастер-класс',
      barter:   'Бартер'
    },
    process: {
      label: 'Процесс',
      title: '4 шага до старта',
      s1: { num: 'Шаг 01', title: 'Звонок',          text: 'Обсуждение формата, локации, формата отчётности и количества участников.' },
      s2: { num: 'Шаг 02', title: 'Договор и оплата', text: 'Подписываем договор, выставляем инвойс. Оплата до ивента \u2014 карта или банковский перевод.' },
      s3: { num: 'Шаг 03', title: 'Мероприятие',      text: 'Инструктаж команды, уборка с GPS-трекингом, взвешивание мешков, фото до/после.' },
      s4: { num: 'Шаг 04', title: 'Отчёт',            text: 'PDF + Excel в течение 2 недель. CSRD-ready. Готово к аудиту.' }
    },
    pricing: {
      label: 'Пакеты',
      title: 'Выберите свой пакет'
    },
    pkg1: {
      name:   'Тестовый ивент',
      price:  'от €350',
      period: 'разовый ивент',
      li1: 'До 6 участников',
      li3: 'Фото до/после',
      li4: 'Договор и инвойс',
      addon: '+ ESG Data Pack \u2014 €150',
      roi: 'Быстрый старт без риска',
      btn: 'Организовать звонок'
    },
    pkg2: {
      badge:  'Популярный выбор',
      period: '4 ивента в год (квартально)',
      li1: 'До 10 участников на ивент',
      li2: 'ESG Data Pack включён',
      li3: 'Ваш логотип на событии',
      li4: 'Фото/видео контент',
      li5: 'Приоритетная поддержка',
      li6: 'Договор и инвойс',
      li7: 'Custom audit trail / white label data room',
      roi: 'Системный ESG-партнёр',
      btn: 'Организовать звонок'
    },
    pkg3: {
      name:   'Индивидуальные решения',
      price:  'Обсуждаемо',
      period: 'Обсуждаемое количество участников',
      li1: 'От 10 участников',
      li2: 'Полный ESG Data Pack',
      li3: 'Брендирование мероприятий',
      li4: 'Extended PR + СМИ',
      li5: 'White label data room',
      li6: 'Полная страховка',
      roi: 'Максимальный PR-эффект',
      btn: 'Обсудить условия'
    },
    proof: {
      label: 'Кейсы',
      title: 'Мы уже работаем.',
      all: {
        name: 'Все ивенты',
        m1: { label: 'ивентов проведено' },
        m2: { label: 'мусора собрано' },
        m3: { label: 'участника сообщества' },
        m4: { label: 'спонсированных ивентов' }
      },
      praia: {
        m1: { label: 'мусора убрано' },
        m2: { label: 'ивентов подряд' },
        m3: { label: 'партнёрство' },
        quote: '\u00abЛучшая ESG-инициатива года. Продлили контракт на 2026.\u00bb'
      },
      dhb: {
        m1: { label: 'посетителей' },
        m2: { label: 'окурков собрано' },
        m3: { label: 'мастер-классов' },
        desc: 'Механика \u00ab20 окурков = напиток\u00bb вовлекла тысячи гостей в эко-инициативу прямо на фестивале.'
      }
    },
    mech: {
      label: 'Механика',
      title: 'Как мы проводим ивенты',
      m1: { title: 'Инструктаж',      text: 'Безопасность и сортировка \u2014 10\u201315 минут. Коротко, по делу, перед стартом.' },
      m2: { title: 'Выдача инвентаря', text: 'Перчатки, мешки, захваты. Всё необходимое \u2014 от нас.' },
      m3: { title: 'Командная уборка', text: 'До 2 часов активной работы. Каждый участник знает свою зону.' },
      m4: { title: 'Результат',        text: 'Финальная сортировка, взвешивание, фото до/после, GPS-трекинг.' },
      m5: { title: 'Утилизация',       text: 'Мусор уходит в правильные контейнеры \u2014 пластик, стекло, общие отходы.' },
      m6: { title: 'Общение',          text: 'После уборки \u2014 напитки и знакомства. Самая живая часть.' },
      m7: { title: 'Завершение',       text: 'Участники получают вознаграждение*, спонсор \u2014 отчёт с данными.' },
      footnote: '* Если уборка спонсируемая \u2014 участники получают от €10 или напитки и снеки от партнёров.'
    },
    ind: {
      label:    'Для неравнодушных людей',
      title:    'Каждый вклад важен',
      emphasis: 'Вам не нужно быть корпорацией, чтобы быть полезным.'
    },
    donate: {
      type:    'Донат',
      title:   'Поддержать донатом',
      text:    'Не можете прийти лично? Любая сумма покрывает реальные расходы \u2014 инвентарь, логистику, утилизацию. 100% прозрачность расходов.',
      disclaimer: 'Нажимая \u00abСделать донат\u00bb, вы соглашаетесь с нашим <a href="assets/info/terms-and-conditions-RU.txt" target="_blank" style="color:#0f0f0f;text-decoration:underline;">Пользовательским соглашением</a> и тем, что донат является безвозвратным.',
      btn:  'Сделать донат',
      note: 'Оплата картой \u2014 Visa, Mastercard, Apple Pay'
    },
    comm: {
      type:  'Вступить в сообщество',
      price: 'Бесплатно',
      text:  'Приходите на уборку в Лиссабоне. Нетворкинг, реальный результат, живые люди.<br><strong>400+ активных участников.</strong>',
      event: 'Ближайший ивент'
    },
    roadmap: {
      label:    'План на 2026',
      title:    '2026: App + Расширение',
      emphasis: 'Мы не стоим на месте. Присоединяйтесь сейчас, чтобы расти с нами.',
      r1: { status: 'Активно',    text: 'Увеличение количества ивентов, пляжи и парки, спонсорские пакеты запущены.' },
      r2: { status: 'Релиз',      text: 'Выплаты участникам*, карта событий, ESG-дашборд для спонсоров.' },
      r3: { city: 'Фестивали', status: 'Расширение', text: 'Партнёрство с крупными фестивалями. Геймификация формата \u00abмусор = валюта\u00bb.' },
      bottom: 'rbingood \u2014 это не акция. Это повторяемый процесс.'
    },
    barter: {
      label:    'Локальный бизнес',
      title:    'Стань героем своего района',
      subtitle: 'Бартер \u2014 без бюджета',
      text:     'Если вы \u2014 кафе, ресторан или магазин рядом с зоной уборки, вы можете поддержать ивент. Вода, еда, скидки участникам \u2014 мы сделаем вас частью события.',
      b1: { title: 'Трафик клиентов',       text: 'Участники заходят к вам после уборки.' },
      b2: { title: 'Статус \u00abДобрый сосед\u00bb', text: 'Табличка "Спонсировано вашим кафе".' },
      b3: { title: 'Без бюджета',            text: 'Бартер (вода, напитки, снеки).' },
      b4: { title: 'Лояльность',             text: 'Превратите соседей в постоянных гостей.' },
      btn: 'Стать бартер-партнёром'
    },
    faq: {
      label: 'FAQ',
      title: 'Частые вопросы',
      biz:    { label: 'Бизнес / ESG' },
      people: { label: 'Люди / Логистика' },
      q1: 'Что именно входит в ESG Data Pack?',
      a1: 'PDF и Excel файлы: GPS-координаты места уборки, общий вес собранного мусора с разбивкой по фракциям (пластик, стекло, смешанный), фото-отчёт «до/после», расчёт предотвращённого выброса CO₂ и количество участников.',
      q2: 'Как это помогает с CSRD?',
      a2: 'Мы предоставляем полный Data Pack в течение 2 недель после ивента. Это позволяет быстро закрыть показатели по стандарту ESRS S3 перед подачей годовой отчётности.',
      q3: 'Можно ли брендировать ивент?',
      a3: 'Да. Логотип на мешках, жилетах, фото/видео контент с вашим брендингом. Опция доступна за дополнительную плату (+€150 к Тестовому ивенту) или включена в пакеты Standard и выше.',
      q4: 'Сколько стоит тимбилдинг?',
      a4: 'Базовая стоимость \u2014 €60 за человека (минимальный заказ \u2014 €350). Включает: подбор локации, инвентарь (захваты, перчатки), инструктор, вывоз мусора и базовый фото-контент.',
      q5: 'Есть ли страховка?',
      a5: 'Да. Полная страховка гражданской ответственности на время проведения ивента. Все участники проходят обязательный инструктаж по технике безопасности перед началом.',
      q6: 'Что даёт донат €1?',
      a6: 'Даже €1 важен. Вы получите персональный Отчёт-открытку на email: фото именно того участка, который был убран благодаря вам, с указанием веса мусора и GPS-координат.',
      q7: 'Нужен ли опыт или инвентарь?',
      a7: 'Нет. Мы предоставляем всё необходимое оборудование (захваты, перчатки, мешки) и проводим обучение на месте. Участвовать могут все желающие от 16 лет.',
      q8: 'Что если плохая погода?',
      a8: 'Мы следим за прогнозом. В случае сильного дождя или шторма предупреждаем участников за 24 часа и переносим ивент. В качестве альтернативы предлагаем уборку в парковой зоне.',
      q9: 'Как присоединиться?',
      a9: 'Самый быстрый способ \u2014 через Telegram или WhatsApp. Выберите удобную дату в календаре, нажмите \u00abConfirm\u00bb \u2014 и вы в списке.'
    },
    cta: {
      quote: '\u00abМы, Ксения и Катя, лично гарантируем качество каждого ивента. rbingood \u2014 это наша репутация. Если что-то пойдёт не так \u2014 вернём деньги без вопросов.\u00bb',
      title: 'Начните сегодня \u2014 ответим за 1 час',
      sub:   'Не откладывайте ESG на декабрь. Сделайте первый шаг сейчас.',
      btn1:  'Закрыть CSRD за €350',
      btn2:  'Сделать донат / участвовать в ивенте',
      or:    'или напишите нам:'
    },
    partners: {
      label: 'Партнёры и поддержка',
      ilgiz: { desc: 'Воркшопы, лекции, производство изделий из переработанного сырья.' }
    },
    footer: {
      meta: '\u00a9 2026 rbingood. Лиссабон.'
    }
  },

  /* ──────────────────────────────── ENGLISH ──────────────────────────────── */
  en: {
    nav: {
      business: 'For Business',
      packages:  'Packages',
      cases:     'Cases',
      donate:    'Donate',
      cta:       'Close CSRD \u2192'
    },
    hero: {
      title:    'rbingood \u2014 a platform where anyone sponsors or joins eco-initiatives and sees the impact immediately.',
      subtitle: 'Sponsors, volunteers, organizers \u2014 cleaning cities, beaches, and forests together.'
    },
    problem: {
      title:    'Cities are getting polluted faster than they can be cleaned.',
      sub:      'Lots of effort. Little result. No transparency.',
      portugal: 'Portugal',
      stat1: {
        label: 'plastic recycling rate',
        src:   'EU average \u2014 42.1% \u00b7 <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php/Recycling_-_secondary_material_production_statistics" target="_blank" rel="noopener" style="color:inherit">Eurostat</a>'
      },
      stat2: {
        label: 'packaging recycled',
        src:   'target \u2014 65% \u00b7 <a href="https://www.pontoverde.pt/" target="_blank" rel="noopener" style="color:inherit">Ponto Verde</a>'
      },
      stat3: {
        label: 'household waste to landfills'
      },
      role: {
        biz: {
          text: '<strong style="color:#0f0f0f;">I\'m a business</strong> \u2014 I need reports with real, verified data and want to get our team involved in live eco-projects',
          btn:  'Business (from \u20ac350)'
        },
        ind: {
          text: '<strong style="color:#0f0f0f;">I care</strong> \u2014 I want to be involved, even when I can\'t attend in person',
          btn:  'Individual (from \u20ac1)'
        }
      }
    },
    b2b: {
      label: 'For Business',
      title: 'Businesses face a 5% revenue fine for CSRD non-compliance',
      stat1: {
        desc: 'of annual revenue \u2014 maximum fine for CSRD non-compliance (EU Directive 2024/1760)',
        src:  'Source: <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1760" target="_blank" rel="noopener" style="color:#555;text-decoration:underline;text-underline-offset:2px;">EU CSRD Directive 2024/1760</a>'
      },
      stat2: {
        desc: 'companies in the EU must report under ESRS S3 already in 2026'
      },
      quote: '\u201c61% of people don\u2019t trust ESG reports without evidence.\u201d',
      cta:   'You need verified actions, not intentions.<br>And you need them before the deadline.'
    },
    solution: {
      label:    'Solution',
      title:    'A single partner for ESG and HR',
      emphasis: 'Two scenarios \u2014 one solution'
    },
    smb: {
      title:    'ESG Reporting',
      subtitle: 'For Sustainability managers and CFOs',
      li1: 'CSRD-ready Data Pack (ESRS S3)',
      li2: 'Report within 2 weeks after the event',
      li3: 'Investment attractiveness',
      li4: 'Official contract and invoice',
      li5: 'Up to 6 people \u2014 pilot event',
      li6: 'Your real contribution right now',
      li7: 'Differentiation from competitors',
      roi: 'Most companies talk about values \u2192 you show them',
      btn: 'Discuss your reporting'
    },
    hr: {
      title:    'Engagement \u2014 Teambuilding with impact',
      subtitle: 'For HR and founders',
      li1: 'Teambuilding better than pizza',
      li2: 'HR metrics \u2014 engagement / hours / headcount',
      li3: 'We organize everything end-to-end',
      li4: 'Team values \u2014 employer brand without HR effort',
      li5: 'Your logo at the event',
      li6: 'Photo/video content included',
      li7: 'Up to 10 participants for teambuilding',
      roi: '70% of Gen Z choose \u2018green\u2019 employers \u2014 <a href="https://www.deloitte.com/content/dam/assets-shared/docs/campaigns/2025/2025-genz-millennial-survey.pdf" target="_blank" rel="noopener" style="color:inherit">Deloitte, 2025</a>',
      btn: 'Discuss teambuilding'
    },
    addon: {
      title:    'What else interests you?',
      btn:      'Write to us',
      more:     'More events',
      report:   'Ind. reporting',
      catering: 'Catering',
      merch:    'Merch',
      pr:       'Extended PR',
      master:   'Masterclass',
      barter:   'Barter'
    },
    process: {
      label: 'Process',
      title: '4 steps to get started',
      s1: { num: 'Step 01', title: 'Call',               text: 'Discussion of format, location, reporting format and number of participants.' },
      s2: { num: 'Step 02', title: 'Contract & payment',  text: 'We sign the contract, issue an invoice. Payment before the event \u2014 card or bank transfer.' },
      s3: { num: 'Step 03', title: 'Event',               text: 'Team briefing, cleanup with GPS tracking, bag weighing, before/after photos.' },
      s4: { num: 'Step 04', title: 'Report',              text: 'PDF + Excel within 2 weeks. CSRD-ready. Audit-ready.' }
    },
    pricing: {
      label: 'Packages',
      title: 'Choose your package'
    },
    pkg1: {
      name:   'Pilot Event',
      price:  'from \u20ac350',
      period: 'one-time event',
      li1: 'Up to 6 participants',
      li3: 'Before/after photos',
      li4: 'Contract and invoice',
      addon: '+ ESG Data Pack \u2014 \u20ac150',
      roi: 'Quick start, no risk',
      btn: 'Schedule a call'
    },
    pkg2: {
      badge:  'Most popular',
      period: '4 events per year (quarterly)',
      li1: 'Up to 10 participants per event',
      li2: 'ESG Data Pack included',
      li3: 'Your logo at the event',
      li4: 'Photo/video content',
      li5: 'Priority support',
      li6: 'Contract and invoice',
      li7: 'Custom audit trail / white label data room',
      roi: 'Systematic ESG partner',
      btn: 'Schedule a call'
    },
    pkg3: {
      name:   'Custom solutions',
      price:  'Negotiable',
      period: 'Negotiable number of participants',
      li1: 'From 10 participants',
      li2: 'Full ESG Data Pack',
      li3: 'Event branding',
      li4: 'Extended PR + Media',
      li5: 'White label data room',
      li6: 'Full insurance',
      roi: 'Maximum PR impact',
      btn: 'Discuss terms'
    },
    proof: {
      label: 'Cases',
      title: 'We\u2019re already working.',
      all: {
        name: 'All events',
        m1: { label: 'events completed' },
        m2: { label: 'kg of waste collected' },
        m3: { label: 'community members' },
        m4: { label: 'sponsored events' }
      },
      praia: {
        m1: { label: 'kg of waste removed' },
        m2: { label: 'consecutive events' },
        m3: { label: 'partnership' },
        quote: '\u201cBest ESG initiative of the year. Extended the contract to 2026.\u201d'
      },
      dhb: {
        m1: { label: 'visitors' },
        m2: { label: 'cigarette butts collected' },
        m3: { label: 'days of workshops' },
        desc: 'The \u201c20 butts = a drink\u201d mechanic engaged thousands of guests in an eco-initiative right at the festival.'
      }
    },
    mech: {
      label: 'Mechanics',
      title: 'How we run events',
      m1: { title: 'Briefing',             text: 'Safety and sorting \u2014 10\u201315 minutes. Short, focused, before the start.' },
      m2: { title: 'Equipment distribution', text: 'Gloves, bags, grabbers. Everything you need \u2014 provided by us.' },
      m3: { title: 'Team cleanup',          text: 'Up to 2 hours of active work. Each participant knows their zone.' },
      m4: { title: 'Results',               text: 'Final sorting, weighing, before/after photos, GPS tracking.' },
      m5: { title: 'Disposal',              text: 'Waste goes to the right containers \u2014 plastic, glass, general waste.' },
      m6: { title: 'Socializing',           text: 'After cleanup \u2014 drinks and networking. The most lively part.' },
      m7: { title: 'Wrap-up',              text: 'Participants receive rewards*, sponsor gets a data report.' },
      footnote: '* If the cleanup is sponsored \u2014 participants receive from \u20ac10 or drinks and snacks from partners.'
    },
    ind: {
      label:    'For the caring',
      title:    'Every contribution matters',
      emphasis: 'You don\u2019t need to be a corporation to make a difference.'
    },
    donate: {
      type:    'Donate',
      title:   'Support with a donation',
      text:    'Can\u2019t attend in person? Any amount covers real expenses \u2014 equipment, logistics, disposal. 100% cost transparency.',
      disclaimer: 'By clicking \u201cDonate\u201d, you agree to our <a href="assets/info/terms-and-conditions-EN.txt" target="_blank" style="color:#0f0f0f;text-decoration:underline;">Terms and Conditions</a> and acknowledge that donations are non-refundable.',
      btn:  'Donate',
      note: 'Pay by card \u2014 Visa, Mastercard, Apple Pay'
    },
    comm: {
      type:  'Join the community',
      price: 'Free',
      text:  'Join a cleanup in Lisbon. Networking, real results, real people.<br><strong>400+ active members.</strong>',
      event: 'Next event'
    },
    roadmap: {
      label:    '2026 Plan',
      title:    '2026: App + Expansion',
      emphasis: 'We\u2019re not standing still. Join now to grow with us.',
      r1: { status: 'Active',    text: 'Increasing number of events, beaches and parks, sponsorship packages launched.' },
      r2: { status: 'Release',   text: 'Participant payouts*, event map, ESG dashboard for sponsors.' },
      r3: { city: 'Festivals', status: 'Expansion', text: 'Partnership with major festivals. Gamification of the \u201cwaste = currency\u201d format.' },
      bottom: 'rbingood is not a campaign. It\u2019s a repeatable process.'
    },
    barter: {
      label:    'Local Business',
      title:    'Become the hero of your neighborhood',
      subtitle: 'Barter \u2014 no budget needed',
      text:     'Are you a caf\u00e9, restaurant or shop near the cleanup zone? You can support the event. Water, food, discounts for participants \u2014 we\u2019ll make you part of the event.',
      b1: { title: 'Customer traffic',        text: 'Participants stop by after the cleanup.' },
      b2: { title: '\u201cGood Neighbor\u201d status', text: 'A sign \u201cSponsored by your caf\u00e9\u201d.' },
      b3: { title: 'No budget required',      text: 'Barter (water, drinks, snacks).' },
      b4: { title: 'Loyalty',                 text: 'Turn neighbors into regular guests.' },
      btn: 'Become a barter partner'
    },
    faq: {
      label: 'FAQ',
      title: 'Frequently asked questions',
      biz:    { label: 'Business / ESG' },
      people: { label: 'People / Logistics' },
      q1: 'What exactly is included in the ESG Data Pack?',
      a1: 'PDF and Excel files: GPS coordinates of the cleanup location, total weight of collected waste by category (plastic, glass, mixed), before/after photo report, calculated CO\u2082 emission offset, and participant count.',
      q2: 'How does this help with CSRD?',
      a2: 'We provide a complete Data Pack within 2 weeks after the event. This allows you to quickly fulfill ESRS S3 requirements before submitting your annual report.',
      q3: 'Can the event be branded?',
      a3: 'Yes. Logo on bags, vests, photo/video content with your branding. Available for an additional fee (+\u20ac150 to the Pilot Event) or included in Standard packages and above.',
      q4: 'How much does teambuilding cost?',
      a4: 'Base price \u2014 \u20ac60 per person (minimum order \u2014 \u20ac350). Includes: venue selection, equipment (grabbers, gloves), instructor, waste disposal, and basic photo content.',
      q5: 'Is there insurance?',
      a5: 'Yes. Full public liability insurance for the duration of the event. All participants receive a mandatory safety briefing before the start.',
      q6: 'What does a \u20ac1 donation do?',
      a6: 'Even \u20ac1 matters. You\u2019ll receive a personal Report Card by email: a photo of the specific area cleaned thanks to you, with the weight of waste collected and GPS coordinates.',
      q7: 'Do I need experience or equipment?',
      a7: 'No. We provide all necessary equipment (grabbers, gloves, bags) and conduct an on-site briefing. Anyone 16+ can participate.',
      q8: 'What if the weather is bad?',
      a8: 'We monitor the forecast. In case of heavy rain or storm, we notify participants 24 hours in advance and reschedule the event. As an alternative, we offer cleanup in a park area.',
      q9: 'How do I join?',
      a9: 'The quickest way is via Telegram or WhatsApp. Choose a convenient date in the calendar, click \u201cConfirm\u201d \u2014 and you\u2019re on the list.'
    },
    cta: {
      quote: '\u201cWe, Ksenia and Kate, personally guarantee the quality of every event. rbingood is our reputation. If anything goes wrong \u2014 we\u2019ll refund without question.\u201d',
      title: 'Start today \u2014 we\u2019ll respond within 1 hour',
      sub:   'Don\u2019t put off ESG until December. Take the first step now.',
      btn1:  'Close CSRD for \u20ac350',
      btn2:  'Donate / participate in an event',
      or:    'or write to us:'
    },
    partners: {
      label: 'Partners & Support',
      ilgiz: { desc: 'Workshops, lectures, production of items from recycled materials.' }
    },
    footer: {
      meta: '\u00a9 2026 rbingood. Lisbon.'
    }
  },

  /* ─────────────────────────────── PORTUGUESE ────────────────────────────── */
  pt: {
    nav: {
      business: 'Para Empresas',
      packages:  'Pacotes',
      cases:     'Casos',
      donate:    'Doa\u00e7\u00e3o',
      cta:       'Fechar CSRD \u2192'
    },
    hero: {
      title:    'rbingood \u2014 uma plataforma onde qualquer pessoa patrocina ou participa em iniciativas eco e v\u00ea o resultado imediatamente.',
      subtitle: 'Patrocinadores, volunt\u00e1rios, organizadores \u2014 juntos limpando cidades, praias e florestas.'
    },
    problem: {
      title:    'As cidades est\u00e3o a poluir-se mais depressa do que conseguem ser limpas.',
      sub:      'Muito esfor\u00e7o. Poucos resultados. Sem transpar\u00eancia.',
      portugal: 'Portugal',
      stat1: {
        label: 'taxa de reciclagem de pl\u00e1stico',
        src:   'm\u00e9dia EU \u2014 42.1% \u00b7 <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php/Recycling_-_secondary_material_production_statistics" target="_blank" rel="noopener" style="color:inherit">Eurostat</a>'
      },
      stat2: {
        label: 'de embalagens recicladas',
        src:   'meta \u2014 65% \u00b7 <a href="https://www.pontoverde.pt/" target="_blank" rel="noopener" style="color:inherit">Ponto Verde</a>'
      },
      stat3: {
        label: 'res\u00edduos dom\u00e9sticos em aterros'
      },
      role: {
        biz: {
          text: '<strong style="color:#0f0f0f;">Sou empresa</strong> \u2014 quero relat\u00f3rios com dados reais e verificados e envolver a equipa em projetos ecol\u00f3gicos reais',
          btn:  'Empresa (a partir de \u20ac350)'
        },
        ind: {
          text: '<strong style="color:#0f0f0f;">Eu me importo</strong> \u2014 quero estar envolvido, mesmo quando n\u00e3o posso participar pessoalmente',
          btn:  'Particular (a partir de \u20ac1)'
        }
      }
    },
    b2b: {
      label: 'Para Empresas',
      title: 'As empresas enfrentam multas de 5% do volume de neg\u00f3cios por incumprimento da CSRD',
      stat1: {
        desc: 'do volume de neg\u00f3cios anual \u2014 multa m\u00e1xima por incumprimento da CSRD (Diretiva UE 2024/1760)',
        src:  'Fonte: <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1760" target="_blank" rel="noopener" style="color:#555;text-decoration:underline;text-underline-offset:2px;">EU CSRD Directive 2024/1760</a>'
      },
      stat2: {
        desc: 'empresas na UE devem reportar ao abrigo da ESRS S3 j\u00e1 em 2026'
      },
      quote: '\u201c61% das pessoas n\u00e3o confiam em relat\u00f3rios ESG sem provas.\u201d',
      cta:   'Precisa de a\u00e7\u00f5es verificadas, n\u00e3o de inten\u00e7\u00f5es.<br>E precisa delas antes do prazo.'
    },
    solution: {
      label:    'Solu\u00e7\u00e3o',
      title:    'Um parceiro \u00fanico para ESG e RH',
      emphasis: 'Dois cen\u00e1rios \u2014 uma solu\u00e7\u00e3o'
    },
    smb: {
      title:    'Relat\u00f3rio ESG',
      subtitle: 'Para gestores de Sustentabilidade e CFOs',
      li1: 'Data Pack CSRD-ready (ESRS S3)',
      li2: 'Relat\u00f3rio em 2 semanas ap\u00f3s o evento',
      li3: 'Atratividade de investimento',
      li4: 'Contrato oficial e fatura',
      li5: 'At\u00e9 6 pessoas \u2014 evento piloto',
      li6: 'A sua contribui\u00e7\u00e3o real agora',
      li7: 'Diferencia\u00e7\u00e3o dos concorrentes',
      roi: 'A maioria das empresas fala de valores \u2192 tu mostras',
      btn: 'Discutir o seu relat\u00f3rio'
    },
    hr: {
      title:    'Envolvimento \u2014 Team building com impacto',
      subtitle: 'Para RH e fundadores',
      li1: 'Team building melhor do que pizza',
      li2: 'M\u00e9tricas de RH \u2014 envolvimento / horas / participantes',
      li3: 'Organizamos tudo do in\u00edcio ao fim',
      li4: 'Valores da equipa \u2014 employer brand sem esfor\u00e7o de RH',
      li5: 'O seu log\u00f3tipo no evento',
      li6: 'Conte\u00fado foto/v\u00eddeo inclu\u00eddo',
      li7: 'At\u00e9 10 participantes no team building',
      roi: '70% da Gera\u00e7\u00e3o Z escolhe empregadores \u2018verdes\u2019 \u2014 <a href="https://www.deloitte.com/content/dam/assets-shared/docs/campaigns/2025/2025-genz-millennial-survey.pdf" target="_blank" rel="noopener" style="color:inherit">Deloitte, 2025</a>',
      btn: 'Discutir team building'
    },
    addon: {
      title:    'O que mais lhe interessa?',
      btn:      'Escreva-nos',
      more:     'Mais eventos',
      report:   'Relat\u00f3rio ind.',
      catering: 'Catering',
      merch:    'Merchandising',
      pr:       'PR Alargado',
      master:   'Masterclass',
      barter:   'Barter'
    },
    process: {
      label: 'Processo',
      title: '4 passos para come\u00e7ar',
      s1: { num: 'Passo 01', title: 'Chamada',              text: 'Discuss\u00e3o do formato, localiza\u00e7\u00e3o, formato de relat\u00f3rio e n\u00famero de participantes.' },
      s2: { num: 'Passo 02', title: 'Contrato e pagamento',  text: 'Assinamos o contrato, emitimos a fatura. Pagamento antes do evento \u2014 cart\u00e3o ou transfer\u00eancia banc\u00e1ria.' },
      s3: { num: 'Passo 03', title: 'Evento',                text: 'Briefing da equipa, limpeza com rastreamento GPS, pesagem de sacos, fotos antes/depois.' },
      s4: { num: 'Passo 04', title: 'Relat\u00f3rio',         text: 'PDF + Excel em 2 semanas. CSRD-ready. Pronto para auditoria.' }
    },
    pricing: {
      label: 'Pacotes',
      title: 'Escolha o seu pacote'
    },
    pkg1: {
      name:   'Evento Piloto',
      price:  'a partir de \u20ac350',
      period: 'evento \u00fanico',
      li1: 'At\u00e9 6 participantes',
      li3: 'Fotos antes/depois',
      li4: 'Contrato e fatura',
      addon: '+ ESG Data Pack \u2014 \u20ac150',
      roi: 'In\u00edcio r\u00e1pido sem risco',
      btn: 'Marcar chamada'
    },
    pkg2: {
      badge:  'Escolha popular',
      period: '4 eventos por ano (trimestral)',
      li1: 'At\u00e9 10 participantes por evento',
      li2: 'ESG Data Pack inclu\u00eddo',
      li3: 'O seu log\u00f3tipo no evento',
      li4: 'Conte\u00fado foto/v\u00eddeo',
      li5: 'Suporte priorit\u00e1rio',
      li6: 'Contrato e fatura',
      li7: 'Custom audit trail / white label data room',
      roi: 'Parceiro ESG sistem\u00e1tico',
      btn: 'Marcar chamada'
    },
    pkg3: {
      name:   'Solu\u00e7\u00f5es personalizadas',
      price:  'Negoci\u00e1vel',
      period: 'N\u00famero de participantes negoci\u00e1vel',
      li1: 'A partir de 10 participantes',
      li2: 'ESG Data Pack completo',
      li3: 'Branding do evento',
      li4: 'PR Alargado + Media',
      li5: 'White label data room',
      li6: 'Seguro completo',
      roi: 'Impacto m\u00e1ximo de PR',
      btn: 'Discutir condi\u00e7\u00f5es'
    },
    proof: {
      label: 'Casos',
      title: 'J\u00e1 estamos a trabalhar.',
      all: {
        name: 'Todos os eventos',
        m1: { label: 'eventos realizados' },
        m2: { label: 'kg de res\u00edduos recolhidos' },
        m3: { label: 'membros da comunidade' },
        m4: { label: 'eventos patrocinados' }
      },
      praia: {
        m1: { label: 'kg de res\u00edduos removidos' },
        m2: { label: 'eventos consecutivos' },
        m3: { label: 'parceria' },
        quote: '\u201cMelhor iniciativa ESG do ano. Renovaram o contrato para 2026.\u201d'
      },
      dhb: {
        m1: { label: 'visitantes' },
        m2: { label: 'beatas recolhidas' },
        m3: { label: 'dias de workshops' },
        desc: 'A mec\u00e2nica \u201c20 beatas = uma bebida\u201d envolveu milhares de convidados numa iniciativa eco mesmo no festival.'
      }
    },
    mech: {
      label: 'Mec\u00e2nica',
      title: 'Como realizamos os eventos',
      m1: { title: 'Briefing',                  text: 'Seguran\u00e7a e triagem \u2014 10\u201315 minutos. Curto, direto ao ponto, antes do in\u00edcio.' },
      m2: { title: 'Distribui\u00e7\u00e3o de equipamento', text: 'Luvas, sacos, apanhadores. Tudo o necess\u00e1rio \u2014 por nossa conta.' },
      m3: { title: 'Limpeza em equipa',          text: 'At\u00e9 2 horas de trabalho ativo. Cada participante conhece a sua zona.' },
      m4: { title: 'Resultados',                 text: 'Triagem final, pesagem, fotos antes/depois, rastreamento GPS.' },
      m5: { title: 'Elimina\u00e7\u00e3o',               text: 'Os res\u00edduos v\u00e3o para os contentores certos \u2014 pl\u00e1stico, vidro, res\u00edduos gerais.' },
      m6: { title: 'Conv\u00edvio',                 text: 'Ap\u00f3s a limpeza \u2014 bebidas e networking. A parte mais animada.' },
      m7: { title: 'Encerramento',               text: 'Os participantes recebem recompensas*, o patrocinador \u2014 um relat\u00f3rio com dados.' },
      footnote: '* Se a limpeza for patrocinada \u2014 os participantes recebem a partir de \u20ac10 ou bebidas e snacks dos parceiros.'
    },
    ind: {
      label:    'Para quem se importa',
      title:    'Cada contribui\u00e7\u00e3o importa',
      emphasis: 'N\u00e3o precisa de ser uma corpora\u00e7\u00e3o para fazer a diferen\u00e7a.'
    },
    donate: {
      type:    'Doa\u00e7\u00e3o',
      title:   'Apoiar com uma doa\u00e7\u00e3o',
      text:    'N\u00e3o pode participar pessoalmente? Qualquer valor cobre despesas reais \u2014 equipamento, log\u00edstica, elimina\u00e7\u00e3o. 100% transpar\u00eancia de custos.',
      disclaimer: 'Ao clicar em \u201cFazer doa\u00e7\u00e3o\u201d, concorda com os nossos <a href="assets/info/terms-and-conditions-EN.txt" target="_blank" style="color:#0f0f0f;text-decoration:underline;">Termos e Condi\u00e7\u00f5es</a> e reconhece que as doa\u00e7\u00f5es s\u00e3o n\u00e3o reembols\u00e1veis.',
      btn:  'Fazer doa\u00e7\u00e3o',
      note: 'Pagamento por cart\u00e3o \u2014 Visa, Mastercard, Apple Pay'
    },
    comm: {
      type:  'Juntar-se \u00e0 comunidade',
      price: 'Gr\u00e1tis',
      text:  'Venha a uma limpeza em Lisboa. Networking, resultados reais, pessoas reais.<br><strong>400+ membros ativos.</strong>',
      event: 'Pr\u00f3ximo evento'
    },
    roadmap: {
      label:    'Plano 2026',
      title:    '2026: App + Expans\u00e3o',
      emphasis: 'N\u00e3o estamos parados. Junte-se agora para crescer connosco.',
      r1: { status: 'Ativo',       text: 'Aumento do n\u00famero de eventos, praias e parques, pacotes de patroc\u00ednio lan\u00e7ados.' },
      r2: { status: 'Lan\u00e7amento', text: 'Pagamentos a participantes*, mapa de eventos, painel ESG para patrocinadores.' },
      r3: { city: 'Festivais', status: 'Expans\u00e3o', text: 'Parceria com festivais importantes. Gamifica\u00e7\u00e3o do formato \u201cres\u00edduo = moeda\u201d.' },
      bottom: 'O rbingood n\u00e3o \u00e9 uma campanha. \u00c9 um processo repet\u00edvel.'
    },
    barter: {
      label:    'Neg\u00f3cio Local',
      title:    'Torne-se o her\u00f3i do seu bairro',
      subtitle: 'Barter \u2014 sem or\u00e7amento necess\u00e1rio',
      text:     '\u00c9 um caf\u00e9, restaurante ou loja perto da zona de limpeza? Pode apoiar o evento. \u00c1gua, comida, descontos para os participantes \u2014 faremos de si parte do evento.',
      b1: { title: 'Tr\u00e1fego de clientes',             text: 'Os participantes passam por si ap\u00f3s a limpeza.' },
      b2: { title: 'Estatuto \u201cBom Vizinho\u201d',          text: 'Uma placa \u201cPatrocinado pelo seu caf\u00e9\u201d.' },
      b3: { title: 'Sem or\u00e7amento',                   text: 'Barter (\u00e1gua, bebidas, snacks).' },
      b4: { title: 'Fidelidade',                        text: 'Transforme os vizinhos em clientes habituais.' },
      btn: 'Tornar-se parceiro barter'
    },
    faq: {
      label: 'FAQ',
      title: 'Perguntas frequentes',
      biz:    { label: 'Empresa / ESG' },
      people: { label: 'Pessoas / Log\u00edstica' },
      q1: 'O que est\u00e1 inclu\u00eddo no ESG Data Pack?',
      a1: 'Ficheiros PDF e Excel: coordenadas GPS do local de limpeza, peso total de res\u00edduos recolhidos por categoria (pl\u00e1stico, vidro, mistos), relat\u00f3rio fotogr\u00e1fico antes/depois, c\u00e1lculo de CO\u2082 evitado e contagem de participantes.',
      q2: 'Como \u00e9 que isso ajuda com a CSRD?',
      a2: 'Fornecemos um Data Pack completo dentro de 2 semanas ap\u00f3s o evento. Isso permite-lhe fechar rapidamente os indicadores ESRS S3 antes de submeter o relat\u00f3rio anual.',
      q3: 'O evento pode ter branding?',
      a3: 'Sim. Log\u00f3tipo nos sacos, coletes, conte\u00fado foto/v\u00eddeo com o seu branding. Dispon\u00edvel por custo adicional (+\u20ac150 ao Evento Piloto) ou inclu\u00eddo nos pacotes Standard e superiores.',
      q4: 'Quanto custa o team building?',
      a4: 'Pre\u00e7o base \u2014 \u20ac60 por pessoa (pedido m\u00ednimo \u2014 \u20ac350). Inclui: sele\u00e7\u00e3o de local, equipamento (apanhadores, luvas), instrutor, recolha de res\u00edduos e conte\u00fado fotogr\u00e1fico b\u00e1sico.',
      q5: 'Existe seguro?',
      a5: 'Sim. Seguro de responsabilidade civil completo durante o evento. Todos os participantes recebem um briefing de seguran\u00e7a obrigat\u00f3rio antes do in\u00edcio.',
      q6: 'O que faz uma doa\u00e7\u00e3o de \u20ac1?',
      a6: 'Mesmo \u20ac1 \u00e9 importante. Receber\u00e1 um Relat\u00f3rio Pessoal por email: uma foto da \u00e1rea espec\u00edfica que foi limpa gra\u00e7as a si, com o peso dos res\u00edduos recolhidos e as coordenadas GPS.',
      q7: 'Preciso de experi\u00eancia ou equipamento?',
      a7: 'N\u00e3o. Fornecemos todo o equipamento necess\u00e1rio (apanhadores, luvas, sacos) e fazemos uma forma\u00e7\u00e3o no local. Podem participar todos com 16+ anos.',
      q8: 'E se o tempo estiver mau?',
      a8: 'Monitorizamos a previs\u00e3o. Em caso de chuva forte ou tempestade, avisamos os participantes com 24 horas de anteced\u00eancia e reagendamos o evento. Como alternativa, oferecemos limpeza numa \u00e1rea de parque.',
      q9: 'Como me inscrevo?',
      a9: 'A forma mais r\u00e1pida \u00e9 via Telegram ou WhatsApp. Escolha uma data conveniente no calend\u00e1rio, clique em \u201cConfirmar\u201d \u2014 e est\u00e1 na lista.'
    },
    cta: {
      quote: '\u201cN\u00f3s, Ksenia e Kate, garantimos pessoalmente a qualidade de cada evento. O rbingood \u00e9 a nossa reputa\u00e7\u00e3o. Se algo correr mal \u2014 reembolsamos sem perguntas.\u201d',
      title: 'Comece hoje \u2014 respondemos em 1 hora',
      sub:   'N\u00e3o adie o ESG para dezembro. D\u00ea o primeiro passo agora.',
      btn1:  'Fechar CSRD por \u20ac350',
      btn2:  'Fazer doa\u00e7\u00e3o / participar num evento',
      or:    'ou escreva-nos:'
    },
    partners: {
      label: 'Parceiros e Apoio',
      ilgiz: { desc: 'Workshops, palestras, produ\u00e7\u00e3o de artigos a partir de materiais reciclados.' }
    },
    footer: {
      meta: '\u00a9 2026 rbingood. Lisboa.'
    }
  }
};

/* ── i18n engine ─────────────────────────────────────────────────────────── */

function _getKey(obj, path) {
  return path.split('.').reduce(function(o, k) { return o && o[k]; }, obj);
}

function applyLang(lang) {
  var t = SPONSOR_I18N[lang];
  if (!t) return;

  // text elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var val = _getKey(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  // html elements
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var val = _getKey(t, el.dataset.i18nHtml);
    if (val !== undefined) el.innerHTML = val;
  });

  // lang attribute + active button
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('rbi-lang', lang); } catch(e) {}
}

/* ── init ─────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function() {
  var saved;
  try { saved = localStorage.getItem('rbi-lang'); } catch(e) {}
  applyLang(saved && SPONSOR_I18N[saved] ? saved : 'ru');

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { applyLang(btn.dataset.lang); });
  });
});
