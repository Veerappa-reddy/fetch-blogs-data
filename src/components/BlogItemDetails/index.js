import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      content: data.content,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    const {title, topic, content, avatarUrl, imageUrl, author} = blogData
    return (
      <div className="clicked-item-container">
        <h1 className="title-css">{title}</h1>
        <div className="render-container">
          <div className="click-item-profile-container">
            <img src={avatarUrl} alt="blogie" className="author-css" />
            <p>{author}</p>
          </div>
          <img src={imageUrl} alt={title} className="topic-image-css" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
