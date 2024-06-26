export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
export const BG_IMAGE='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMAGE_CDN_URL ="https://image.tmdb.org/t/p/w500" 

export const SUPPORTED_LANGUAGES = [{identifier : "en" , name: "English"},{identifier : "hindi" , name: "Hindi"},{identifier : "japanese" , name: "Japanses"},{identifier : "spanish" , name: "Spanish"},]

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;