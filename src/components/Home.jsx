import { Component } from 'react';
import Popular from './Popular';
import Search from './Search';

class Home extends Component {


    state = { searchTerm: '' }

    handleInput = (e) => {
        
        this.setState({
            searchTerm: e.target.value,
        
        })
    }


    // Do not change the render function
    render() {
        return <div className=" w-full ">
            <div className="search-input d-flex justify-content-center">
                <input type="text" name="search"  className=' form-control bg-transparent rounded-lg h-12 justify-center text-light' style={{width:'74%'}}  onChange={(e) => this.handleInput(e)} placeholder="Start typing to show results..." />
            </div>
            {this.state.searchTerm.length == 0  ? <Popular {...this.props} /> : <Search searchTerm={this.state.searchTerm} />}
        </div>
    }
}

export default Home;