// import type { Core } from "@strapi/strapi";
// import { TestContextAssert } from "node:test";

// export default {
//   async index(ctx: Core.Context) {
//     const { email } = ctx.request.body as { email?: string };

//     if (!email) {
//       return ctx.badRequest("Email is required");
//     }

//     try {
//       // 1. Send to Brevo
//       const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
//         method: "POST",
//         headers: {
//           "api-key": process.env.BREVO_API_KEY ?? "",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           listIds: [YOUR_LIST_ID],
//           updateEnabled: true,
//         }),
//       });

//       const data = await brevoRes.json();

//       if (!brevoRes.ok) return ctx.badRequest(data);

//       // 2. Store inside Strapi (local DB)
//       await strapi.entityService.create("api::subscriber.subscriber", {
//         data: { email },
//       });

//       return ctx.send({ success: true });
//     } catch (err) {
//       return ctx.internalServerError("Unable to reach Brevo");
//     }
//   },
// };