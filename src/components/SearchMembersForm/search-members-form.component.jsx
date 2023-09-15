import './search-members-form.css';
import SearchBar from '../SearchBar/search-bar.component';
import MemberList from '../MemberList/member-list.component';
import members from '../../members.js';
const SearchMembersForm = () => {
    return (
        <div className="search-form">
            <form>
                <SearchBar />
                <MemberList members={members} />

                <button type="clear">Cancel</button>
                <button type="submit">SAVE</button>
            </form>
        </div>
    )
}

export default SearchMembersForm;