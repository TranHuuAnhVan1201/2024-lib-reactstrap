import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import ViewBookmark from './ViewBookmark'
import DataLoop from './DataLoop'
import { MyBookmark } from '../../../../utils/Constant'
import { useAppSelector } from '../../../../ReaduxToolkit/Hooks'

const MyBookmarkTab = () => {
    const { gridView } = useAppSelector((state) => state.bookmarkTab);
  return (
    <TabPane tabId="4">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H3 className="mb-0">{MyBookmark}</H3>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default MyBookmarkTab