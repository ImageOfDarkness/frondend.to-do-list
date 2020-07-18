import instance from "./index";

export default {
  getList: () =>
    new Promise((resolve, reject) => {
      instance({
        url: "/tasks",
        method: "get",
      })
        .then((data) => {
          resolve(data.data);
        })
        .catch((data) => {
          reject(data);
        });
    }),
  deleteItem: (id) =>
    new Promise((resolve, reject) => {
      instance({
        url: `/tasks/${id}`,
        method: "delete",
      })
        .then((data) => {
          resolve(data.data);
        })
        .catch((data) => {
          reject(data);
        });
    }),
  addItem: (text) =>
    new Promise((resolve, reject) => {
      instance({
        url: `/tasks`,
        method: "post",
        data: {
          text: text,
        },
      })
        .then((data) => {
          resolve(data.data);
        })
        .catch((data) => {
          reject(data);
        });
    }),
  editItem: ({ text, checked, id }) =>
    new Promise((resolve, reject) => {
      instance({
        url: `/tasks/${id}`,
        method: "patch",
        data: {
          text: text,
          checked: checked,
        },
      })
        .then((data) => {
          resolve(data.data);
        })
        .catch((data) => {
          reject(data);
        });
    }),
};
