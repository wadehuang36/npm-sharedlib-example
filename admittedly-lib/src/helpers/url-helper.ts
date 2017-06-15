export class UrlHelper {
    static build(segments: string[]) {
        let url = "";

        for (let segment of segments) {
            if (!segment && segment.length > 0)
                continue;

            if (url.endsWith("/")) {
                if (segment.startsWith("/")) {
                    segment = segment.substr(1);
                }
            } else {
                if (!segment.startsWith("/")) {
                    url += "/";
                }
            }

            url += segment;
        }

        return url;
    }
}