import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Item extends Component{

render(){
  let fullPost = null;
  fullPost = (this.props.GetPostURL) ? 
  this.props.GetPostDescription :
  <div style={{textAlign:'center'}}><h3>Click on News List</h3></div>;

   let readmore = null;
   readmore = (this.props.GetPostURL) ?
   <a href={this.props.GetPostURL} target='_blank' rel="noopener noreferrer">...Read More</a> : 
   '';

   let icon = null;
   icon = (this.props.GetPostDescription) ? 
   <Card.Content extra>
   <Icon name='star' disabled={false} />
   Add To Favorites
  </Card.Content> : '';

  
return(
  <Card fluid>
    <Image src={this.props.GetPostImage} size='massive' />
    <Card.Content>
      <Card.Header>{this.props.GetPostTitle}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.GetPostDate}</span>
      </Card.Meta>
      <Card.Description>
      {fullPost}
      </Card.Description>
      {readmore}
    </Card.Content>
    {icon}
  </Card>
     
 )
}
} 

const mapStateToProps = state =>{
  return{
    GetPostTitle: state.list.newsTitle,
    GetPostDescription: state.list.newsDescription,
    GetPostImage: state.list.newsImage,
    GetPostDate: state.list.newsDate,
    GetPostURL: state.list.newsURL    
  }
}


export default connect(mapStateToProps, null)(Item)