const Like = ({ data, setIsLiked }) => {
  const oldData = JSON.parse(localStorage.getItem("like-wisata")) || [];
  const isSame = oldData.find((item) => item.id == data.id);
  if (isSame) {
    const index = oldData.findIndex((item) => item.id == isSame.id);
    oldData.splice(index, 1);
    localStorage.setItem("like-wisata", JSON.stringify([...oldData]));
    setIsLiked(false);
    return;
  }
  localStorage.setItem("like-wisata", JSON.stringify([...oldData, data]));
  setIsLiked(true);
};
// const Like = ({ setIsLiked, data }) => {
//   const oldData = JSON.parse(localStorage.getItem("like-wisata")) || [];
//   const isSame = oldData.find((item) => item.id == data.id);
//   if (isSame) {
//     const index = oldData.findIndex((item) => item.id == isSame.id);
//     oldData.splice(index, 1);
//     localStorage.setItem("like-wisata", JSON.stringify([...oldData]));
//     setIsLiked(false);
//     return;
//   }
//   localStorage.setItem("like-wisata", JSON.stringify([...oldData, data]));
//   setIsLiked(true);
// };

const LikeKuliner = ({ data, setIsLiked }) => {
  const oldData = JSON.parse(localStorage.getItem("like-kuliner")) || [];
  const isSame = oldData.find((item) => item.id == data.id);
  if (isSame) {
    const index = oldData.findIndex((item) => item.id == isSame.id);
    oldData.splice(index, 1);
    localStorage.setItem("like-kuliner", JSON.stringify([...oldData]));
    setIsLiked(false);
    return;
  }
  localStorage.setItem("like-kuliner", JSON.stringify([...oldData, data]));
  setIsLiked(true);
};

const findLike = ({ setIsLiked, data }) => {
  const localData = JSON.parse(localStorage.getItem("like-wisata")) || [];
  const isAlreadyLiked = localData.some((item) => item.id === data.id);
  if (!isAlreadyLiked) {
    setIsLiked(false);
    return;
  }
  setIsLiked(isAlreadyLiked);
};
// const findLike = ({ setIsLiked, data }) => {
//   const localData = JSON.parse(localStorage.getItem("like-wisata")) || [];
//   const isAlreadyLiked = localData.some((item) => item.id === data.id);
//   if (!isAlreadyLiked) {
//     setIsLiked(false);
//     return;
//   }
//   setIsLiked(isAlreadyLiked);
// };

export { Like, findLike, LikeKuliner };
