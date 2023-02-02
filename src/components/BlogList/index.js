import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoader: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      id: eachItem.id,
      title: eachItem.title,
      topic: eachItem.topic,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({blogsData: updatedData, isLoader: false})
  }

  render() {
    const {blogsData, isLoader} = this.state
    return (
      <div className="blog-list-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogsData.map(eachItemData => (
              <BlogItem itemDetails={eachItemData} key={eachItemData.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
