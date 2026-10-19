# CLAUDE.md

Сайт event-фотографки Лізи Голярчук: https://www.event-fotografin-hamburg.de
Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Репозиторій: `elizabethholiarchuk-jpg/event-fotografin-hamburg`.

## Мови

- Сайт двомовний: німецька в корені (`/`), англійська під `/en`.
- Кожна зміна контенту робиться в обох мовах, німецькій і англійській.
- На англійських сторінках посилання ведуть на `/en/...` версії, на німецьких — на німецькі. Типова помилка: однакове посилання в обох гілках `lang === 'de' ? … : …`.
- Тексти лежать у різних місцях: словники `src/i18n/de.ts` і `src/i18n/en.ts`, але багато англійських сторінок мають тексти прямо у своєму `page.tsx`. Перед правкою шукати текст по всьому `src/` (grep), а не лише в словниках.

## Структура

- Сторінки: `src/app/<de-slug>/page.tsx` і `src/app/en/<en-slug>/page.tsx`.
- Спільні компоненти сторінок: `src/components/pages/*` (HomePage, PortfolioPage, …).
- Сторінки послуг (Eventfotograf, Konferenz, Messe, Corporate) будуються з `src/components/ServicePage.tsx`.
- Weihnachtsfeier (`/weihnachtsfeier-fotograf-hamburg`, `/en/christmas-party-photographer-hamburg`) має власний компонент `src/components/pages/ChristmasPartyPage.tsx` з теплою палітрою лише для цих сторінок.
- Дані:
  - `src/data/portfolio.ts` — кейси; фото кейсу беруться з `public/images/portfolio/<slug>/` (`01.webp` — обкладинка).
  - `src/data/insights.ts` — статті.
  - `src/data/videoOptions.ts` — тексти й ціни двох варіантів відео; ті самі тексти на сторінках цін і на `/video-support`, правити лише тут.
  - `src/data/weihnachtsfeier.ts` — фото й alt-тексти (DE/EN) для сторінок Weihnachtsfeier.

## Маршрути, меню, sitemap, редиректи

- Новий маршрут завжди додавати в `src/app/sitemap.xml/route.ts` з правильними hreflang (`de`, `en`, `x-default` → DE):
  - якщо slug однаковий у DE і EN — у `bilingualRoutes`;
  - якщо slug різний (наприклад `/preise` ↔ `/en/pricing`) — у `asymmetricRoutes`.
- Для нової сторінки з різними slug ще й у `src/components/Header.tsx`: `routeMap` (інакше перемикач мов веде не туди) і, якщо це послуга, `deServiceLinks` / `enServiceLinks` (меню «Leistungen» / «Services»). Футер (`src/components/Footer.tsx`) має свій окремий список послуг.
- Старі адреси перенаправляються 301-редиректами в `src/middleware.ts`. Нічого не видаляти без редиректу. Разові старі адреси — у мапі `LEGACY_REDIRECTS` (перевіряється перед правилом для `/de`).
- `robots.ts` нічого не забороняє; `/video-support` тепер відкрита для індексації.
- Кожна нова сторінка послуги або міста отримує: смугу з ключовими цифрами (`src/components/KeyFacts.tsx`, дані в `src/data/keyFacts.ts`; у `ServicePage` вона вже є), JSON-LD (`buildServicePageJsonLd` + FAQ), запис у sitemap і в `public/llms.txt`.
- Факти для ШІ-пошуку не дублювати видимим списком на сторінці: кожен факт показувати один раз у природному місці (цифри, FAQ, пакети), а повний набір тримати в JSON-LD і `public/llms.txt`.
- `lastmod` у sitemap береться з `src/data/lastmod.json`. Його оновлює `scripts/lastmod.mjs` після кожного `npm run build` (порівнює вміст зібраних сторінок; дата змінюється лише там, де сторінка справді змінилась). Комітити `lastmod.json` разом зі зміною. Sitemap бачить нову дату з наступної збірки, тому на Vercel важливо, щоб файл був закомічений.
- IndexNow (Bing): ключ у `public/8e90718dd9839331aa67da0df13e0a20.txt`. Після кожного успішного продакшн-деплою GitHub Action `.github/workflows/indexnow.yml` надсилає змінені URL (за `lastmod`). Вручну: `npm run indexnow` (усі URL), `npm run indexnow -- --since 2026-10-19`, `--dry-run`.

## Title і метадані

