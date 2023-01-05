import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // your server-side functionality
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello" }),
  };
};

export { handler };
