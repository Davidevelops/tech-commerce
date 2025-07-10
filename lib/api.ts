import axios from "axios";
export async function getNewArrivals() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getNewArrivals"
    );
    return res.data.newArrivals;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}

export async function getAllProducts() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getProducts"
    );
    return res.data.products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}

export async function getMobile() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getMobile"
    );
    return res.data.mobile;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}

export async function getConsole() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getConsole"
    );
    return res.data.console;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}

export async function getLaptop() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getLaptop"
    );
    return res.data.laptop;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}

export async function getTablet() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getTablet"
    );
    return res.data.tablet;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}

export async function getWearable() {
  try {
    let res = await axios.get(
      "https://tech-commerce-expressserver.onrender.com/api/account/getWearable"
    );
    return res.data.wearable;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status: ", error.response?.status);
      console.log("Message: ", error.response?.data);
    } else {
      console.log("Unexpected error occured: ", error);
    }
  }
}
