export async function getProduct(id: string) {
  let res = await fetch(`http://localhost:5000/api/account/getProduct/${id}`, {
    cache: "force-cache",
  });
  let data = await res.json();

  return data.product;
}
