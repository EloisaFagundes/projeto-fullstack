import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBands,getAllGenres } from "../actions/index";


export const useRoleTypes = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const newUser = JSON.parse(user);
    setUserRole(newUser?.role);
  }, [userRole]);

  return userRole;
};

export const useBands = () => {
  const { allBands } = useSelector((state) => state.usersBand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBands());
  }, [dispatch]);

  // console.log(allBands);
  return allBands;
};

export const useGenres = () => {
  const { allMuscialGenres } = useSelector((state) => state.musicalGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  // console.log(allMuscialGenres);

  return allMuscialGenres;
};

