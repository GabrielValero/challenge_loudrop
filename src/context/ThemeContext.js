import React, {useState} from 'react'

const Theme = React.createContext('')

export function ThemeContext({children}){

  const [theme, setTheme] = useState("light")

  return(
    <Theme.Provider value={{theme, setTheme}} >
      {children}
    </Theme.Provider>
  )
}

export default Theme
