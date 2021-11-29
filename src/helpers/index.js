import collageConfig from "./../config/collage.json";
import { /* sub, */ isAfter, parse } from "date-fns";

export const filterCollageItems = () => {
  let filteredConfig = [...collageConfig];

  // Ignore filtering logic if env var is defined
  if (process.env.VUE_APP_IGNORE_DATES != 1) {
    filteredConfig = filteredConfig.filter((item) => {
      const itemDate = parse(`2021-12-${item.day}`, "yyyy-MM-dd", new Date());

      // return !isAfter(sub(itemDate, { days: 10 }), new Date());
      return !isAfter(itemDate, new Date());
    });
  }

  return filteredConfig;
};
