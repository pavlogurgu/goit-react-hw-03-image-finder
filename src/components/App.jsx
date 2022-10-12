import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'components/api.jsx';
import { ProblemNotification } from './Styles';

export class App extends Component  {
  state = {
    page: 1,
    isLoading: false,
    total: 0,
    images: null,
    query: '',
  };

  componentDidUpdate(_, prevState){
    const {page, query} = this.state;
    if (prevState.page !== page || prevState.query !== query){
      this.dataImages(query, page)
    }
  }
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true
    }))
  }

  dataImages = async (query, page) => {
    this.setState({isLoading: true})
    const data = await fetchImages(query, page)
    if (page === 1){
      this.setState(() => ({
        total: data.total,
        images: [...data.hits],
        isLoading: false,
      }))
    } else {
      this.setState(state => ({
        images: [...state.images, ...data.hits],
        isLoading: false,
      }))
    }
  }
  handleInput = e => {
    this.setState({
      page: 1,
      images: null,
      query: e.searchQuery
    })
  }
  render(){
    const {images, isLoading, total} = this.state
  return (
    <div>
      <Searchbar onSubmit={this.handleInput}/>
      {isLoading && <Loader>Loading</Loader>}
      {images && (
        <div>
          {images.length === 0 && <ProblemNotification>No pictures Found</ProblemNotification>}
       
    
      <ImageGallery items = {images}/>
      {isLoading && <Loader>Loading</Loader>}
      {images.length > 0 && images.length < total && (
      <Button onLoadMore = {this.loadMore}/>
      )}
      {isLoading && <Loader>Loading</Loader>}
      {images.length === total && !!images.length && (
              <ProblemNotification>No more pictures</ProblemNotification>
            )}
      </div>
     )}
    </div>
  );
  }
};
