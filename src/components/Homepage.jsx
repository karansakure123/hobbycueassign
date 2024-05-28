import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css" 
import Dropdown from './Dropdown';



const Homepage = () => {
  return (
    <div>
       <>
       

  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Explore Your Hobby</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  <style dangerouslySetInnerHTML={{ __html: "\n    \n  " }} />
  <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
    <div className="container-fluid">
      <div className="logo">
        <img
          src="https://hobbycue.com/_next/static/media/logo-full.13d59baf.svg"
          alt=""
        />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <form className="d-flex ms-auto my-2 my-lg-0">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search your hobbies"
            aria-label="Search"
          />
          <button className="btn search-btn" type="submit">
            <i
              className="fas fa-search"
              style={{
                backgroundColor: "rgb(182, 75, 182)",
                color: "rgb(255, 255, 255)"
              }}
            />
          </button>
        </form>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
          <Dropdown/>  
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-bookmark purple-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-bell purple-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart purple-icon" />
            </a>
          </li>
          <li className="nav-item">
            <button className="btn signin-btn" type="button">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* nav js */}
  {/* sec2 */}
  <div className="container-fluid  home-sec1">
    <div className="row">
      {/* Left Side Content */}
      <div className="col-md-8 mb-4 sec1-card">
        <h1 className="mt-4 mb-4">
          Explore your <span style={{ color: "skyblue" }}>hobby</span> or{" "}
          <span style={{ color: "plum" }}>passion</span>
        </h1>
        <p className="mt-4 p-1">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform.
        </p>
        <p className="mt-4 p-1">
          Your hobby may be about visual or performing arts, sports, games,
          gardening, model making, cooking, indoor or outdoor activities…
        </p>
        <p className="mt-4 p-1">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <img
          src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg"
          className="img-fluid mt-4"
          alt=""
        />
      </div>
      {/* Right Side Content */}
      <div className="col-md-4 mt-3">
        <div id="signInForm">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Sign In</h2>
            <h4
              className="text-secondary"
              onclick="toggleForms()"
              style={{ cursor: "pointer" }}
            >
              Join In
            </h4>
          </div>
          <button className="btn  w-100 mb-2 btn-f">
            <i className="fab fa-facebook-f me-3 text-primary " />
            Continue with Facebook
          </button>
          <button className="btn    w-100 mb-2 btn-g">
            <i className="fab fa-google  me-3 text-danger  p-2" />
            Continue with Google
          </button>
          <div className="text-center mb-2">Or Sign In with</div>
          <form>
            <div className="mb-3">
              <label htmlFor="signInEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="signInEmail"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signInPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signInPassword"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMeSignIn"
              />
              <label className="form-check-label" htmlFor="rememberMeSignIn">
                Remember Me
              </label>
            </div>
            <div className="mb-3">
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn  w-100"
              style={{ backgroundColor: "rgb(189, 65, 189)", color: "white" }}
            >
              Continue
            </button>
          </form>
        </div>
        <div id="joinInForm" className="toggle-form">
          <h2>Join In</h2>
          <hr />
          <h4 className="text-secondary" onclick="toggleForms()">
            Sign In
          </h4>
          <hr />
          <button className="w-100 mb-2 btn-f">
            <i className="fab fa-facebook-f p-2 me-3 text-primary" />
            Continue with Facebook
          </button>
          <button className="btn  w-100 mb-2 btn-g">
            <i className="fab fa-google me-3 text-danger " />
            Continue with Google
          </button>
          <div className="text-center mb-2">Or Join In with</div>
          <form>
            <div className="mb-3">
              <label htmlFor="joinInEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="joinInEmail"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="joinInPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="joinInPassword"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="agree" />
              <label className="form-check-label" htmlFor="agree">
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </label>
            </div>
            <div className="mb-3">
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn  w-100"
              style={{ backgroundColor: "rgb(189, 65, 189)", color: "white" }}
            >
              Agree &amp;Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
 
 

 {/* sec2 */}
  <div className="container my-5">
    <div className="row">
      <div className="col-md-6 mb-4">
        {/* First Card */}
        <div className="card-sec2">
          <div className="card-body text-center">
            <i className="fas fa-users  display-5 text-primary mb-3" />
            <h5 className="card-title">People</h5>
            <p className="card-text">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn btn-outline-secondary border-2 border-gray rounded-pill">
              Connect
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        {/* Second Card */}
        <div className="card-sec2">
          <div className="card-body text-center">
            <i className="fas fa-map-marker-alt display-5 text-success mb-3" />
            <h5 className="card-title">Place</h5>
            <p className="card-text">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue..
            </p>
            <button className="btn btn-outline-secondary border-2 border-gray rounded-pill">
              Meet up
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        {/* First Card */}
        <div className="card-sec2">
          <div className="card-body text-center">
            <i className="fas fa-shopping-cart display-5 text-primary mb-3" />
            <h5 className="card-title">Product</h5>
            <p className="card-text">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button className="btn btn-outline-secondary border-2 border-gray rounded-pill">
              Get it
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        {/* Second Card */}
        <div className="card-sec2">
          <div className="card-body text-center">
            <i className="fas fa-check  display-4 text-primary mb-3" />
            <h5 className="card-title">Program</h5>
            <p className="card-text">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button className="btn btn-outline-secondary border-2 border-gray rounded-pill">
              Attend
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="home-sec3">
    <br /><br />
    <div className="container-fluid my-5s home-ec3-container">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center mb-4   ">
            {/* Add icon */}
            <i className="fas fa-plus-circle fa-2x text-primary" />
            {/* Heading */}
            <h2 className="ms-3 mt-5">Add Your Own</h2>
          </div>
          {/* Details */}
          <p>
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page..
          </p>
          {/* Button */}
          <button className="btn  btn-lg  btn-rounded add-btn mb-5">Add New</button>
        </div>
      </div>
    </div>
  </div>


<br />


  {/* sec4 */}
  <div className="home-sec4">
    <div className="container my-5 home-sec-4-container">
      <div className="row">
        <div className="col-md-1 text-center">
          {/* Quote Icon */}
          <i className="fas fa-quote-left fa-3x text-primary" />
        </div>
        <div className="col-md-11">
          {/* Testimonials */}
          <h2>Testimonials</h2>
          <p className="testo-p">
            {" "}
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* sec5 */}
  <div className="home-sec5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="heading mt-3">
            {" "}
            <h1>
              Your <span style={{ color: "skyblue" }}>Hobby,</span> Your
              <span style={{ color: "plum" }}>Community</span>
            </h1>
          </div>
          <button
            className="border-0 p-3 mt-3"
            style={{
              width: "auto",
              borderRadius: 10,
              backgroundColor: "rgb(134, 58, 134)",
              color: "white",
              marginBottom:20
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <img
            src="https://hobbycue.com/_next/static/media/community-bottom.79dd2552.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  {/* footer */}
  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <h6 className="me-3 text-bold foot-h6" style={{ marginLeft: 30,  }}>HobbyCue</h6>
          <ul>
            <li style={{ listStyle: "none", marginTop: 20 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                About us
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Work with Us{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                OFAQ
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Contact Us{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h6 className="text-bold  foot-h6" style={{ marginLeft: 30,  }}>How do I</h6>
          <ul>
            <li style={{ listStyle: "none", marginTop: 20 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Sign Up
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Add a Listing{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Claim Listing{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Post a Query{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Add a Blog Post{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Other Queries{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h6 className="text-bold foot-h6" style={{ marginLeft: 30,  }}>Quick Links</h6>
          <ul>
            <li style={{ listStyle: "none", marginTop: 20 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Listing Pages
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Blog Posts{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Shop / Store{" "}
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Community
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: 10 }}>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h6 className="text-bold foot-h6">Invite Friends </h6>
          <form action="" method="post" className="foot-form">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              style={{ padding: "0.5rem", width: "80%", marginTop: 20 }}
            />
            <button
              style={{
                backgroundColor: "rgb(134, 58, 134)",
                color: "white",
                marginTop: 20,
                padding: "0.4rem",
                width: "80%"
              }}
            >
              Invite
            </button>
          </form>
          <div className="div">
            <h6 className="text-bold mt-3 foot-h6" style={{ marginLeft: 30,  }}>Social Media</h6>
            <div className="d-flex">
              <a href="https://facebook.com" className="nav-link">
                <i
                  className="fab fa-facebook-f p-2 m-1"
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="https://twitter.com" className="nav-link">
                <i
                  className="fab fa-twitter p-2 m-1 "
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="https://instagram.com" className="nav-link">
                <i
                  className="fab fa-instagram p-2 m-1 "
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="https://pinterest.com" className="nav-link">
                <i
                  className="fab fa-pinterest p-2 m-1"
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="https://linkedin.com" className="nav-link">
                <i
                  className="fab fa-linkedin p-2 m-1"
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="https://youtube.com" className="nav-link">
                <i
                  className="fab fa-youtube p-2 m-1"
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="https://telegram.org" className="nav-link">
                <i
                  className="fab fa-telegram p-2 m-1"
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
              <a href="mailto:someone@example.com" className="nav-link">
                <i
                  className="fas fa-envelope p-2 m-1"
                  style={{
                    clipPath: "circle()",
                    backgroundColor: "rgb(233, 233, 233)"
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="text-center p-3 "
            style={{ backgroundColor: "rgb(235, 235, 235)" }}
          >
            <p>© Purple Cues Private Limited </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}


export default Homepage;
