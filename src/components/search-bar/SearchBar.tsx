import { useForm, SubmitHandler } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import classes from './searchbar.module.css'


const SearchBar = ({onSearch}:{onSearch: (search:[string, string]) => void}) => {

    const {register, handleSubmit, reset} = useForm({
        defaultValues: {search: ''}
    })

    const handleSearch: SubmitHandler<{search:string}> = ({search}) => {     
        onSearch([search, 'search'])
        reset()
    }

  return (
    <div className={classes.searchbar}>
        <form onSubmit={handleSubmit(handleSearch)}>
            <input placeholder="Search" type="text" {...register('search', { required: true })}/>
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    </div>
  )
}

export default SearchBar