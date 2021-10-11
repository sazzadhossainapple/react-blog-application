import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="aboutInfo">
          <div className="aboutTitle">
            <span className="aboutTitleInfo">ABOUT ME</span>
          </div>
          <p className="aboutDesc">
            Love myself I do. Not everything, but I love the good as well as the
            bad. I love my crazy lifestyle, and I love my hard discipline. I
            love my freedom of speech and the way my eyes get dark when I'm
            tired. I love that I have learned to trust people with my heart,
            even if it will get broken. I am proud of everything that I am and
            will become. <br></br>
            Some days are just bad days, that's all. You have to experience
            sadness to know happiness, and I remind myself that not every day is
            going to be a good day, that's just the way it is. I am determined
            to be cheerful and happy in whatever situation I may find myself.
            For I have learned that the greater part of our misery or
            unhappiness is determined not by our circumstance but by our
            disposition.<br></br>
            There’s more to this page, but we’ll go through the how to write one
            soon! What I like about reading other blogger’s About me page is a
            quick introduction to who they are. And, most importantly, that I
            know their name! All too often, I go to a beautiful blog, see
            pictures of the blogger, but have no idea who they are! Their
            comments use their blog name, and on their About me page they say,
            “I” instead of sharing their name! That’s why for all my About me
            pages, I tell new readers my name first.
          </p>
        </div>
      </div>
      <div className="about-right">
        <img
          className="aboutImg"
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />

        <div className="aboutTitle">
          <span className="aboutRightTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
