import React, {Component} from 'react';
import Navigation from './components/navigation';
import Jumbo from "./components/jumbo";
import Card from "./components/cards";
import Footer from "./components/footer";

class App extends Component {
    state = {
        result: {
            "status": "",
            "totalResults": 0,
            "articles": [
                {
                    "source": {
                        "id": "",
                        "name": ""
                    },
                    "author": "",
                    "title": "",
                    "description": "",
                    "url": "",
                    "urlToImage": "",
                    "publishedAt": "",
                    "content": ""
                }
            ]
        }
    };

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1ed506b2d88f4400a191fd29778cbbce")
            .then(response => response.json())
            .then(json => this.setState({ result: json }));
    };

    render() {

        return (
            <>
                <Navigation/>
                <Jumbo news={this.state.result.articles[0]}/>
                <div className={"card-parent"}>
                {
                    this.state.result.articles.slice(1).map(item => (
                        <Card key={item.index} item={item}/>
                    ))
                }
                <Footer/>
                </div>
            </>
        );
    }
}

export default App;
