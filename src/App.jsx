//Crie um app que permite aos usuário escolher e salvar suas preferências de idioma e tema (claro/escuro), usando useContext
import './App.css'

import { useState, createContext, useContext } from 'react'
const UserContext = createContext({ theme:'light', language:'~ptbr', toggleTheme: ()=>{}, changeLanguage: ()=>{}})

function App() {

  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('pt')
  
  const toggleTheme = () =>{
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }

  const changeLanguage = (event) =>{
    setLanguage(event.target.value)
  }

  const btnLanguage = {
    en:'Change theme',
    pt:'Mudar tema',
    es:'Cambiar tema',
    it:'Cambia tema',
    fr:'Changer le thème',
    jp:'テーマ変更',
    ch:'更改主题'
  }
  return (
    <>
      <UserContext.Provider value ={{ theme, language, toggleTheme, changeLanguage }}>
        <div>
          <Toolbar />
          <button onClick={toggleTheme}>{btnLanguage[language]}</button>
          <select value={language} onChange={changeLanguage}>
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
            <option value="fr">Français</option>
            <option value="jp">日本語</option>
            <option value="ch">中文</option>
          </select>
        </div>
      </UserContext.Provider>
    </>
  )
}

function Toolbar(){
  const { theme, language } = useContext(UserContext)

  const languageText = {
    en:<>Welcome!<br />Current theme - </>,
    pt:<>Bem-vindo!<br />Tema atual - </>,
    es:<>Bienvenido!<br />Tema acual - </>,
    it:<>Benvenuto!<br />Tema attuale - </>,
    fr:<>Bienvenu!<br />Thème actuel - </>,
    jp:<>ようこそ!<br />現在のテーマ - </>,
    ch:<>欢迎!<br />当前主题 - </>
  }
  return(
    <div className={theme==='light' ? 'light' : 'dark'}>
      {languageText[language]}{theme}
    </div>
  )
}

export default App
