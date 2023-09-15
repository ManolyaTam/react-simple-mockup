import './search-members-form.css';
import { MagnifyingGlass } from '@phosphor-icons/react';
const SearchMembersForm = () => {
    return (
        <div className="search-form">
            <form>
                <div className="search-field">
                    {/* search bar -> seperate component? */}
                    <MagnifyingGlass size={18} color="grey" weight="bold" />
                    <input type="search" placeholder="Find members" />

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