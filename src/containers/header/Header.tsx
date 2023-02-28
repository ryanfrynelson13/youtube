import SearchBar from "../../components/search-bar/SearchBar"
import classes from './header.module.css'

type HeaderProps = {
    onSearch: (search: [string, string]) => void
}

const Header = ({onSearch}:HeaderProps) => {
  return (
    <header className={classes.header}>
        <img onClick={() => onSearch(['','search'])} src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-only-png.png" alt="" />
        <SearchBar onSearch={onSearch}/>
    </header>
  )
}

export default Header