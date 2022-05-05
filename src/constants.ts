export const images: any = {
  category: {
    candy: require("../assets/home_assets/candy.png"),
    chocolate: require("../assets/home_assets/chocolate-bar.png"),
    discount: require("../assets/home_assets/discount.png"),
    snacks: require("../assets/home_assets/snacks.png"),
    drink: require("../assets/home_assets/drink.png"),
  },
  main: { logo: require("../assets/icon.png") },
};

type category = {
  id: string;
  title: string;
  source: string;
};

export const SVG_DIMENSION = 35;

export const categoryData: category[] = [
  {
    id: "1",
    title: "discount",
    source: "discount",
  },
  {
    id: "2",
    title: "candy",
    source: "candy",
  },
  {
    id: "3",
    title: "chocolate",
    source: "chocolate",
  },
  {
    id: "4",
    title: "snacks",
    source: "snacks",
  },
  {
    id: "5",
    title: "drinks",
    source: "drink",
  },
];

export type TTokenKeys = {
  [K in TokenKeys]: any;
};

export enum TokenKeys {
  USER_TOKEN = "token",
  UID_TOKEN = "uid",
}
