import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBanners } from "../features/bannersSlice";
import { fetchFaq } from "../features/faqSlice";
import { fetchGeneralConfiguration } from "../features/generalConfigurationSlice";
import {
  fetchLibraryCategories,
  fetchLibrarylistDetails,
} from "../features/librarySlice";
import { fetchPosts } from "../features/blogSlice";
import { fetchPuja } from "../features/poojaSlice";
import HomePage from "../components/layouts/HomePage";
import { fetchHomeThemeContent } from "../features/homeThemeSlice";
import Loader from "../components/preloader/Preloader"; // Import the Loader component

export default function Index() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const getHomePageDetails = useSelector((state) => state?.Banners?.banners);
  const generalConfiguration = useSelector(
    (state) => state.generalConfiguration.data
  );
  const faq = useSelector((state) => state.faq.data);
  const pooja = useSelector((state) => state?.pooja?.puja);
  const posts = useSelector((state) => state.blog.posts);
  const content = useSelector((state) => state.homeTheme);
  const { categories, categoryDetails, loading: libraryLoading, error } = useSelector(
    (state) => state.library
  );

  const bannersStatus = useSelector((state) => state?.Banners?.status);
  const faqStatus = useSelector((state) => state?.faq?.status);
  const generalConfigStatus = useSelector((state) => state?.generalConfiguration?.status);
  const homeThemeStatus = useSelector((state) => state?.homeTheme?.status);
  const libraryCategoriesStatus = useSelector((state) => state?.library?.categoriesStatus);
  const postsStatus = useSelector((state) => state?.blog?.status);
  const poojaStatus = useSelector((state) => state?.pooja?.status);
  const libraryListDetailsStatus = useSelector((state) => state?.library?.listDetailsStatus);

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchHomeThemeContent());
    dispatch(fetchFaq());
    dispatch(fetchGeneralConfiguration());
    dispatch(fetchLibraryCategories());
    dispatch(fetchPosts());
    dispatch(fetchPuja());
    dispatch(fetchLibrarylistDetails());
  }, [dispatch]);

  useEffect(() => {
    if (
      bannersStatus !== "loading" &&
      faqStatus !== "loading" &&
      generalConfigStatus !== "loading" &&
      homeThemeStatus !== "loading" &&
      libraryCategoriesStatus !== "loading" &&
      postsStatus !== "loading" &&
      poojaStatus !== "loading" &&
      libraryListDetailsStatus !== "loading"
    ) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [
    bannersStatus,
    faqStatus,
    generalConfigStatus,
    homeThemeStatus,
    libraryCategoriesStatus,
    postsStatus,
    poojaStatus,
    libraryListDetailsStatus,
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <HomePage
          getHomePageDetails={getHomePageDetails}
          generalConfiguration={generalConfiguration}
          faqData={faq}
          categories={categories}
          blogData={posts?.blogs}
          poojaData={pooja}
          homeContent={content}
        />
      )}
    </>
  );
}
