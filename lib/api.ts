import axios from "axios";
export async function getNewArrivals() {
  try {
    let res = await axios.get(
      "http://localhost:5000/api/account/getNewArrivals"
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
