import { CardBody, Collapse } from 'reactstrap'
import { FilterPropsType } from '../../../../../Types/Apps/SocialApp/SocialApp'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { friendsData } from '../../../../../Data/Apps/SocialApp/SocialAppData'
import { Link } from 'react-router-dom'
import { Href, Photo } from '../../../../../utils/Constant'

const ActivityFeedCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {friendsData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image width={50} height={50} className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.imageName}`)} alt="user"/>
            <div className='flex-grow-1'>
              <span className="f-w-600 d-block">{data.title}</span>
              <P>{"Commented on Shaun Park's "}
                <Link to={Href}>{Photo}</Link>
              </P>
              <span className="light-span">{data.time} {'Ago'}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  )
}

export default ActivityFeedCollapse