// module.exports = {
//   env: {
//     API_URL: 'http://localhost:4000',
//     API_SEARCH_ATTR_NAME: 'search',
//     API_LIMIT_ATTR_NAME: 'limit',
//     API_SORT_BY_ATTR_NAME: 'sortBy',
//     API_SORT_ORDER_ATTR_NAME: 'sortOrder',
//     API_SORT_ORDER_DEFAULT_VALUE: 'asc',
//     API_FILTER_ATTR_NAME: 'filter',
//   },
// };
module.exports = {
  experimental: {
    forceSwcTransforms: true,
    runtime: 'nodejs',
    serverComponents: true,
  },
};
