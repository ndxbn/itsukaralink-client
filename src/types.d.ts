// おそらく DB でこんなふうに持ってるんだろう と考えながら書いた、プリミティブなデータ

/**
 * イベント
 */
export type EventInterface = VisibilityInterface &
	RecommendableInterface & {
		id: number;
		name: string;
		description: string;
		url: string; // URL

		start_date: string; // maybe ISO8601
		end_date: string; // maybe ISO8601
	};

/**
 * ライバー
 */
export interface LiverInterface {
	id: number;
	name: string;
	description: string;

	/**
	 * S3 の URL で、おそらく png
	 * もしかしたら、将来的に `string[]` になるかも？（一般的に、DB では正規化対象になると思うので）
	 */
	avatar: string;

	/**
	 * カラーコード e.g. "#e43f3b"
	 * もしかしたら、将来的に `string[]` になるかも？（public フィールドの次にあるので）
	 */
	color: string;
}

/**
 * Liver のデータのち、Liver 一覧以外のページで使うやつ
 */
export type LiverSimpleInterface = Pick<
	LiverInterface,
	"id" | "name" | "avatar" | "color"
>;

export interface LiverYoutubeChannelInterface {
	/**
	 * サロゲートキーかな
	 */
	id: number;

	/**
	 * おそらく Liver と同じ ID。
	 *
	 * 内部の DB で Liver Table と分けてるんじゃないかな。複数のチャンネルを持ってることもあるだろうし。
	 */
	liver_id: number;

	/**
	 * YouTube チャンネルの文字列、
	 *
	 * e.g. UCWz0CSYCxf4MhRKPDm220AQ
	 */
	channel: string;
}

export interface VisibilityInterface {
	public: 1;
}

export interface SortableInterface {
	/**
	 *  ソート用で、`順位 x 10`
	 *
	 * e.g. LiverInterface に使われる場合、委員長が 10 でトップ、次いでしずりんが 20。（2019-02-07 21:33）
	 */
	position: number;
}

export interface RecommendableInterface {
	recommended: boolean;
}
