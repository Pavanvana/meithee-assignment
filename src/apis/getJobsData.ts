import axios from "axios";
import { jobsDataType } from "../types/dataType";

export const getJobsData = async (
  setData: (data: jobsDataType) => void,
  page: number
): Promise<void> => {
  const url = `https://meithee.in/hihres/api/position/open?page=${page}`;

  await axios
    .get(url)
    .then((response) => {
      const updatedData = response.data.data.data.map((data: any) => {
        return {
          id: data.id,
          jobTitle: data.job_title,
          roleType: data.role_type,
          workLocation: data.work_location,
          jobLocationCountry: data.job_location_country,
          jobLocationState: data.job_location_state,
          jobLocationCity: data.job_location_city,
          createdAt: data.created_at,
          lastPage: response.data.data.last_page,
        };
      });
      setData({
        data: updatedData,
        lastPage: response.data.data.last_page,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
