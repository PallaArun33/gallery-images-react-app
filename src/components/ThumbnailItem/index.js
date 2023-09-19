// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbnailClassName = isActive ? `thumbnail-img active` : `thumbnail-img`

  const onClickImage = () => {
    isActiveImageId(id)
  }

  return (
    <li className="images-list">
      <button type="button" className="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
