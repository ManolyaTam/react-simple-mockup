import './member-item.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const MemberItem = (props) => {
    return (
        <div className='member-item'>
            <p>
                <i class="fa-solid fa-user"></i>
                {props.fullname}</p>

            <input className='checkbox' type="checkbox" checked={props.checked} />
            <span className='checkbox-custom'></span>
        </div>
    )
}

export default MemberItem;