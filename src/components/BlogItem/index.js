import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {author, id, title, imageUrl, avatarUrl, topic} = itemDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} alt="blog" className="title-image" />
        <div className="details-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="author" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
