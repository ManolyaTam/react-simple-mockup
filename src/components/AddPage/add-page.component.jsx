import './add-page.css';
import SearchMembersForm from "../SearchMembersForm/search-members-form.component";

const AddPage = () => {
    return (
        <div className='add-page'>
            <h4>Add memebers to Front-end development team</h4>
            <SearchMembersForm />
        </div>
    )
}

export default AddPage;