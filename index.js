const UNDEFINED = void 0
export default function sget(ctx, path) {
  console.assert(path !== UNDEFINED, 'path is needed')
  console.assert(typeof path === 'string', 'Input path must be a string')
  let pathArr = path.split('.')
  return pathArr.reduce(function(ctx, propertyName) {
    return ctx !== UNDEFINED ? ctx[propertyName] : UNDEFINED
  }, ctx)
}
