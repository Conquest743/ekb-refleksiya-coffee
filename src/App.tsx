import { baseUrl, Reveal, YandexMap, YandexReviews } from "./blocks";

const mapHref = "https://yandex.com/maps/org/refleksiya_kofe/142157806614/";
const phone = "+7 (963) 271-37-24";
const coords = "60.609682,56.834949";

export default function App() {
  return <div className="site site-reflection" id="top">
    <div className="concept-note"><span>Сайт-концепт</span><span>Неофициальный концепт · не связан с бизнесом</span></div>
    <header className="masthead"><a className="wordmark" href="#top">Рефлексия кофе</a><nav aria-label="Навигация"><a href="#pause">Пауза</a><a href="#reviews">Отзывы</a><a href="#location">Адрес</a></nav><a className="call-button" href="tel:+79632713724">Позвонить</a></header>
    <main>
      <section className="hero" id="pause"><img className="hero-image" src={baseUrl + "hero.webp"} alt="Сгенерированный концепт бирюзовой стены и входа кофейни у ул. Гоголя; не фактическое фото" fetchPriority="high"/><div className="hero-copy"><h1>Рефлексия кофе</h1><p>Камерная кофейня для кофе, короткого разговора и возвращения в городской ритм.</p><a className="primary-action" href="tel:+79632713724">Позвонить в кофейню</a><p className="category-note">Категория: Кофейня · кафе · кофе с собой</p></div></section>
      <Reveal className="reveal-signature"><section className="quiet-copy"><h2>Спокойный адрес для тех, кто хочет остановиться на чашку кофе.</h2><p>В карточке Яндекс Карт указаны кофе с собой, Wi‑Fi, чай и возможность прийти с собакой.</p></section></Reveal>
      <Reveal><section className="reviews" id="reviews"><div><h2>Небольшое пространство, о котором говорят подробно.</h2></div><YandexReviews placeId="142157806614" title="Рефлексия кофе" mapHref={mapHref}/></section></Reveal>
      <section className="location" id="location"><div className="location-copy"><h2>Открыто до вечера</h2><address>ул. Гоголя, 1, Екатеринбург</address><dl><div><dt>Время</dt><dd>Карточка Яндекса показывает открытие до 21:00; полная недельная сетка не отображена.</dd></div><div><dt>Телефон</dt><dd><a href="tel:+79632713724">{phone}</a></dd></div><div><dt>Формат</dt><dd>Кофейня · кафе · кофе с собой</dd></div></dl></div><YandexMap coords={coords} title="Рефлексия кофе, ул. Гоголя, 1" mapHref={mapHref} zoom={16}/></section>
      <section className="closing"><p>Уточните часы и меню одним звонком.</p><a className="primary-action" href="tel:+79632713724">{phone}</a></section>
    </main>
    <footer><span>Сведения по публичной карточке Яндекс Карт · 10.10.2026</span><span>Иллюстрация переосмысляет место; чужое граффити и фото не используются.</span></footer>
  </div>;
}