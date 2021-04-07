export interface RequestOptions {
    readonly method: string
    readonly url:string
    readonly headers?: any
    readonly body?:any
}

export interface Http {
    execute(request: RequestOptions):Promise<any>
}

