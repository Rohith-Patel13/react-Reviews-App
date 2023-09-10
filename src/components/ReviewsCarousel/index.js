// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  render() {
    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="carouselContainer">
          <button type="button" className="btnEl" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="profileDetails">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wade-warren-img.png"
              alt="Wade Warren"
            />
            <p className="textPara namePerson">Wade Warren</p>
            <p className="textPara">Rang</p>
            <p className="textPara">
              The most important thing I learnt is that nothing is a failure,
              but what we learn from that is a rich and rewarding experience.
            </p>
          </div>

          <button type="button" className="btnEl" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
