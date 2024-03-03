const getDefaultData = ({ query, wisata, setFilteringData, search }) => {
  if (!search) {
    return;
  }
  const lowerSearch = query.toLowerCase();
  const filtering = wisata.filter((item) => {
    const lowerTitle = item.nama.toLowerCase();

    return lowerTitle.includes(lowerSearch);
  });
  setFilteringData(filtering);
};

const getSearchData = (e, { navigate, search, wisata, setFilteringData }) => {
  e.preventDefault();
  navigate(`/wisata?search=${search || "*"}`);
  const lowerSearch = search.toLowerCase();
  const filtering = wisata.filter((item) => {
    const lowerTitle = item.nama.toLowerCase();

    return lowerTitle.includes(lowerSearch);
  });
  setFilteringData(filtering);
};

const findWisata = (e, { wisata, setData }) => {
  const lowerSearch = e.target.value.toLowerCase();
  const filtering = wisata.filter((item) => {
    const lowerTitle = item.nama.toLowerCase();

    return lowerTitle.includes(lowerSearch);
  });
  setData(filtering);
};
const findKuliner = (e, { kuliner, setData }) => {
  const lowerSearch = e.target.value.toLowerCase();
  const filtering = kuliner.filter((item) => {
    const lowerTitle = item.nama.toLowerCase();

    return lowerTitle.includes(lowerSearch);
  });
  setData(filtering);
};

export { getDefaultData, getSearchData, findWisata, findKuliner };
