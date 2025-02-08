import { searchContainer, searchInput } from './searchBox.module.css'
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';


export const SearchBox = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter)
   
    return (
        <div className={searchContainer}>
            <p>Find contacts by name</p>
            <input
                className={searchInput}
                type="text"
                value={value}
                onChange={e => dispatch(changeFilter(e.target.value))} />
        </div>
    )
}