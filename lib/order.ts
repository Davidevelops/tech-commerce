import axios from "axios";

export const submitOrder = async (prevState: any, formData: FormData) => {
  const orderName = formData.getAll("orderName")?.toString();
  const orderQuantity = formData.getAll("orderQuantity")?.toString();
  const orderPrice = formData.getAll("orderPrice")?.toString();
  const street = formData.get("street")?.toString();
  const barangay = formData.get("barangay")?.toString();
  const city = formData.get("city")?.toString();
  const province = formData.get("province")?.toString();
  const total = formData.get("total")?.toString();
  const recipientName = formData.get("recipientName")?.toString();
  const recipientContact = formData.get("recipientContact")?.toString();

  try {
    const newOrder = await axios.post(
      "http://localhost:5000/api/account/submitOrder",
      {
        orderName,
        orderQuantity,
        orderPrice,
        street,
        barangay,
        city,
        province,
        total,
        recipientName,
        recipientContact,
      },
      {
        withCredentials: true,
      }
    );

    return {
      success: true,
      errors: {},
    };
  } catch (error: any) {
    if (error.response?.data?.errors) {
      return {
        success: false,
        errors: error.response. data.errors,
      };
    }
    return {
      success: false,
      errors: "Something went wrong. Try Again.",
    };
  }
};

export const getOrderDetails = async (orderId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/account/getOrder/${orderId}`,
      {
        withCredentials: true,
      }
    );

    return {
      success: true,
      order: response.data.order,
    };
  } catch (error: any) {
    if (error.response?.data?.error) {
      return {
        success: false,
        error: error.response.data.error,
      };
    }
    return {
      success: false,
      error: "Something went wrong. Try Again.",
    };
  }
};
