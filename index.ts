import figlet from "figlet";

const server = Bun.serve({
  port: 9372,
  fetch() {
    const body = figlet.textSync("Bun!")
    return new Response(body)
  },
});

console.log('Hello world from:', server.hostname)

