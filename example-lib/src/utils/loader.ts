import * as fs from "fs"
import * as path from "path"

const supportExtensions = [".js", ".ts"];
export function loadModules(dir: string): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, function (err, items) {
            if (err) {
                return reject(err);
            }

            let modules = [];

            for (let filename of items) {
                if (!filename.startsWith("_") && supportExtensions.indexOf(path.extname(filename)) > -1) {
                    modules.push(require(path.join(dir, filename)));
                }
            }

            return resolve(modules);
        });
    });
}