import Restaurant from "../db/models/restaurantsSchma";
import { BaseService } from "./baseService";
import { Model } from "mongoose";

// const PAGE_SIZE = 4;
const NewDate = new Date(2010, 10);

class RestaurantService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  //get - override
  public get(id: string) {
    return this.model.findById(id).populate("dishes");
  }

  //delete - overide
  public delete(id: string) {
    const rest = this.model.findById(id);
    return rest;
  }

  // //Get restaurants in paging and filter
  // public getPaging(page: number, filter: string) {

  //   return this.model.find().limit(PAGE_SIZE).skip((page-1) * PAGE_SIZE);
  // }

  private openNow(hours: string | undefined) {
    if (hours) {
      const now = new Date();
      const nowHours = now.getHours();
      const nowMinutes = now.getMinutes();
      const hoursParse = hours.split("-");
      const open = hoursParse[0];
      const close = hoursParse[1];
      const openParse = open.split(":");
      const closeParse = close.split(":");
      const openHour = parseInt(openParse[0]);
      const openMinute = parseInt(openParse[1]);
      const closeHour = parseInt(closeParse[0]);
      const closeMinute = parseInt(closeParse[1]);
      if (
        (nowHours >= openHour && nowHours <= closeHour) ||
        (nowHours >= openHour && openHour >= closeHour)
      ) {
        if (
          (nowHours === openHour && nowMinutes < openMinute) ||
          (nowHours === closeHour && nowMinutes > closeMinute)
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  public async getFilterRestaurants(
    skip: number,
    limit: number,
    filter: string
  ) {
    const data = JSON.parse(JSON.stringify(await this.model.find()));
    const indexOfFirstRest = skip;
    const indexOfLastRest = skip + limit;
    let filterData;
    switch (filter) {
      case "Open": {
        filterData = data.filter((rest: any) => {
          return this.openNow(rest.openingHours);
        });
        return {
          data: filterData.slice(indexOfFirstRest, indexOfLastRest),
          numsOfItems: filterData.length,
        };
      }
      case "New": {
        filterData = data.filter((rest: any) => {
          return new Date(rest.since) > NewDate;
        });
        return {
          data: filterData.slice(indexOfFirstRest, indexOfLastRest),
          numsOfItems: filterData.length,
        };
      }
      case "Popular": {
        filterData = data.filter((rest: any) => {
          return rest.popular;
        });
        return {
          data: filterData.slice(indexOfFirstRest, indexOfLastRest),
          numsOfItems: filterData.length,
        };
      }
      default: {
        return {
          data: data.slice(indexOfFirstRest, indexOfLastRest),
          numsOfItems: data.length,
        };
      }
    }
  }
}
const restService = new RestaurantService(Restaurant);

export default restService;
