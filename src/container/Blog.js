import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Sources from '../components/SourceList/Sources';
import List from '../components/ListSection/List';
import Item from '../components/ItemSection/Item';
import classes from './Blog.module.css';

const Blog = () => (
    <div>
<Container>
 <h1 className={classes.projectname}>Newzifer</h1>
   <Grid container columns={3}>

   <Grid.Row>
    <Grid.Column width={4}>
       <Sources/>      
    </Grid.Column>
    
    <Grid.Column width={4}>
       <List/> 
    </Grid.Column>
    
    <Grid.Column width={8}>
      <Item />
    </Grid.Column>
    </Grid.Row> 
  
  </Grid>
  
 </Container>
  
  </div>
  )

export default Blog;
