import "./jobs.scss";
import JobCard from "../../components/jobcard/JobCard";
import HeaderFooter from "../../components/header-footer/HeaderFooter";
import JobDescription from "../../components/job_description/JobDescription";

export default function Jobs() {
  return (
    <HeaderFooter>
      <div className="job_header">
        <h6 className="active">Job feeds</h6>
        <h6>Hospital Reviews</h6>
      </div>
      <div className="jobs_wrapper">
        <div className="jobs">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="selected_job">
          <JobDescription />
        </div>
      </div>
    </HeaderFooter>
  );
}
