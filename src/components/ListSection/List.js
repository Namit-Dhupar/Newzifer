import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Feed, Loader, Image } from 'semantic-ui-react';
import classes from './List.module.css';
import * as actionCreators from '../../store/actions';
import InfiniteScroll from "react-infinite-scroll-component";


class List extends Component{

 render(){
     let newsList = null;
     let sourcename = null;
     if(this.props.dailySourceLoading){
       newsList = <div className={classes.loader}><Loader size='large' active inline='centered' /></div>;
       sourcename = <Loader size='medium' active inline='centered' />;
     }
     if(!this.props.dailySourceLoading){
       // eslint-disable-next-line
       newsList = ( this.props.dailySource.map((source,index) =>{
         if(source.source.id === this.props.dailyListID){
         return(
          <Feed.Event key={index} className={classes.feed}>
          <Image src={(source.urlToImage) ? 
            source.urlToImage : 
          "https://st2.depositphotos.com/1031343/6019/v/450/depositphotos_60193257-stock-illustration-news-flash-stamp.jpg"} 
          size='tiny' inline={true} className={classes.thumbnail}/>
          <Feed.Content>
            <div className={classes.date}>
            <Feed.Date content={new Date(source.publishedAt).toDateString()} />
            </div>
            <Feed.Summary>
            <div className={classes.List} onClick={()=>{
            this.props.onPostTitle(source.title);
            this.props.onPostImage(source.urlToImage);
            this.props.onPostDescription(source.description);
            this.props.onPostDate(new Date(source.publishedAt).toDateString());
            this.props.onPostReadMore(source.url);}}>
            {source.title}
            </div>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        ) 
       }
       }
       ))
       //Extract the News Source Name
       sourcename = (this.props.dailySource.splice(1).slice(0,1).map((
        sn => (sn.source.id === this.props.dailyListID) ? (Object.values(sn.source).splice(1)): ''))
        );
     }
     if(!this.props.dailyListID)
     {
     newsList= <div className={classes.mount}>
               <h3>Click on any News Source</h3>
               </div>
     }

    return(
  <Card fluid>
    <Card.Content>
      <Card.Header>
       <div className={classes.sourcehead}>
         {sourcename}
       </div> 
      </Card.Header>
    </Card.Content>
    <Card.Content>
    <InfiniteScroll dataLength={this.props.dailySource.length} style={{height: "67.5vh" }}>
      <Feed>
      {newsList}
      </Feed>
      </InfiniteScroll>
    </Card.Content>
  </Card>
    )}
}

const mapStateToProps = state =>{
  return{
    dailySource: state.list.newsItem,
    dailySourceLoading: state.list.newsloading,
    dailyListID: state.source.id
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onPostTitle: (title) => dispatch(actionCreators.getTitle(title)),
    onPostImage: (image) => dispatch(actionCreators.getImageURL(image)),
    onPostDescription: (desc) => dispatch(actionCreators.getDescription(desc)),
    onPostDate: (date) => dispatch(actionCreators.getDate(date)),
    onPostReadMore: (url) => dispatch(actionCreators.getURL(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);