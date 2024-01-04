export const CONFIG = {
  chaturbate: {
    API_URL: `https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=LBTb1&client_ip=request_ip`,
    LINKING_CODES: {
      Home_Page: (track = "default") =>
        `https://chaturbate.com/in/?tour=grq0&campaign=LBTb1&track=${track}`,
      JoinPage_Top_Room: (track) =>
        `https://chaturbate.com/in/?tour=uhEc&campaign=LBTb1&track=${track}`,
      ToRoom: ({ track = "default", room = "anderson_lily" }) =>
        `https://chaturbate.com/in/?tour=YrCr&campaign=LBTb1&track=${track}&room=${room}`,

      JoinPage_To_Room: ({ track = "default", room = "anderson_lily" }) =>
        `https://chaturbate.com/in/?tour=APi5&campaign=LBTb1&track=${track}&room=${room}`,

      JoinPage_To_Female: (track = "default") =>
        `https://chaturbate.com/in/?tour=JpRf&campaign=LBTb1&track=${track}&next=/female-cams/`,

      Aff: `https://chaturbate.com/in/?tour=07kX&campaign=LBTb1&track=default`,
    },
  },
  stripchat: {
    API_URL: "",
    LINKING_CODES: {
      JoinPage: ({ campaign = "Twitter", source = "twitter" }) =>
        `https://go.rmhfrtnd.com?campaignId=${campaign}&sourceId=${source}&path=%2Fsignup%2Fuser&userId=c9ff0d8ffe36017d924ff85f598780492bf702e92aab953cde7b289e7bbc1076`,
      TopModelRoom_SignUpPop: ({ campaign = "Twitter", source = "twitter" }) =>
        `https://go.rmhfrtnd.com/api/goToTheRoom?campaignId=${campaign}&sourceId=${source}&tag=girls&action=sbSignupWithModel&userId=c9ff0d8ffe36017d924ff85f598780492bf702e92aab953cde7b289e7bbc1076`,
      ModelRoom_SignUpPop: ({
        campaign = "default",
        source = "twitter",
        model = "lailai888",
      }) =>
        `https://go.rmhfrtnd.com?campaignId=${campaign}&sourceId=${source}&tag=girls&onlineModels=${model}&action=sbSignupWithModel&sound=on&userId=c9ff0d8ffe36017d924ff85f598780492bf702e92aab953cde7b289e7bbc1076`,
    },
  },
};
