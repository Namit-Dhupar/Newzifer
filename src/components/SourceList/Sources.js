import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Segment, Loader, Search} from 'semantic-ui-react';
import classes from './Sources.module.css';
import * as actionCreators from '../../store/actions';
import InfiniteScroll from "react-infinite-scroll-component";

class Sources extends Component{

componentDidMount(){
    this.props.onSourceLoad();
}

render(){
    let newsSource = null;
  //Getting List after ComponentDidMount
  if (this.props.dailyListLoading)
  newsSource = <div className={classes.loader}><Loader size='large' active inline='centered' /></div>;
  if(!this.props.dailyListLoading){
    newsSource = ( this.props.dailyList.map((dai,index) =>{
    return(   
    <Segment vertical key={index}>
      <div className={classes.Source}>
      {dai.name}
      </div> 
    </Segment>
      );
    })
  );

  //For Search
  let filteredSearch = this.props.dailyList.filter(res => {
    return res.name.toLowerCase().indexOf(this.props.dailyListSearch.toLowerCase()) !== -1;
  });
  newsSource = filteredSearch.map((ds,index) =>(      
  <Segment vertical key={index}>
  <div className={classes.Source} onClick={()=>{this.props.onNewsLoad(ds.id);
  this.props.onSourceID(ds.id);
  }}>
      {ds.name}
      </div> 
    </Segment>
   ));
  }
return(
<div>
<Card fluid>
 <Card.Content>
   <Card.Header>
     <div className={classes.sourcehead}>
     News Sources
     </div>
     </Card.Header>
   <Search placeholder='Search Source' showNoResults={false} onSearchChange={(e)=>this.props.onSearchLoad(e.target.value)}/>
   <InfiniteScroll dataLength={this.props.dailyList.length} style={{height: "65vh" }}>
     {newsSource}
   </InfiniteScroll>
  </Card.Content> 
</Card>
</div>
)
  }  
     }

const mapStateToProps = state =>{
  return{
      dailyList: state.source.newsList,
      dailyListLoading: state.source.loading,
      dailyListSearch: state.source.search
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onSourceLoad: () => dispatch(actionCreators.getsource()),
    onSearchLoad: (payload) => dispatch(actionCreators.searchsource(payload)),
    onNewsLoad: (id) => dispatch(actionCreators.getnews(id)),
    onSourceID: (id) => dispatch(actionCreators.listsourceid(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sources);

