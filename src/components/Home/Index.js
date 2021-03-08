import React from "react";


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

        <img src="https://i.imgur.com/xY2KyLI.jpg"/>


                <h6>
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
            
      </div>
    );
  }
}
export default Home;