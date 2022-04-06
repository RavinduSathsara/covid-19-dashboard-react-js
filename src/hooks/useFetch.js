import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState({
    success: true,
    message: "Success",
    data: {
      update_date_time: "2022-04-05 22:05:31",
      local_new_cases: 113,
      local_total_cases: 662216,
      local_total_number_of_individuals_in_hospitals: 0,
      local_deaths: 16485,
      local_new_deaths: 0,
      local_recovered: 637306,
      local_active_cases: 8425,
      global_new_cases: 510016,
      global_total_cases: 249461042,
      global_deaths: 5047622,
      global_new_deaths: 7456,
      global_recovered: 225913434,
      total_pcr_testing_count: 6449543,
      daily_pcr_testing_data: [
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
        {
          date: "2022-04-05",
          pcr_count: "2285",
        },
      ],
    },
  });

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data form that resource!");
        }

        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(false);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  return { error, isLoaded, items };
};

export default useFetch;
