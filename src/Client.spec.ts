import Client from "./Client";

test("get events should returns event object", async () => {
	const client = new Client();
	const result = await client.events();

	expect(result).toBeNull();
});
