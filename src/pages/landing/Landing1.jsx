import { Button } from "@mui/material";
import HeaderFooter from "../../components/header-footer/HeaderFooter";
import "./landing.scss";
import { Icon } from "@iconify/react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import MedicalCenters from "../../components/MedicalCenters";
export default function Landing1() {
  return (
    <HeaderFooter>
      <main>
        <aside className="top">
          <div className="description">
            <h1 className="typewriter">
              <Typewriter
                words={[
                  "All your medical expectations in one place.",
                  "Buy, Sell, Swap Medical Equipments with ease.",
                  "Donate blood and save the world.",
                  "Find Unlimited Opportunities by one click.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laudantium dolorem quod, eveniet autem nemo! Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, deserunt. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Accusantium nesciunt ipsum dignissimos commodi
              culpa, nobis iusto consequuntur maiores assumenda. Laborum,
              necessitatibus. Officia, incidunt! Repudiandae assumenda in ea
              aliquam provident ex a incidunt modi ipsa ipsam.
            </p>
            <Button variant="contained" className="secondary_button explore">
              Explore possibilities
            </Button>
          </div>
          <div className="image">
            <div className="img">
              <Link to="donate-blood">
                <div className="overlay"></div>
                <img
                  src="/images/blood-donation-illustration-concept-with-blood-bag-world-blood-donor-day_95561-346-removebg-preview.png"
                  alt=""
                  className="border"
                />
              </Link>
            </div>

            <div className="img">
              <Link to="https://kazodo-health.netlify.app/" target="blank">
                <div className="overlay"></div>
                <img
                  src="/images/e-commerce-digital-internet-technology-web-concept_53876-127365.jpg"
                  alt=""
                />
              </Link>
            </div>

            <div className="img">
              <div className="overlay"></div>
              <img
                src="/images/update-icon-3d-render-illustration_567294-3081.jpg"
                alt=""
              />
            </div>
            <div className="img">
              <Link to="/jobs">
                <div className="overlay"></div>
                <img
                  src="/images/job-3d-word-with-loupe-chalkboard_165073-777.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </aside>
        <div className="actions">
          <p className="grey">Endorsed by</p>
          <div className="partners">
            <div className="partner">
              <img src="/images/partners/partner1.jpeg" alt="" />
            </div>

            <div className="partner">
              <img src="/images/partners/partner2.jpeg" alt="" />
            </div>

            <div className="partner">
              <img src="/images/partners/partner3.jpeg" alt="" />
            </div>

            <div className="partner">
              <img src="/images/partners/partner4.jpeg" alt="" />
            </div>
          </div>
        </div>
      </main>

      <section className="categories_wrapper">
        <h6>Categories</h6>
        <section className="categories">
          <div>
            <p>Find Opportunities</p>
            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/businessman-walking-key-door-new-opportunity_34259-72.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p>Recruitment Agencies</p>

            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/we-need-you-message-concept_53876-167106.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <p>Donate blood</p>
            <Link to="/donate-blood">
              <div className="category">
                <div className="overlay"></div>
                <div className="image">
                  <img
                    src="/images/240_F_222823036_n9ocpis9ILjK6KuOMV4v7urh4dlHCvSq.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>

          <div>
            <p>Job seekers</p>
            <div className="category">
              <Link to="jobs">
                <div className="overlay"></div>
                <div className="image">
                  <img
                    src="/images/job-3d-word-with-loupe-chalkboard_165073-777.jpg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <p>Buy and Sell</p>
            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img src="/images/buy-sell-car_2227-315.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p>Swap Equipments</p>

            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/update-icon-3d-render-illustration_567294-3081.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p>Medical Centers</p>
            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/240_F_23041642_rVOcZZWZWtZjaooUCx8tM0kSDvlxqY3Y.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p>Blog</p>
            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/computer-keyboard-blog-concept_172429-825.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p>Blog</p>
            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/businessman-walking-key-door-new-opportunity_34259-72.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <article className="find_opportunities">
        <div className="left">
          <h3>Find Opportunities</h3>
          <div className="find_opp_steps">
            <div className="step">
              <div className="icon">
                <Icon
                  icon="material-symbols:work-history-outline"
                  color="#0020ff"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus quam ex iste magni!
                </p>
              </div>
            </div>
            <div className="step">
              <div className="icon">
                <Icon
                  icon="material-symbols:work-history-outline"
                  color="#0020ff"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus quam ex iste magni!
                </p>
              </div>
            </div>
            <div className="step">
              <div className="icon">
                <Icon
                  icon="material-symbols:work-history-outline"
                  color="#0020ff"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus quam ex iste magni!
                </p>
              </div>
            </div>
            <Button variant="contained"> Take Action</Button>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src="/images/unnamed-removebg-preview.png" alt="" />
          </div>
        </div>
      </article>

      <article className="buy_sell">
        <h3>Buy and sell</h3>
        <p>
          Want to see more?{" "}
          <span>
            <Link to="https://kazodo-health.netlify.app/" target="blank">
              Go to Shop
            </Link>
          </span>
        </p>
        <div className="product_items">
          <div className="item">
            <div className="image">
              <img
                src="/images/front-view-shopping-cart-with-pill-foils-containers_23-2148533497.jpg"
                alt=""
              />
            </div>
            <Button variant="contained" className="shop_btn">
              Shop now
            </Button>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/high-angle-pill-foils-plastic-containers_23-2148533456.jpg"
                alt=""
              />
            </div>
            <Button variant="contained" className="shop_btn">
              Shop now
            </Button>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/toy-cart-with-pills-collection_23-2148550966.jpg"
                alt=""
              />
            </div>
            <Button variant="contained" className="shop_btn">
              Shop now
            </Button>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/set-toy-medical-equipment_114579-44513.jpg"
                alt=""
              />
            </div>
            <Button variant="contained" className="shop_btn">
              Shop now
            </Button>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg"
                alt=""
              />
            </div>
            <Button variant="contained" className="shop_btn">
              Shop now
            </Button>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/still-life-medical-tools_23-2149371263.jpg"
                alt=""
              />
            </div>
            <Button variant="contained" className="shop_btn">
              Shop now
            </Button>
          </div>
        </div>
      </article>

      <div className="recruiters">
        <div className="left">
          <div className="image">
            <img
              src="/images/hiring-career-employment-human-resources-concept_53876-121273.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="right">
          <h3>Are you a recruiter seeking smart talents?</h3>

          <div className="offers">
            <div className="offer">
              <Icon
                icon="material-symbols:work-history-outline"
                color="black"
                width="40"
                height="40"
              />
              <div className="description">
                <h6>Proof of Skills</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ipsam iusto in dignissimos error? Consequatur?
                </p>
              </div>
            </div>
            <div className="offer">
              <Icon
                icon="material-symbols:work-history-outline"
                color="black"
                width="40"
                height="40"
              />
              <div className="description">
                <h6>Proof of Skills</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ipsam iusto in dignissimos error? Consequatur?
                </p>
              </div>
            </div>
            <div className="offer">
              <Icon
                icon="material-symbols:work-history-outline"
                color="black"
                width="40"
                height="40"
              />
              <div className="description">
                <h6>Proof of Skills</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ipsam iusto in dignissimos error? Consequatur?
                </p>
              </div>
            </div>
          </div>
          <Link to="/talents">
            <Button variant="contained"> Take Action</Button>
          </Link> 
        </div>
      </div>

      <div className="medical_centers">
        <h3>Find Hospitals/Medical Centers Nearby</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptas, aperiam vel eaque soluta officia facere nemo quas nihil
          earum?
        </p>
        <hr />
        <MedicalCenters />
      </div>

      <div className="swap_wrapper">
        <h3>Swap your Equipment with ease</h3>

        <div className="swap">
          <div className="image">
            <img
              src="/images/3d-african-american-hand-giving-golden-coin_107791-16850-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="content">
            <h5>Steps to swap your Equipment with ease</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              voluptas pariatur. Rem nam quasi modi voluptatem quod, unde ipsa
              non ipsam architecto libero a rerum expedita fugiat vero
              asperiores assumenda! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt et delectus totam mollitia exercitationem
              quas numquam eos ratione voluptatum voluptatem?
            </p>
            <Button variant="contained" className="green">
              Take Action
            </Button>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
}
