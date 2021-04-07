import {Http, RequestOptions} from "./http";

export class HttpImpl implements Http {

    execute(request: RequestOptions): Promise<any> {
        const options: RequestInit = {method: request.method}
        if (request?.headers) options.headers = new Headers(request.headers)
        if(request?.body) options.body = JSON.stringify(request.body)

        return fetch(request.url, options)
            .then(res => res.json())
            .catch(err => console.log(err))

    }
}