import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

// curl --location 'http://localhost:7071/api/blogposts' --verbose
export async function getBlogPosts(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function getBlogPosts processed request for url "${request.url}"`);

    // Empty array for now ... will fix later in the code
    const blogposts = [];

    return {
        status: 200,
        jsonBody: {
            blogposts
        }
    };
};

app.get('getBlogPosts', {
    route: "blogposts",
    authLevel: 'anonymous',
    handler: getBlogPosts
});