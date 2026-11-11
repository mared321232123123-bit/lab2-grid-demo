import { useState } from 'react'
import './layout.css'

function Layout({ siteTitle, variant, children }) {
  return <div aria-label={siteTitle} className={`layout ${variant}`}>{children}</div>
}
function Header({ title, userName }) {
  return <header className="siteHeader"><h1>{title}</h1>{userName && <span>Привет, {userName}!</span>}</header>
}
function Sidebar({ items }) {
  return <aside className="sidebar"><nav aria-label="Разделы"><ul>{items.map(([id, text]) =>
    <li key={id}><a href={`#${id}`}>{text}</a></li>
  )}</ul></nav></aside>
}
function MainContent({ children }) {
  return <main className="content">{children}</main>
}
function Footer({ year }) {
  return <footer className="siteFooter">© {year} Учебный сайт</footer>
}

export default function App() {
  const [variant, setVariant] = useState('standard')
  const title = 'Мой React-сайт'
  return <Layout siteTitle={title} variant={variant}>
    <Header title={title} userName="Студент" />
    <Sidebar items={ [['intro', 'Главная'], ['about', 'О нас'], ['services', 'Услуги'], ['contacts', 'Контакты']] } />
    <MainContent>
      <h2 id="intro">Добро пожаловать!</h2>
      <label>Вариант сетки <select value={variant} onChange={event => setVariant(event.target.value)}>
        <option value="standard">Сайдбар слева</option><option value="reverse">Сайдбар справа</option>
        <option value="gap">С пустой колонкой</option>
      </select></label>
      <h3 id="about">О нас</h3><p>Учебный макет с именованными областями CSS Grid.</p>
      <h3 id="services">Что демонстрирует макет</h3><ul><li>Передачу данных через props</li><li>Вложенный JSX через children</li></ul>
      <h3 id="contacts">Контакты</h3><p>Раздел учебного сайта.</p>
    </MainContent>
    <Footer year={new Date().getFullYear()} />
  </Layout>
}
