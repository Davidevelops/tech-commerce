export async function getProduct(id: string) {
  let res = await fetch(
    `https://tech-commerce-expressserver.onrender.com/api/account/getProduct/${id}`,
    {
      cache: "force-cache",
    }
  );
  let data = await res.json();

  return data.product;
}
