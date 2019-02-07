import * as Axios from "axios";

export default class Client {
	private client: Axios.AxiosInstance;

	public constructor(baseUrl: string = "https://api.itsukaralink.jp/") {
		this.client = Axios.default.create({ baseURL: baseUrl });
	}

	public async events() {
		return this.client.get("/events.json").then(value => value.data.data);
	}
}
