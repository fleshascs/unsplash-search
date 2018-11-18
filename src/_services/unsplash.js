import Unsplash, { toJson } from "unsplash-js";

//sios dalies client side neturetu but
const unsplash = new Unsplash({
  applicationId:
    "a482b14bb3485e528c89b904c22eb687c4e2a54d17cfbb859a365dc130ba960f",
  secret: "192aa20a55c523276b2b9e24d28858b026c50f2d379ed24705ea4a2acb61baa8"
});

export const searchService = q => unsplash.search.photos(q, 1).then(toJson);

export default unsplash;
