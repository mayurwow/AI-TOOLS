export const config = {
  runtime: 'edge',
};

export default async function handler(req) {

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Only POST allowed" }),
      { status: 405 }
    );
  }

  return new Response(
    JSON.stringify({ message: "API WORKING ✅" }),
    { status: 200 }
  );
}
