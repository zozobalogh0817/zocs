export class Versions {
    versions: Array<Version>
}

export class Version {
    latest: boolean
    version: string
    updatePatchUrl: string
    updaterUrl: string
    changeLog: Array<string>
}
