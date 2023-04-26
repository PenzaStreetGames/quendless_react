import {Panel} from "../primitives/Panel";
import {Queue, QueueCard} from "../cards/QueueCard";
import {ContentWrapper} from "../primitives/ContentWrapper";

function getQueues(): Queue[] {
    return [
        {
            name: "PIS 27.04"
        },
        {
            name: "RKSP 27.04"
        },
    ]
}

export function QueuesPage() {
    const queueCards = getQueues().map((queue) => <QueueCard queue={queue}/>)
    return (
        <ContentWrapper>
            <Panel>
                <h2>Queues</h2>
                {queueCards.map((queueCard) => (
                    <div>
                        {queueCard}
                    </div>
                ))}
            </Panel>
        </ContentWrapper>
    );
}