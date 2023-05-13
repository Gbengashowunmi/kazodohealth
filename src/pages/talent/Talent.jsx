import HeaderFooter from "../../components/header-footer/HeaderFooter";
import "./talent.scss";
import Herosection from "../../components/hero/Herosection";
import WhatWeOfferCard from "../../components/what_we_offer/WhatWeOfferCard";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";

export default function Talent() {
  return (
    <HeaderFooter>
      <div className="talent">
        <Herosection
          heroText="Find talents that match your needs"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          reprehenderit voluptatem vitae sint quae quam delectus molestias
          aliquid magnam rerum. Assumenda aliquam voluptas voluptatum corrupti!"
          buttonText="Get Started"
          image="/images/person-seeing-through-magnifying-glass_1048-1748-removebg-preview.png"
          background_color="green_background"
        />

        <section className="post_a_job">
          <div className="image">
            <img
              src="/images/young-female-black-doctor-standing-window-clinic-with-file-dossier_79405-12789.jpg"
              alt=""
            />
          </div>
          <div className="take_action">
            <h3>Post a job, Choose talents</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur assumenda labore quia hic eius possimus dignissimos
              vitae delectus excepturi minima?
            </p>
            <span>
              <Icon
                icon="fluent-mdl2:recruitment-management"
                color="green"
                width="30"
                height="30"
              />
              <div>
                <p>
                  {" "}
                  <strong> Lorem, ipsum dolor.</strong>
                </p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </span>
            <button>Post a job</button>
          </div>
        </section>
        <Divider />
        <aside className="our_offer">
          <h3>What we offer</h3>
          <WhatWeOfferCard
            image="/images/marketers-with-magnifier-research-marketing-opportunities-chart-marketing-research-marketing-analysis-market-opportunities-problems-concept_335657-821-removebg-preview.png"
            header="Search talent"
            list1="something something something"
            list2="something something something"
            list3="something something something"
            list4="something something something"
            list5="something something something"
          />
          <WhatWeOfferCard
            image="/images/image-upload-concept-illustration_114360-996-removebg-preview.png"
            header="Post Job"
            list1="something something something"
            list2="something something something"
            list3="something something something"
            list4="something something something"
            list5="something something something"
          />
          <WhatWeOfferCard
            image="/images/select-concept-illustration_114360-383-removebg-preview.png"
            header="Select preferred talent"
            list1="something something something"
            list2="something something something"
            list3="something something something"
            list4="something something something"
          />
          <WhatWeOfferCard
            image="/images/man-having-online-job-interview_52683-43379-removebg-preview.png"
            header="Hire talent"
            list1="something something something"
            list2="something something something"
          />
        </aside>

        <section className="search_talents">
          <img
            src="/images/close-up-african-american-hand-holding-stethoscope_482257-19507 (1).jpg"
            alt="medical"
          />
          <div className="action">
            <h5>Take the first step toward a smarter talent strategy</h5>
            {/* <hr /> */}
            <span>
              <p>
                <strong>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, dolor.
                </strong>
              </p>
              <button>Find talents</button>
            </span>
          </div>
        </section>
      </div>
    </HeaderFooter>
  );
}
