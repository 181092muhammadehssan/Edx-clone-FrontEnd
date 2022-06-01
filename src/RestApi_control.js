import axios from "axios";
function Get_Projects(params) {
  console.log("Getting all data");
  return axios({
    method: "GET",
    url: "https://pacific-beyond-83617.herokuapp.com/",
  });
}
function Post_signup(params) {
  console.log(params.person);

  return axios({
    method: "POST",
    url: "https://pacific-beyond-83617.herokuapp.com/signup",
    data: params.person,
  });
}
function Get_images(params) {
  //console.log("bkh called" + params.id);

  return axios({
    method: "PUT",
    url: "https://pacific-beyond-83617.herokuapp.com/getimages",
    data: { img: params.id },
  });
}
function Validate_user(params) {
  return axios({
    method: "POST",
    url: "https://pacific-beyond-83617.herokuapp.com/login",
    data: params.person,
  });
}
export { Get_Projects, Post_signup, Get_images, Validate_user };
