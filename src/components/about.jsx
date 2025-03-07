import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "MongoDB", content: "MongoDB", porcentage: "60%", value: "60" },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "70%", value: "70" },
        { id: "PHP_skill", content: "PHP", porcentage: "50%", value: "50" },
        { id: "ReactJS_skill", content: "ReactJS", porcentage: "75%", value: "75" },
        { id: "Python_skill", content: "Python", porcentage: "30%", value: "30" },
        { id: "NodeJs", content: "NodeJs", porcentage: "60%", value: "60" }
      ].sort((a, b) => b.value - a.value),

      aboutMeData: [
        {
          id: "first-p-about",
          title: "Frontend Developer",
          content:
            "A creative Frontend Developer skilled in JavaScript, React, and modern UI frameworks. Experienced in building responsive, user-friendly interfaces and ensuring smooth performance across devices. Passionate about enhancing user experience through clean design and interactive features."
        },
        {
          id: "second-p-about",
          title: "Backend Developer",
          content:
            "A Backend Developer specializing in Node.js, MongoDB, and API development. Experienced in building secure, scalable server-side applications, optimizing database performance, and integrating frontend systems through RESTful APIs. Focused on efficiency, security, and seamless data flow."
        },
        {
          id: "third-p-about",
          title: "Technical Writer",
          content:
            "A detail-oriented Technical Writer skilled in creating clear, concise documentation for software products. Experienced in writing API guides, user manuals, and developer documentation. Passionate about making complex technical concepts easy to understand."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.aboutMeData.map(content => {
                        return (
                          <div key={content.id}>
                            <h6 className="title-left"style={{ fontSize: "14px", fontWeight: "bold" }}>{content.title}</h6>
                            <p className="lead">{content.content}</p> 
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    );
  }
}

export default About;
