import {Versions} from "./Versions";

export class Core {
    GetMechanic() {
        let versions: Versions = null;
        let response = fetch("https://gist.githubusercontent.com/zozobalogh0817/3b2ef4e635f0e3b7a9a3ffe3c0a5d051/raw")
        response
            .then(value => value.json())
            .then(json => versions = json)

        let sortedList = versions.versions.sort(version => version.version)
        console.log(sortedList);
    }
}
