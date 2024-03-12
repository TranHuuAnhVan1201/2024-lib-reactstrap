import { useState } from 'react'
import { Alert, Button } from 'reactstrap';
import { Check} from '../../../../utils/Constant';
import { P } from '../../../../AbstractElements';

const TimeAlert = () => {
    const [active, setActive] = useState(true);
    return (
        <Alert color='light' className={`border-warning alert-dismissible fade p-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-warning">
                <i className="icon-timer" />
            </div>
            <P>{"Your time Over after "}<strong className="txt-dark">5</strong> {"minute"}</P>
            <Button className="p-0 border-0 me-2 ms-auto" onClick={() => { setActive(false) }}>
                <span className="bg-warning text-light px-3 py-1">{Check}</span>
            </Button>
        </Alert>
    )
}

export default TimeAlert