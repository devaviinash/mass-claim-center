export async function GET() {
   return Response.json({
      hasKey: !!process.env.RESEND_API_KEY,
      keyPrefix: process.env.RESEND_API_KEY
         ? process.env.RESEND_API_KEY.substring(0, 8)
         : null,
   });
}
