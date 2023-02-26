import axios from "axios";

const baseURL = `https://63cd29dcfba6420d4d69a33b.mockapi.io/`;

// // function to perform the login

// // it will take the email id and return the user
// export const getUser = (id) => {
//   return axios
//     .get(`${baseURL}/users/${id}`)
//     .then((res) => Promise.resolve(res))
//     .catch(() => Promise.reject("User Not Found"));
// };

// // this function will perform the signup functionality
// // it will take the userForm and post it to the API
export const postUser = (userCredentials) => {
  return axios
    .post(`${baseURL}/users`, userCredentials)
    .then((res) => "Successfull")
    .catch((res) => Promise.reject("Failed"));
};

//this function will take the argument of data and params and will return the data fetched from the API
export const getProductData = ({
  target,
  page,
  sort,
  order,
  category,
  start,
  end,
}) => {
  return axios
    .get(`${baseURL}/products`, {
      params: {
        target: target,
        _page: page,
        _limit: 10,
        _sort: sort,
        _order: order,
        category: category,
        price_gte: start,
        price_lte: end,
      },
    })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};

export const getTotalPages = ({
  target,
  sort,
  order,
  category,
  start,
  end,
}) => {
  return axios
    .get(`${baseURL}/products`, {
      params: {
        target: target,
        _sort: sort,
        _order: order,
        category: category,
        price_gte: start,
        price_lte: end,
      },
    })
    .then((res) => Promise.resolve(Math.ceil(res.data.length / 15)))
    .catch((err) => Promise.reject(err));
};
