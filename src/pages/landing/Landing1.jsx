import { Button } from "@mui/material";
import HeaderFooter from "../../components/header-footer/HeaderFooter";
import "./landing.scss";
import { Icon } from "@iconify/react";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../../components/HeroImage";
export default function Landing1() {
  return (
    <HeaderFooter>

      {/* <HeroImage/> */}
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
              Laudantium, deserunt.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/blood-donation-illustration-concept-with-blood-bag-world-blood-donor-day_95561-346-removebg-preview.png"
              alt=""
            />
          </div>
        </aside>
        <div className="actions">
          <Button variant="contained" className="secondary_button">
            Explore possibilities
          </Button>
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

            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/240_F_222823036_n9ocpis9ILjK6KuOMV4v7urh4dlHCvSq.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p>Job seekers</p>
            <div className="category">
              <div className="overlay"></div>
              <div className="image">
                <img
                  src="/images/job-3d-word-with-loupe-chalkboard_165073-777.jpg"
                  alt=""
                />
              </div>
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
            <img
              src="/images/business-leaders-lead-their-business-success-by-seeking-out-new-ideas-promote-business-grow_1150-65834.jpg"
              alt=""
            />
          </div>
        </div>
      </article>

      <article className="buy_sell">
        <h3>Buy and sell</h3>
        <p>Want to see more? Go to Shop</p>
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
        <div className="hospital_card_wrapper">
          <div className="hospital_card">
            <div className="image">
              <img
                src="/images/240_F_145493527_D4bH1uFdUupCds7fK3RTQ7c1V9x4q5at.jpg"
                alt=""
              />
            </div>
            <div className="hospital_description">
              <h6>Medpau Int'l Ltd</h6>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <Button variant="contained" className="green read_more">
                Read More
              </Button>
            </div>
          </div>
          <div className="hospital_card">
            <div className="image">
              <img
                src="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
                alt=""
              />
            </div>
            <div className="hospital_description">
              <h6>Medpau Int'l Ltd</h6>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <Button variant="contained" className="green read_more">
                Read More
              </Button>
            </div>
          </div>
          <div className="hospital_card">
            <div className="image">
              <img
                src="/images/240_F_129996095_8ZRakjCOtDWravEcU774ItwFEM9A3aH1.jpg"
                alt=""
              />
            </div>
            <div className="hospital_description">
              <h6>Medpau Int'l Ltd</h6>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <Button variant="contained" className="green read_more">
                Read More
              </Button>
            </div>
          </div>
          <div className="hospital_card">
            <div className="image">
              <img
                src="/images/240_F_30021057_dcjhfPkg8nzYYEzJWc7d6k5mBXO9Qmat.jpg"
                alt=""
              />
            </div>
            <div className="hospital_description">
              <h6>Medpau Int'l Ltd</h6>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <Button variant="contained" className="green read_more">
                Read More
              </Button>
            </div>
          </div>
          <div className="hospital_card">
            <div className="image">
              <img
                src="/images/240_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
                alt=""
              />
            </div>
            <div className="hospital_description">
              <h6>Medpau Int'l Ltd</h6>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <Button variant="contained" className="green read_more">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="swap">
        <div className="image">
          <img
            src="/images/3d-african-american-hand-giving-golden-coin_107791-16850-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="content">
          <h5>Swap your Equipment with ease</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            voluptas pariatur. Rem nam quasi modi voluptatem quod, unde ipsa non
            ipsam architecto libero a rerum expedita fugiat vero asperiores
            assumenda!
          </p>
          <Button variant="contained" className="green">
            Take Action
          </Button>
        </div>
      </div>
    </HeaderFooter>
  );
}
