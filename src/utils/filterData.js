export const filterDataByName = (data, input) => {
  return data?.filter((entry) => entry?.name?.toLowerCase()?.includes(input));
};
