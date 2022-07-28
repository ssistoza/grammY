import {
    type InlineQueryResultDocument,
    type InlineQueryResultCachedDocument,
    type InlineQueryResult,
    type InlineQueryResultArticle,
    type InlineQueryResultAudio,
    type InlineQueryResultContact,
    type InlineQueryResultCachedAudio,
    type InlineQueryResultVoice,
    type InlineQueryResultGame,
    type InlineQueryResultGif,
    type InlineQueryResultCachedGif,
    type InlineQueryResultLocation,
    type InlineQueryResultCachedMpeg4Gif,
    type InlineQueryResultMpeg4Gif,
    type InlineQueryResultCachedPhoto,
    type InlineQueryResultPhoto,
    type InlineQueryResultVenue,
    type InlineQueryResultCachedVideo,
    type InlineQueryResultVideo,
    type InlineQueryResultCachedSticker,
    type InlineQueryResultCachedVoice,
} from "../platform.deno.ts";

type WithoutType<T extends InlineQueryResult> = Omit<T, "type">;

type QueryResult<
    Cached extends boolean,
    CachedResult extends InlineQueryResult,
    Result extends InlineQueryResult
> = Cached extends true ? WithoutType<CachedResult> : WithoutType<Result>;

/**
 * Use this class to simply building inline query result objects.
 *
 * ```ts
 * const queries = new InlineQueryResultBuilder()
 *    .article({
 *        id: "article-id-00",
 *        title: "Article Title 00",
 *        input_message_content: {
 *            message_text: "Some Input Message Content",
 *        },
 *    })
 *    .voice<true>({
 *        id: "voice-cached-id-00",
 *        title: "Voice Cached Title 00",
 *        voice_file_id: "voice-cached-file-id-00",
 *    })
 *    .voiceCache({
 *        id: "voice-cached-id-01",
 *        title: "Voice Cached Title 01",
 *        voice_file_id: "voice-cached-file-id-01",
 *    })
 *    .build()
 * ```
 *
 * Be sure to check the [documentation](https://core.telegram.org/bots/api#inlinequeryresult) on inline query result in grammY.
 */
export class InlineQueryResultBuilder {
    constructor(
        private readonly inline_query_results: Array<InlineQueryResult> = []
    ) {}

    add(query: InlineQueryResult) {
        this.inline_query_results.push(query);
        return this;
    }

    addMany(...query: Array<InlineQueryResult>) {
        this.inline_query_results.push(...query);
        return this;
    }

    article(options: WithoutType<InlineQueryResultArticle>) {
        return this.add({
            type: "article",
            ...options,
        });
    }

    audio<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedAudio,
            InlineQueryResultAudio
        >
    ) {
        return this.add({
            type: "audio",
            ...options,
        });
    }

    audioCache(options: WithoutType<InlineQueryResultCachedAudio>) {
        return this.audio<true>(options);
    }

    build() {
        return this.inline_query_results;
    }

    contact(options: WithoutType<InlineQueryResultContact>) {
        return this.add({
            type: "contact",
            ...options,
        });
    }

    document<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedDocument,
            InlineQueryResultDocument
        >
    ) {
        return this.add({
            type: "document",
            ...options,
        });
    }

    documentCache(options: WithoutType<InlineQueryResultCachedDocument>) {
        return this.document<true>(options);
    }

    game(options: WithoutType<InlineQueryResultGame>) {
        return this.add({
            type: "game",
            ...options,
        });
    }

    gif<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedGif,
            InlineQueryResultGif
        >
    ) {
        return this.add({
            type: "gif",
            ...options,
        });
    }

    gifCache(options: WithoutType<InlineQueryResultCachedGif>) {
        return this.gif<true>(options);
    }

    location(options: WithoutType<InlineQueryResultLocation>) {
        return this.add({
            type: "location",
            ...options,
        });
    }

    mpeg4gif<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedMpeg4Gif,
            InlineQueryResultMpeg4Gif
        >
    ) {
        return this.add({
            type: "mpeg4_gif",
            ...options,
        });
    }

    mpeg4gifCache(options: WithoutType<InlineQueryResultCachedMpeg4Gif>) {
        return this.mpeg4gif<true>(options);
    }

    photo<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedPhoto,
            InlineQueryResultPhoto
        >
    ) {
        return this.add({
            type: "photo",
            ...options,
        });
    }

    photoCache(options: WithoutType<InlineQueryResultCachedPhoto>) {
        return this.photo<true>(options);
    }

    venue(options: WithoutType<InlineQueryResultVenue>) {
        return this.add({ type: "venue", ...options });
    }

    video<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedVideo,
            InlineQueryResultVideo
        >
    ) {
        return this.add({
            type: "video",
            ...options,
        });
    }

    videoCache(options: WithoutType<InlineQueryResultCachedVideo>) {
        return this.video<true>(options);
    }

    stickerCache(options: WithoutType<InlineQueryResultCachedSticker>) {
        return this.add({
            type: "sticker",
            ...options,
        });
    }

    voice<Cached extends boolean = false>(
        options: QueryResult<
            Cached,
            InlineQueryResultCachedVoice,
            InlineQueryResultVoice
        >
    ) {
        return this.add({
            type: "voice",
            ...options,
        });
    }

    voiceCache(options: WithoutType<InlineQueryResultCachedVoice>) {
        return this.voice<true>(options);
    }
}

const queries = new InlineQueryResultBuilder()
    .article({
        id: "article-id-00",
        title: "Article Title 00",
        input_message_content: {
            message_text: "Some Input Message Content",
        },
    })
    .voice<true>({
        id: "voice-cached-id-00",
        title: "Voice Cached Title 00",
        voice_file_id: "voice-cached-file-id-00",
    })
    .voiceCache({
        id: "voice-cached-id-01",
        title: "Voice Cached Title 01",
        voice_file_id: "voice-cached-file-id-01",
    });
