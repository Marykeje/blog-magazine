import bissImage from "../src/assets/img/business-img.png";
import image1 from "../src/assets/img/Image1.png";
import image2 from "../src/assets/img/image2.jpg";
import image3 from "../src/assets/img/Image3.png";
import newsimg from "../src/assets/img/news-img.jpg"
import image4 from "../src/assets/img/img4.png"

export default function App() {
  return (
    <div>
      <Header />
      <BlogSection />
      <Newsletter/>
      <BlogPost/>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7929 4.5957V4.59675C15.776 4.62583 12.2955 10.6297 7.95067 17.96C3.59532 25.3081 0 31.1911 0 31.1911L12.3315 31.137L12.3323 31.1369L12.3297 31.1464C18.3172 31.0304 23.7182 27.0939 25.3119 21.1458C25.8102 19.2864 25.8853 17.4147 25.5964 15.626C24.8043 10.3587 20.9149 6.07496 15.7929 4.5957Z"
            fill="black"
          />
          <path
            d="M22.6078 0.80957V0.810614C22.591 0.839693 19.1104 6.84355 14.7656 14.1739C10.4103 21.522 6.81494 27.4049 6.81494 27.4049L19.1464 27.3509L19.1472 27.3507L19.1446 27.3603C25.1321 27.2443 30.5331 23.3078 32.1269 17.3597C32.6251 15.5003 32.7003 13.6286 32.4113 11.8398C31.6192 6.5726 27.7299 2.28883 22.6078 0.80957Z"
            fill="#10F2C5"
          />
        </svg>
        <p>Ddsgnr</p>
      </div>
      <nav className="header__nav-list">
        <ul className="header__nav-menu">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Popular</li>
          </a>
          <a href="#">
            <li>Trending</li>
          </a>
        </ul>
        <div className="btns">
          <button className="btns btns--log-btn">Log in</button>
          <button className="btns btns--started-btn">Get started</button>
        </div>
      </nav>
    </header>
  );
}

function BlogSection() {
  return (
    <section className="blog-section container">
      <div className="blog-section__heading-title">
        <h5>Blog</h5>
        <div className="blog-section__heading-sub">
          <h2>Stay informed and inspired with ddsgnr news</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="blog-section__blog-infos">
        <h5 className="sub-heading-sm">Featured blog posts</h5>
        <div className="blog-section__section-info">
          <div className="blog-section__blog-details">
            <img src={bissImage} alt="big-image" />
            <div className="blog-section__blog-details-type">
              <div className="blog-section__blog-types">
                <p className="blog-type-bg">Food</p>
                <span className="">5 min read</span>
              </div>
              <div className="blog-section__blog-details-heading">
                <h4>
                  How to choose the right customer for your photo business?
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button className="read-more">
              <p className="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="blog-section__section-infos">
            <div className="blog-section__section-info-sub">
              <img src={image1} alt="image-1" />
              <div className="blog-section__blog-details-type">
                <div className="blog-section__blog-types">
                  <p className="blog-type-bg">WordPress</p>
                  <span>5 min read</span>
                </div>
                <p className="sub-heading-sm">
                  “Poly Amazing Race” sân chơi đầy thú vị mới dành cho sinh...
                </p>
                <button className="read-more">
                  <p>Read more</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="blog-section__section-info-sub">
              <img src={image2} alt="image-2" />
              <div className="blog-section__blog-details-type">
                <div className="blog-section__blog-types">
                  <p className="blog-type-bg">Fitness</p>
                  <span>5 min read</span>
                </div>
                <p className="sub-heading-sm">
                  "Are you stretching correctly? Fitness experts break down what
                  to do pre- and post-workout"...
                </p>
                <div className="blog-section__blog-heading-details">
                  <p>
                    Stretching provides for a greater range of motion and
                    flexibility. A pigeon pose can be a great post-workout
                    stretch for hip flexors and glutes.
                  </p>
                  <p>
                    Editor’s note: Before beginning any new exercise program,
                    consult your doctor. Stop immediately if you experience
                    pain.
                  </p>
                  <div>
                    <p>
                      As you head into the gym, you likely already have a
                      workout plan in mind. Maybe you’re taking a light jog on
                      the treadmill, or you’re working on some bicep curls on
                      arm’s day. To get the most out of your gym session,
                      consider first how you start and end your workouts.
                    </p>
                    <p>
                      Muscles need time to warm up, and stretching helps
                      circulate more blood to those areas, allowing for a
                      greater range of motion and flexibility. More flexibility
                      increases performance, especially when doing actions that
                      require bending, contraction and pulling. Stretching also
                      helps lower the risk of injury.
                    </p>
                    <p>
                      “A lot of people like to jump right into the workout, but
                      stretching before and after is what’s going to determine
                      how effective your workout can be for today and the next
                      time you do it,” said Whitney Houlin, a personal trainer
                      and director of training and fitness at WeGym in West
                      Hartford, Connecticut.
                    </p>
                    <p>
                      If you want better results or are hitting a plateau in
                      your fitness journey, try adding dynamic and static
                      stretching to your next workout.
                    </p>
                  </div>
                  <div>
                    <h4>Dynamic vs. static stretches</h4>
                    <div>
                      <p>
                        Dynamic stretching involves moving a joint through its
                        full range to increase flexibility, Houlin said. Static
                        stretching involves holding a single position for
                        several seconds.
                      </p>
                      <p>
                        Static stretches can be passive or active. Active static
                        stretches involve working a muscle while using other
                        muscles to hold the stretch, Houlin said, such as
                        lifting a leg in front of you using leg and core
                        strength. Passive static stretches involve extending a
                        muscle using gravity or other stretching tools. This
                        technique can look like folding forward to stretch the
                        hamstrings, allowing gravity to pull the upper body
                        down.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="read-more">
                  <p>Read more</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="blog-section__section-info-sub">
              <img src={image3} alt="image-3" />
              <div className="blog-section__blog-details-type">
                <div className="blog-section__blog-types">
                  <p className="blog-type-bg">Finance</p>
                  <span>5 min read</span>
                </div>
                <p className="sub-heading-sm">
                  “Poly Amazing Race” sân chơi đầy thú vị mới dành cho sinh...
                </p>
                <div className="read-more">
                  <p>Read more</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter">
      <img
        src={newsimg}
        alt=""
        className="newsletter__news-img"
      />
      <div className="newsletter__letter-body container">
        <div className="newsletter__signup-text">
          <h3 className="sub-heading-md">Sign up for our newsletter</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="newsletter__sub-letters">
          <div className="newsletter__mail-input">
            <div className="form__user-input">
              <input type="text" placeholder="Enter your email" />
            </div>
            <button className="newsletter__sub-btn">Subscribe</button>
          </div>
          <span>
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </span>
        </div>
      </div>
    </section>
  );
}

