export const sortByTimestamp = (data, order = "descending") => {
  if (!data || !data.length) return;
  try {
    const sorted = data?.sort((a, b) => {
      const dateA = new Date(a.date_local);
      const dateB = new Date(b.date_local);
      if (order === "ascending") return dateA - dateB;
      return dateB - dateA;
    });
    return sorted;
  } catch (e) {
    console.log(`An error occurred while sorting data in ${order} order: ${e}`);
    return;
  }
};
