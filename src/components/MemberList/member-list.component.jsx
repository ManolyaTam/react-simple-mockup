import './member-list.css';
import MemberItem from "../MemberItem/member-item.component"

const MemberList = (props) => {
    return (<div className="member-list">
        <ul>
            {props.members.map((member) =>
                <li>
                    <MemberItem
                        fullname={member.fullname}
                        checked={member.selected}
                    />
                </li>
            )}
        </ul>
    </div>
    )
}

export default MemberList;