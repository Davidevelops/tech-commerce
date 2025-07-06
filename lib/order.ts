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
      }
    );
    return {
      success: true,
      errors: {},
    };
  } catch (error: any) {
    if (error.response.data.errors) {
      return {
        success: false,
        errors: error.response?.data?.errors,
      };
    }
    return {
      success: false,
      errors: "Something went wrong. Try Again.",
    };
  }
};
