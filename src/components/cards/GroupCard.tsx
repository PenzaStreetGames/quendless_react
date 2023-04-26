import {Card} from "../primitives/Card";
import {CardRow} from "../primitives/CardRow";

export type Group = {
    name: string,
    description?: string,
}

export function GroupCard({group}: {group: Group}) {
    return (
        <Card>
            <CardRow>
                <h5>{group.name}</h5>
            </CardRow>
        </Card>
    );
}