import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import ViewBookmark from '../BookmarksTabs/ViewBookmark'
import { CommonTabCardProp } from '../../../../Types/Apps/Bookmark/BookmarkTypes'
import { NoBookmarksFound } from '../../../../utils/Constant'

const CommonTabCard = ({ tabId, title }: CommonTabCardProp) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H3 className="mb-0">{title}</H3>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className="details-bookmark text-center">
            <div className="no-favourite">
              <span>{NoBookmarksFound}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default CommonTabCard