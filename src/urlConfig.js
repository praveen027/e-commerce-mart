const baseUrl = "https://backend-rest-ecommerce.herokuapp.com/";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
