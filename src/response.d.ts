import {
	EventInterface,
	LiverInterface,
	LiverSimpleInterface,
	LiverYoutubeChannelInterface,
	VisibilityInterface
} from "./types";

export interface ResponseeTemplateInterface<T> {
	status: "ok" | "ng";
	data: T | NGMessageInterface;
}

export interface NGMessageInterface {
	message: string;
}

/**
 * /events.json の data" フィールド
 *
 */
export interface EventDataInterface extends EventInterface {
	liver: LiverSimpleInterface;
}
export interface EventsDataInterInterface {
	events: EventDataInterface[];
}

/**
 * /livers の "data" フィールド
 */

/**
 * /livers/{liver_id}.json の "data" フィールド
 */
export interface LiverDataInterface {
	liver: LiverInterface & VisibilityInterface;
	/**
	 * NOTE: まだダミーデータっぽい
	 */
	events: Array<EventInterface & VisibilityInterface>;
	user_liver: null;

	// たぶん変更されると思うんだよね。
	// データベース的には別のテーブルになっているのでしょうし、データの意味的にも正規化するのが正解かなって。
	liver_youtube_channel: LiverYoutubeChannelInterface;
	// liver_youtube_channel: LiverYoutubeChannelInterface[]; // 変更されるとしたら、こうかな
}
