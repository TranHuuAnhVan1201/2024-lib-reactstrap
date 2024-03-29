import { Link } from 'react-router-dom'
import { Href, MyPortfolioTitle } from '../../../../../utils/Constant'
import { H4, P } from '../../../../../AbstractElements'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { galleryImagePath } from '../../../../../Data/Apps/SearchResult/SearchResultData'

const GalleryImageDescription = () => {
  return (
    <Gallery>
      {galleryImagePath.slice(0,8).map((item, index) => (
          <figure key={index} className="col-xl-3 col-sm-6 box-col-25">
            <Item original={require(`/public/assets/images/${item}`)} width="1024" height="768" caption="images">
              {({ ref, open }) => (
                <Link to={Href} onClick={open}>
                  <img height={500} width={500} className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={require(`/public/assets/images/${item}`)} alt="thumbnail"/>
                  <div className="caption">
                    <H4>{MyPortfolioTitle}</H4>
                    <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                  </div>
                </Link>
              )}
            </Item>
          </figure>
        ))}
    </Gallery>
  )
}

export default GalleryImageDescription