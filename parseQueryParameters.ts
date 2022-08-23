export function parseQueryParameters(
  location: { search: string } = window.location
) {
  return location.search
    .substring(1)
    .split("&")
    .reduce((acc, param) => {
      const [key, ...values] = param.split("=");
      const value = values.join("=");
      acc[decodeURIComponent(key)] = decodeURIComponent(value);
      return acc;
    }, {});
}
