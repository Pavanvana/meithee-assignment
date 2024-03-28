import React, { useEffect, useMemo, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import { getJobsData } from "../../apis/getJobsData";
import { jobsDataType, dataType } from "../../types/dataType";
import Card from "../../common/Card/Card";
import Header from "../Header/Header";

import {
  NextButtonClass,
  PreviousButtonClass,
  jobCardTextClass,
  jobResultTextClass,
  jobsListClass,
} from "./styles";
import Button from "../../common/Button/Button";
import JobDetailedView from "../JobDetailedView/JobDetailedView";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";

const Home = (): React.ReactElement => {
  const [data, setData] = useState<jobsDataType>();
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState<dataType[]>();
  const [pageNum, setPageNum] = useState(1);
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState(false);
  const [detailedViewData, setDetailedViewData] = useState<dataType>(
    {} as dataType
  );

  useEffect(() => {
    scrollToTop();
    getJobsData(setData, pageNum);
  }, [pageNum]);

  useMemo(() => {
    if (search) {
      const searchResult = data?.data.filter((item) =>
        item.jobTitle.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedData(searchResult);
    } else {
      setSearchedData(data?.data);
    }
  }, [search, data]);

  const renderLoadingView = () => (
    <div className="flex items-center justify-center h-[75vh] w-[100vw]">
      <TailSpin color="#4094EF" height={40} width={40} />
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-[100vw]">
      <Header search={search} onChange={setSearch} />
      <div className="flex flex-col justify-center items-center w-full pt-[100px]">
        {data ? (
          <>
            <ul className={jobsListClass}>
              {searchedData?.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setIsDetailedViewOpen(true);
                    setDetailedViewData(item);
                  }}
                >
                  <Card className="flex m-[10px] cursor-pointer">
                    <p className={jobCardTextClass}>
                      Job Title -{" "}
                      <span className={jobResultTextClass}>
                        {item.jobTitle}
                      </span>
                    </p>
                    <p className={jobCardTextClass}>
                      Job role type -{" "}
                      <span className={jobResultTextClass}>
                        {item.roleType}
                      </span>
                    </p>
                    <p className={jobCardTextClass}>
                      Work location -{" "}
                      <span className={jobResultTextClass}>
                        {item.workLocation}
                      </span>
                    </p>
                    <p className={jobCardTextClass}>
                      Job Location -{" "}
                      <span className={jobResultTextClass}>
                        {item.jobLocationCountry}, {item.jobLocationState},{" "}
                        {item.jobLocationCity}
                      </span>
                    </p>
                    <p className={jobCardTextClass}>
                      Job created at -{" "}
                      <span className={jobResultTextClass}>
                        {item.createdAt}
                      </span>
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
            <ReactBaseModal
              isOpen={isDetailedViewOpen}
              onOpenChange={setIsDetailedViewOpen}
            >
              <JobDetailedView detailedViewData={detailedViewData} />
            </ReactBaseModal>
            <div className="flex justify-end w-[70%] mt-[20px] mb-[50px]">
              <Button
                onClick={() => setPageNum(pageNum - 1)}
                buttonText="Previous"
                size="large"
                className={PreviousButtonClass}
                disabled={pageNum === 1}
              />
              <Button
                onClick={() => setPageNum(pageNum + 1)}
                buttonText="Next"
                size="large"
                className={NextButtonClass}
                disabled={pageNum === data.lastPage}
              />
            </div>
          </>
        ) : (
          renderLoadingView()
        )}
      </div>
    </div>
  );
};
export default Home;