- `src/app/layout.tsx` має шаблон `"%s | Liza Holiarchuk"`. Не дописувати «| Liza Holiarchuk» у title сторінки, інакше ім'я подвоїться.
- Якщо title треба дослівно, без імені в кінці: `title: { absolute: "…" }`.
- Шаблон не діє на саму німецьку головну (`src/app/page.tsx`), там title без імені.
- JSON-LD: `buildServicePageJsonLd` і `buildFaqPageJsonLd` у `src/lib/schema.ts`. `path` для англійських сторінок має починатися з `/en`.
- Дані про бізнес (адреса, sameAs, Person, каталог пакетів з цінами) — у `buildOrganizationSchema` / `buildPersonSchema` в `src/lib/schema.ts`; виводяться лише на головних (DE/EN), щоб не дублювались.

## Бізнес

- Пріоритет: фото і відео для виставок (Messe) для іноземних експонентів і агенцій.
- Далі: конференції та корпоративні події.
- База — Гамбург, працюю по Німеччині та Європі.
- Адреса бізнесу: Roggenkamp 4, 22305 Hamburg (Impressum, Datenschutz, футер, JSON-LD). Стара адреса Rehhoffstrasse 10 ніде не має лишатися.
- Ціни — тільки з /preise: `src/data/pricing.ts` (пакети) і `src/data/videoOptions.ts` (Social-Clip). Не вписувати суми вручну в тексти, брати з цих констант.
- Відео, два варіанти: Social-Clip 450 € (Ліза знімає на смартфон, наступного дня) і Event-Video (ціна за проєктом, з відеографом).
- Ім'я відеографа (Valeriy Riyako) згадується лише на `/video-support`. Деінде — нейтрально «Videograf aus meinem Team» / «videographer from my team».
- Weihnachtsfeier: до 4 годин від 1.200 € (+ MwSt.).

## Тексти

- Тон бренду — такий, як уже створено на сайті.
- Прості прямі речення, як від живого фотографа, без маркетингового пафосу («ganzheitlich», «nahtlos», «erstklassig» тощо не вживати).
- Тексти, які Ліза дає дослівно, вставляти без змін.

## Картинки

- Формат webp. Нові фото: довша сторона максимум 2000 px, якість ~80 (`cwebp` і `sips` є на машині). Не збільшувати маленькі фото.
- Оригінали (JPG з камери) не класти в `public/`: усе з `public/` потрапляє на сайт. Оригінали тримати в окремій папці в корені й додавати її в `.gitignore` (як `/weihnachtsfeier/`).
- Показувати через `next/image`: hero з `priority` (або eager + fetchPriority high), решта lazy, з width/height або `fill` у контейнері фіксованого розміру, щоб макет не зсувався.
- Hero головної: `public/images/home/02-hero/hero.webp` (2560 px, стиснутий).
- Локальний `next start` інколи довго стискає великі картинки або зависає на першому запиті. Тоді допомагає перезапуск сервера, на продакшн це не впливає.

## Кольори

- Базові кольори — змінні в `src/app/globals.css` (`--color-*`, а також `--page-bg`, `--header-bg`, `--footer-bg`).
- Окрема сторінка може перевизначити їх через `<style>` з `:root { … }` (так зроблено в `ChristmasPartyPage`), решта сайту при цьому не змінюється.

## Статті (Insights)

- Статті лежать у `src/data/insights.ts`.
- Статті з noindex (`isPlaceholder: true`) — це чернетки. Не відкривати їх (не прибирати `isPlaceholder`, не додавати в індекс) без дозволу Лізи.

## Git і коміти

- Робоча гілка — `main`, з неї оновлюється сайт.
- Перед комітом завжди запускати `npm run build` і переконатися, що збірка проходить.
- Ніколи не пушити без підтвердження Лізи. Коли Ліза просить кілька окремих комітів, робити саме стільки.
- `package-lock.json` не комітити, якщо залежності не змінювались (`npm install` додає туди поле `engines`, це не потрібно).
- Доступ до GitHub налаштований через `gh`. З пісочниці `git push` / `git fetch` можуть не бачити логін (keychain), тоді запускати їх поза пісочницею.
- Гілку `locale-swap` залишити як є: не зливати і не видаляти. Її єдиний окремий коміт (hero-картинка) уже є в `main` у стиснутому вигляді.
- `.claude/` в `.gitignore`. У `.claude/launch.json` є конфіг `site-prod` (`next start` на порту 3123) для перевірки в браузері після `npm run build`.

## Відомі дрібниці (ще не зроблено)

- У футері немає посилання на Weihnachtsfeier.
- Німецька головна має title без «| Liza Holiarchuk».
- На YouTube у назві Social-Clip-відео помилка: «ZEPPELIN SMM20226».
