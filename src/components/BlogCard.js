import React from 'react'
import { Card, Image} from 'semantic-ui-react'

const BlogCard = ({ blog }) => {



    return (
        <Card color='blue' onClick={() => window.open(blog.link, '_blank')}>
            <Image src={blog.thumbnail} style={{height: '15em'}}/>
            <Card.Content>
                <Card.Header textAlign='center'>{blog.title}</Card.Header>
                <Card.Meta textAlign='center'>{new Date(blog.pubDate).toDateString()}</Card.Meta>
            </Card.Content>
            
        </Card>
    )
}

export default BlogCard
