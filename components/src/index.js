import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail author = "Sam" timeAgo="Today at 4:46pm" content="Nice Blog Post" avatar={faker.image.people()}/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author = "Jane" timeAgo="Today at 6:49pm" content="Nice Blog Post" avatar={faker.image.people()}/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author = "Jess" timeAgo="Today at 9:24pm" content="Nice Blooog Post" avatar={faker.image.people()}/>
    </ApprovalCard>
    </div> 
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))


// <img alt="avatar" src={faker.image.image()} />
// <img alt="avatar" src='https://source.unsplash.com/random' />