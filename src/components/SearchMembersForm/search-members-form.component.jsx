import './search-members-form.css';
import SearchBar from '../SearchBar/search-bar.component';
const SearchMembersForm = () => {
    return (
        <div className="search-form">
            <form>
                <SearchBar />
                <div className="search-field">
                    {/* list -> seperate component? */}
                    <ul>
                        {/* use map to render a reusable component here <MemberItem/> */}
                        <li>
                            <p>Carolien Bloeme</p>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <p>Song Bao</p>
                            <input type="checkbox" checked />
                        </li>
                    </ul>

                    <button type="clear">Cancel</button>
                    <button type="submit">SAVE</button>

                </div>
            </form>
        </div>
    )
}

export default SearchMembersForm;