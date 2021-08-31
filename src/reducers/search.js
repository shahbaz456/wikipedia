let initialState = {
  pageId: "",
  title: "",
  para: "",
  isLoading: false,
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log("show the", action.payload.query.pages);
      let info = {
        pageId: null,
        title: "",
        para: "",
      };

      Object.keys(action.payload.query.pages).forEach((key) => {
        if (key === "-1") {
          // return res.status(400).json({ message: "No Details found with this para." });
        }
        info.pageId = key;
        info.title = action.payload.query.pages[key].title;
        info.para = action.payload.query.pages[key].extract;
      });
      return {
        ...state,
        pageId: info.pageId,
        title: info.title,
        para: info.para,
      };
    case "RESET":
      return { pageId: "", title: "", para: "" };
    case "LOADING_TRUE":
      return { ...state, isLoading: true };
    case "LOADING_FALSE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default searchReducer;
