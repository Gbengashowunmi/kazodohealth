import { Icon } from "@iconify/react";
import "./jobcard.scss";

export default function JobCard() {
  return (
    <div className="job_card">
      <header>
        <p className="when">new</p>
        <Icon
          icon="iconamoon:menu-kebab-vertical-circle-fill"
          color="gray"
          width="30"
          height="30"
        />
      </header>
      <h5>
        <strong> Mid wife (3years experience)</strong>
      </h5>
      <p className="co_name">Name of Hospital</p>
      <p className="state">Lagos state</p>
      <span className="job_card_span">
        <Icon icon="mdi:briefcase-clock" /> <p>Remote/hybrid</p>
      </span>

      <p className="card_job_description">
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </li>
          

        </ul>

        <p>Posted date</p>
      </p>
    </div>
  );
}
