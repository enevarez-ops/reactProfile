import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";

class Home extends React.Component {
  linkedIn = () => {
    window.open('https://www.linkedin.com/in/efrainnevarez/')
  }
  gitHub = () => {
    window.open('https://github.com/enevarez-ops')
  }
  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      About Me:
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Efrain Nevarez is a licensed Paramedic born and raised in a North Suburb of Chicago, Illinois. Coming
                from a Mexican family and first
                generation American. Looking to change in career and focus on the future of technology took the
                opportunity to enroll in Full Stack Web Development at the University of Denver's Coding Boot Camp.
                Graduation is tentatively set for March of 2021.

                Everyday hobbies include spending time with family. A beautiful 3 year old daughter and a loving wife.
                Along with GunPla building and customizing, which is the Japanese Mecha robots originally from the
                Japanese
                Gundam Series and produced by Bandai. (refer to picture) Another hobby is gaming with friends online and
                looking for the
                next recipe to master and prove to his wife that he is Chef Gordon Ramsey incarnate.
                    </h6>
                    <MDBBtn color="white" onClick={this.linkedIn}>LinkedIn</MDBBtn>
                    <MDBBtn outline color="white" onClick={this.gitHub}>
                      Github
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://i.imgur.com/xY2KyLI.jpg"
                      alt=""
                      className="img-fluid z-depth-4 rounded"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default Home;