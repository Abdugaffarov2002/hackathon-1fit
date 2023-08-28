import React, { FC, ReactNode, createContext, useState } from "react";
import { ISave, ISaveContextTypes } from "./type";
import { ProductType } from "../../models/product";

export const saveContext = createContext<ISaveContextTypes | null>(null);

const initState: ISave = {
  products: [],
};

interface ICartContextProps {
  children: ReactNode;
}

function getSaveFromLS(): ISave {
  const data = JSON.parse(localStorage.getItem("save") as string);
  if (!data) {
    return initState;
  }

  return data;
}

function setSaveToLS(save: ISave) {
  localStorage.setItem("save", JSON.stringify(save));
}
// ----------------- comment ---------------------------- //
function getCommentFromLS(): ISave {
  const data = JSON.parse(localStorage.getItem("comment") as string);
  if (!data) {
    return initState;
  }

  return data;
}

function setCommentToLS(comment: ISave) {
  localStorage.setItem("comment", JSON.stringify(comment));
}
// ----------------- comment ---------------------------- //

const SavedContext: FC<ICartContextProps> = ({ children }) => {
  const [save, setSave] = useState(initState);

  function getSave() {
    const data = getSaveFromLS();
    setSave(data);
  }

  function addProductToSave(product: ProductType) {
    try {
      const data = getSaveFromLS();
      data.products.push({
        ...product,
        comment: "",
      });

      setSaveToLS(data);
      getSave();
    } catch (error) {
      console.log(error, "add product to save ");
    }
  }

  function deleteProductFromSave(id: number) {
    const data = getSaveFromLS();

    data.products = data.products.filter((item) => item.id !== id);

    setSaveToLS(data);
    getSave();
  }

  function isAlreadyInSave(id: number): boolean {
    const data = getSaveFromLS();
    const isInCart = data.products.some((item) => item.id === id);

    return isInCart;
  }
  // ----------------- comment ---------------------------- //

  const [comments, setComments] = useState(initState);
  const [newComment, setNewComment] = useState("");
  const [showComment, setShowComment] = useState("");

  function getComment() {
    const data = getCommentFromLS();
    setComments(data);
  }

  function addProductToComment(product: ProductType) {
    try {
      const data = getCommentFromLS();
      data.products.push({
        ...product,
        comment: `${newComment}`,
      });

      setCommentToLS(data);
      getComment();
    } catch (error) {
      console.log(error, "add product to comment ");
    }
  }
  function showOneComment(id: number) {
    const data = getCommentFromLS();

    data.products.map((item) => {
      if (item.id === id) {
        setShowComment(item.comment);
      }
    });
  }

  // ----------------- comment ---------------------------- //

  const value = {
    save,
    comments,
    newComment,
    showComment,
    setNewComment,
    getSave,
    addProductToSave,
    isAlreadyInSave,
    deleteProductFromSave,
    addProductToComment,
    getComment,
    showOneComment,
  };
  return <saveContext.Provider value={value}>{children}</saveContext.Provider>;
};

export default SavedContext;
