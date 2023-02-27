import SearchBar from "../../components/search-bar/SearchBar"
import classes from './header.module.css'

type HeaderProps = {
    onSearch: (search: string) => void
}

const Header = ({onSearch}:HeaderProps) => {
  return (
    <header className={classes.header}>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-only-png.png" alt="" />
        <SearchBar onSearch={onSearch}/>
    </header>
  )
}

export default Header