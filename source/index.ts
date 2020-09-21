import { getPackageJSON } from "@bconnorwhite/package";

export async function getScripts() {
  return getPackageJSON().read().then((pkg) => {
    return pkg?.scripts;
  });
}

export async function hasScriptLike(regex: RegExp) {
  return getScripts().then((scripts) => {
    if(scripts !== undefined) {
      return Object.keys(scripts).reduce((retval, name) => {
        const match = name.match(regex);
        if(match !== null && match.length > 0 && match[0] === name) {
          retval.push(name);
        }
        return retval;
      }, [] as string[])
    } else {
      return [];
    }
  });
}

export async function hasScript(name: string) {
  return getScripts().then((scripts) => {
    if(scripts !== undefined) {
      return scripts[name] !== undefined;
    } else {
      return false;
    }
  });
}
