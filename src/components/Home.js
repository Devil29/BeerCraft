import React, {Component} from 'react'
import Footer from './Footer.js'
import './css/Home.scss';

const contentBody = {
    border: '1px solid',
    marginTop: '20px',
    marginBottom: '10px',
    padding: '10px',
    paddingLeft: '20px',
    backgroundColor: "#d69f60" 
}

//TO get this value from store
function getUserMoney(){
    return 1000
}

class Home extends Component{
    render(){
        return (
            <div className="home-page">
                <div style={contentBody}>
                    <h1>Search and buy your favourite Beers </h1>
                    <p>you can search Them by the name and type</p> 
                    <br></br>
                </div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>

                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src={require(`../assets/Beer1.jpg`)} alt="Not found"/>
                            <div class="carousel-caption">
                                <h3>Search and buy your favourite Beers.</h3>
                                <p>Cone Crusher available at 50% discount rate.</p>
                            </div>      
                        </div>

                        <div class="item">
                            <img src={require(`../assets/Beer2.jpg`)} alt="Not found"/>
                            <div class="carousel-caption">
                                <h3>Search and buy your favourite Beers.</h3>
                                <p>Cone Crusher available at 50% discount rate.</p>
                            </div>      
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-6 image-div-custom">
                        <img src="https://placehold.it/150x90?text=IMAGE1" class="img-responsive image-custom" alt="Not Found"/>
                        <div class="carousel-caption">
                            <h3>Search and buy your favourite Beers.</h3>
                            <p>Cone Crusher available at 50% discount rate.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="image-div-custom" >
                            <img src="https://placehold.it/150x45?text=IMAGE2" class="img-responsive image-custom" alt="Not Found"/>
                        </div>
                        <div class="image-div-custom">
                            <img src="https://placehold.it/150x45?text=IMAGE3" class="img-responsive image-custom" alt="Not Found"/>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-2 col-xs-6">
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive image-custom" alt="Not Found"/>
                    <p>Partner 1</p>
                    </div>
                    <div class="col-sm-2 col-xs-6"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive image-custom" alt="Not Found"/>
                    <p>Partner 2</p>    
                    </div>
                    <div class="col-sm-2 col-xs-6"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive image-custom" alt="Not Found"/>
                    <p>Partner 3</p>
                    </div>
                    <div class="col-sm-2 col-xs-6"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive image-custom" alt="Not Found"/>
                    <p>Partner 4</p>
                    </div> 
                    <div class="col-sm-2 col-xs-6"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive image-custom" alt="Not Found"/>
                    <p>Partner 5</p>
                    </div>     
                    <div class="col-sm-2 col-xs-6"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive image-custom" alt="Not Found"/>
                    <p>Partner 6</p>
                    </div> 
                </div>
                <div class="container-fluid text-center bg-grey">
                    <h4>Out Top Collections</h4>
                    <div class="row text-center">
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <img src={require(`../assets/monkblood.jpg`)} alt="Pub Beer"/>
                                <p><strong>Pub Beer</strong></p>
                                <p>American Pale Lager</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <img src={require(`../assets/monkblood.jpg`)}  alt="American IPA"/>
                                <p><strong>Rise of the Phoenix</strong></p>
                                <p>American IPA</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <img src={require(`../assets/monkblood.jpg`)}  alt="Monks Blood"/>
                                <p><strong>Monks Blood</strong></p>
                                <p>Belgian Dark Ale</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-container-fluid bg-grey">
                    <h2 class="text-center custom-text-center">CONTACT</h2>
                        <div class="row">
                            <div class="col-sm-5">
                                <p>Contact us and we'll get back to you within 24 hours.</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span> Bangalore, Karnataka</p>
                                <p><span class="glyphicon glyphicon-phone"></span> +91 8888888888</p>
                                <p><span class="glyphicon glyphicon-envelope"></span> vishal@something.com</p>
                            </div>
                            <div class="col-sm-7">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                                    </div>
                                </div>
                                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                                <br></br>
                                <div class="row">
                                    <div class="col-sm-12 form-group">
                                        <button class="btn btn-primary btn-lg  pull-right" type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;