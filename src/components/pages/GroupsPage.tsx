import {ContentWrapper} from "../primitives/ContentWrapper";
import {Panel} from "../primitives/Panel";
import {Group, GroupCard} from "../cards/GroupCard";

function getGroups(): Group[] {
    return [
        {
            "name": "IKBO-01-20"
        },
        {
            "name": "IPPO"
        }
    ]
}

export function GroupsPage() {
    const groupCards = getGroups().map((group) => <GroupCard group={group}/>)
    return (
        <ContentWrapper>
            <Panel>
                <h2>Groups</h2>
                {groupCards.map((groupCard) => (
                    <div>
                        {groupCard}
                    </div>
                ))}
            </Panel>
        </ContentWrapper>
    )
}