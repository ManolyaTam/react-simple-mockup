import './search-bar.css';
import { MagnifyingGlass } from '@phosphor-icons/react';
const SearchBar = () => {
    return (
        <div className="search-bar">
            <MagnifyingGlass size={20} color="grey" weight="bold" />
            <input type="search" placeholder="Find members" />
        </div>
    )
}

export default SearchBar;