function BlogPost() {
  return (
    <section class="blog-posts container">
      <div class="blog-posts__headings">
        <div class="blog-posts__heading-type">
          <h5 class="sub-heading">Popular</h5>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui?
          </span>
        </div>
        <div class="blog-posts__view-all">
          <button class="view-btn">View All</button>
        </div>
      </div>
      <div class="blog-posts__blog-infos">
        <div class="blog-posts__blog-layout">
          <div class="blog-posts__blog-details">
            <img
              src={image4}
              alt="img4"
              class="blog-posts__blog-imgs"
            />
            <div class="blog-posts__blog-details-type">
              <div class="blog-posts__blog-types">
                <p class="blog-type-bg">Food</p>
                <span class="">5 min read</span>
              </div>
              <div class="blog-posts__blog-details-heading">
                <h4 class="sub-heading-sm">
                  Travelling as a way of self-discovery and progress
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button class="read-more">
              <p class="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div class="blog-posts__blog-details">
            <img
              src="./assets/imgs/img4.png"
              alt=""
              class="blog-posts__blog-imgs"
            />
            <div class="blog-details__blog-details-type">
              <div class="blog-section__blog-types">
                <p class="blog-type-bg">Food</p>
                <span class="">5 min read</span>
              </div>
              <div class="blog-posts__blog-details-heading">
                <h4 class="sub-heading-sm">
                  Travelling as a way of self-discovery and progress
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button class="read-more">
              <p class="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div class="blog-posts__blog-details">
            <img
              src="./assets/imgs/img5.png"
              alt=""
              class="blog-posts__blog-imgs"
            />
            <div class="blog-details__blog-details-type">
              <div class="blog-section__blog-types">
                <p class="blog-type-bg">Food</p>
                <span class="">5 min read</span>
              </div>
              <div class="blog-posts__blog-details-heading">
                <h4 class="sub-heading-sm">
                  Travelling as a way of self-discovery and progress
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button class="read-more">
              <p class="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="blog-posts__blog-layout">
          <div class="blog-posts__blog-details">
            <img
              src="./assets/imgs/img4.png"
              alt=""
              class="blog-posts__blog-imgs"
            />
            <div class="blog-posts__blog-details-type">
              <div class="blog-posts__blog-types">
                <p class="blog-type-bg">Food</p>
                <span class="">5 min read</span>
              </div>
              <div class="blog-posts__blog-details-heading">
                <h4 class="sub-heading-sm">
                  Travelling as a way of self-discovery and progress
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button class="read-more">
              <p class="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div class="blog-posts__blog-details">
            <img
              src="./assets/imgs/img4.png"
              alt=""
              class="blog-posts__blog-imgs"
            />
            <div class="blog-details__blog-details-type">
              <div class="blog-section__blog-types">
                <p class="blog-type-bg">Food</p>
                <span class="">5 min read</span>
              </div>
              <div class="blog-posts__blog-details-heading">
                <h4 class="sub-heading-sm">
                  Travelling as a way of self-discovery and progress
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button class="read-more">
              <p class="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div class="blog-posts__blog-details">
            <img
              src="./assets/imgs/img5.png"
              alt=""
              class="blog-posts__blog-imgs"
            />
            <div class="blog-details__blog-details-type">
              <div class="blog-section__blog-types">
                <p class="blog-type-bg">Food</p>
                <span class="">5 min read</span>
              </div>
              <div class="blog-posts__blog-details-heading">
                <h4 class="sub-heading-sm">
                  Travelling as a way of self-discovery and progress
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <button class="read-more">
              <p class="">Read more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
