function toPathArray(path) {
  if (Array.isArray(path)) {
    return path
  }
  return path.split('.')
}

/**
 * @public
 * @function hasOwnProperty
 * @description Determines whether the ctx contains deeply nested property of the path description
 * @param ctx {Object}
 * @param path {string|Array}
 * @returns {boolean}
 */
export function hasOwnProperty(ctx, path) {
  const paths = toPathArray(path)
  let tmpTarget = ctx
  return paths.every(
    p => {
      if (tmpTarget.hasOwnProperty(p)) {
        tmpTarget = tmpTarget[p]
        return true
      }
      return false
    }
  )
}

/**
 * @public
 * @function safeGet
 * @description Safely retrieve the deep nested property of ctx that describe in the path
 * @param ctx {Object}
 * @param path {string}
 * @returns {*}
 */
export function safeGet(ctx, path) {
  const paths = toPathArray(path)
  return paths.reduce(
    (o, p) => ((o && hasOwnProperty(o, p)) ? o[p] : undefined),
    ctx
  )
}

/**
 * @public
 * @function safeSet
 * @description Safely set deeply nested property of ctx that describe in path
 * @param ctx
 * @param path
 * @param value
 * @returns {boolean}
 */
export function safeSet(ctx, path, value) {
  const paths = toPathArray(path)
  const lastPropNames = paths.pop()
  if (!lastPropNames) {
    return false
  }
  const parent = safeGet(ctx, paths)
  if (!parent || !hasOwnProperty(parent, lastPropNames)) {
    return false
  }
  parent[lastPropNames] = value
  return true
}

export default {
  hasOwnProperty,
  safeGet,
  safeSet
}
