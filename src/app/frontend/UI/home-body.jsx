import React from 'react';
import FadeInSection from './animations/fade-in-section';
import './home-body.css';

function HomeBody() {
  return (
    <>
      <div className="home-body-container">
        <div className="home-body-section-1">
          <FadeInSection>
            <div className="small-square-green-blob-left">
              <div className="square-blob-text-1">
                Edit and Import<br/>
                either recipes from<br/>
                *API* or make your<br/>
                own
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="small-square-green-blob-right">
              <div className="square-blob-text-1">
                Meal Plan your <br/>
                heart away with <br/>
                the planning <br/>
                functionality
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="small-square-green-blob-left">
              <div className="square-blob-text-1">
                Don't know which <br/>
                price is the best? <br/>
                We got you with the <br/>
                price comparer <br/>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="small-square-green-blob-right">
              <div className="square-blob-text-1">
               Need to convert <br/>
               your units? Don't <br/>
               stress, it's already <br/>
               done!
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
}

export default HomeBody;
