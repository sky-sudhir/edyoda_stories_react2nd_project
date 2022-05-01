import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div id="main-con-wrap">
        <div id="chead">
          <div id="head">
            <div>
              <span className="logo">EDYODA</span>
              <p className="stories">Stories</p>
            </div>
          </div>
          <div id="explore">
            Explore Categories
            <span id="drop-down-icon">
              <img
                className="BlogNavigationLink__DropdownArrow__2Uzyk"
                alt="Dropdown Icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
              />
            </span>
          </div>
          <div id="edyoda-short">
            <p className="a">
              EdYoda is free learning and knowledge <br></br>
              sharing platform for techies
            </p>
          </div>
          <div id="main-web-button">
            <button id="go-to-main">Go To Main Website</button>
          </div>
        </div>

        <div id="body">
          <h1 className="trending">Latest Posts</h1>

          <p className="filter">
            <img
              alt=""
              src="https://img.icons8.com/officexs/16/000000/filter.png"
            />
            Filter by Category
          </p>

          <div id="button1">
            <button className="first-all">All</button>
            <button>Artificial Intelligence</button>
            <button>Cloud Computing</button>
            <button>DevOps</button>
            <button>Programming Languages</button>
            <button>Mobile Application Development</button>
            <button>Technology and Tools</button>
            <button>Get a Jon in Tech Company</button>
            <button>Others</button>
          </div>
          <div>
            <div className="card">
              <div className="cardtype card1">
                <img
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
                  className="image"
                  alt=""
                />
                <p className="texttop">
                  Fresh Graduate or IT<br></br> professional Looking for a...{" "}
                </p>
                <span className="textm">Arman Ahmed </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  If you are new to programming, start by learning PYTHON
                  programming. You can not go wrong with it. Explore further
                  possibilities based on your interest.{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
                  className="image"
                  alt=""
                />
                <p className="texttop">
                  Building the University for<br></br> the 21st century — EdYoda
                </p>
                <span className="textm">Arman Ahmed </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  The google analytics dashboard was firing up, the whole
                  team,and was each one of us on the edges — half elated, half
                  anxious and a little worried. And it happened, so from{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
                  className="image"
                  alt=""
                />
                <p className="texttop">
                  From identity crisis to the Success Story - The Dev...
                </p>
                <span className="textm">Kalyan Mahalingam </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  DevOps is a paradigm shift in the way that most of how
                  software products are being built in the modern day
                  Information Technology (IT) organizations.{" "}
                </p>
              </div>
            </div>

            <div className="card">
              <div className="cardtype card1">
                <img
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
                  className="image"
                  alt=""
                />
                <p className="texttop">
                  Typical day of Data Scientist - An insider story!
                </p>
                <span className="textm"> Saurav Ghosh </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  To me Data Science can be encapsulated in a simple statement,
                  it helps organizations and individuals to solve complex
                  problems while minimizing human.{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
                  className="image"
                  alt=""
                />
                <p className="texttop">
                  Amazon Web Services (AWS) Cloud Day - Bangalore
                </p>
                <span className="textm"> Kalyan Mahalingam</span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  It was indeed a hectic day with back to back session
                  sandwiched by good food and tea (on a lighter note, need to
                  investigate and held the tactics behind the 5-star hotels.{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
                  className="image"
                />
                <p className="texttop">edYoda Meetup #01 : A Date with Cloud</p>
                <span className="textm">Ashish Pandey</span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  As a matter of fact, sometimes we do get biased towards cloud
                  services and see only the greener side of it. To do some
                  reality check for us, as well as for other cloud.{" "}
                </p>
              </div>
            </div>

            <div className="card">
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg"
                  className="image"
                />
                <p className="texttop">
                  Industry 4.0 - The Prospects & Journey ahead!
                </p>
                <span className="textm">Pitanjal Dutta </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  Did you ever dream a world where computers are connected and
                  will communicate with one another lets see to ultimately make
                  decisions without human involvement? And..{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png"
                  className="image"
                />
                <p className="texttop">Why do Database Systems Exist ?</p>
                <span className="textm">Pitanjal Dutta </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  In this blog let us explore and help you understand why you
                  need to learn various Database Management Systems like SQL,
                  MongoDB, etc and how it is going.{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
                  className="image"
                />
                <p className="texttop">
                  Master your General Aptitude Job Interview Success
                </p>
                <span className="textm">Pitanjal Dutta </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  A general aptitude becomes very important, when you apply for
                  a job in a tech company. You might be highly skilled in your
                  subject domain. However, One of the top{" "}
                </p>
              </div>
            </div>

            <div className="card">
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"
                  className="image"
                />
                <p className="texttop">
                  Ace your Soft Skills - Tips to crack the job interview
                </p>
                <span className="textm"> Pitanjal Dutta</span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  Soft skills are seen to be as important as your technical
                  skill set. When an organisation is hiring, soft skills is
                  given a lot of weightage and thus becomes very most useful.
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg"
                  className="image"
                />
                <p className="texttop">
                  Learn these Programming Languages in 2019
                </p>
                <span className="textm"> EdYoda</span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  Starting a career as a software developer obviously requires
                  one to undertake a programming languages course that can cover
                  everything from the basics improve{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/WhatsApp_Image_2019-06-19_at_17.55.10.jpeg"
                  className="image"
                />
                <p className="texttop">
                  Getting started with Artificial Intelligence
                </p>
                <span className="textm">EdYoda </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  We’re rapidly moving towards a day and age where almost
                  everything can be controlled by machines and one of the most
                  revolutionary moves has been the advent.{" "}
                </p>
              </div>
            </div>

            <div className="card">
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"
                  className="image"
                />
                <p className="texttop">
                  Learn cloud computing- an introduction
                </p>
                <span className="textm"> EdYoda</span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  If you learn cloud computing then you can make things much
                  easier for your projects. You do not have to rely on multiple
                  hard drives or data storage devices. Such as iphone,{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/1_G1i7GlRPMGboYZdRhOeWaw.png"
                  className="image"
                />
                <p className="texttop">
                  Building the University for the 21st century — EdYoda 2.0
                </p>
                <span className="textm">Arman Ahmed </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  The google analytics dashboard was firing up, the whole team,
                  each one of us was on the edges — half elated, half anxious
                  and a little worried. And it happened.Am great..{" "}
                </p>
              </div>
              <div className="cardtype card1">
                <img
                  alt=""
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/data-mining-an-overview.jpg"
                  className="image"
                />
                <p className="texttop">Data Mining: An overview</p>
                <span className="textm">EdYoda </span>
                <span className="textm2">&nbsp;| &nbsp;12 Jan 2022</span>
                <p className="content">
                  {" "}
                  The process used by companies to convert raw data into useful
                  information is called Data Mining. It is a process of
                  searching, collecting, filtering and analyzing the data. A
                  large amount of data can be store.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="foot">
          <div id="footer-section">
            <div className="foot-div">
              <h3>EDYODA</h3>
              <span>About Us</span>
              <span>Contact Us</span>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
            </div>
            <div className="foot-div">
              <h3>RESOURCES</h3>
              <span>Learning Paths</span>
              <span>Courses</span>
              <span>Learning Videos</span>
              <span>Educators</span>
              <span>EdYoda Stories</span>
              <span>University</span>
              <span>AITEST</span>
            </div>
            <div className="foot-div">
              <h3>FOR ENTERPRISES</h3>
              <span>Train Your Employees</span>
              <h3>QUICK LINKS</h3>
              <span>Learn and Earn</span>
              <span>Become a Learning-Enabler</span>
              <span>Tips for Learning-Enabler</span>
              <span>Request New Topic</span>
              <span>Certification</span>
              <span>Affiliate Progam</span>
            </div>
            <div className="foot-div">
              <h3>CONNECT</h3>
              <span>
                2nd Floor #188, Survey No. - 123/1,<br></br> Incubes Building Next to
                McDonalds,<br></br> ITPL Main Rd, Brookefield,<br></br> Bengaluru,
                Karnataka-560037,<br></br> India
              </span>
              <span>hello@edyoda.com</span>
              <span>© 2021 <br></br> zekeLabs Technologies Private Limited</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
