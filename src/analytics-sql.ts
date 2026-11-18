const QUERY_PATH = '/analytics/sql'

/** Analytics SQL query routes, not introspection or the legacy Analytics Engine API. */
export function isAnalyticsSqlQueryTemplate(path: string): boolean {
  return path === QUERY_PATH || path === `/accounts/{account_id}${QUERY_PATH}`
}

/** Concrete API paths for the SELECT-only operations, relative to the API base. */
export const ANALYTICS_SQL_QUERY_PATH = new RegExp(`^(?:/accounts/[0-9a-f]{32})?${QUERY_PATH}/?$`)

/** URL bindings for named ($name) or positional ($1) SQL placeholders. */
export const ANALYTICS_SQL_BINDING = /^param_(?:[a-zA-Z_][a-zA-Z_0-9]*|[0-9]+)$/
