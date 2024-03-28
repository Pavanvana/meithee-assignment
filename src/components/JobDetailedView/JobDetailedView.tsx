import React from "react";
import { jobCardTextClass, jobResultTextClass } from "./styles";

const JobDetailedView = (props: any): React.ReactElement => {
  const { detailedViewData } = props;
  return (
    <div className="p-[20px]">
      <div>
        <p className={jobCardTextClass}>
          Job Title -{" "}
          <span className={jobResultTextClass}>
            {detailedViewData.jobTitle}
          </span>
        </p>
        <p className={jobCardTextClass}>
          Job role type -{" "}
          <span className={jobResultTextClass}>
            {detailedViewData.roleType}
          </span>
        </p>
        <p className={jobCardTextClass}>
          Work location -{" "}
          <span className={jobResultTextClass}>
            {detailedViewData.workLocation}
          </span>
        </p>
        <p className={jobCardTextClass}>
          Job Location -{" "}
          <span className={jobResultTextClass}>
            {detailedViewData.jobLocationCountry},{" "}
            {detailedViewData.jobLocationState},{" "}
            {detailedViewData.jobLocationCity}
          </span>
        </p>
        <p className={jobCardTextClass}>
          Job created at -{" "}
          <span className={jobResultTextClass}>
            {detailedViewData.createdAt}
          </span>
        </p>
      </div>
    </div>
  );
};

export default JobDetailedView;
