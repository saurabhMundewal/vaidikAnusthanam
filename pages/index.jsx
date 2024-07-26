import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBanners } from "../features/bannersSlice";
import { fetchFaq } from "../features/faqSlice";
import { fetchGeneralConfiguration } from "../features/generalConfigurationSlice";
import { fetchLibraryCategories, fetchLibrarylistDetails } from "../features/librarySlice";
import { fetchPosts } from "../features/blogSlice";
import { fetchPuja } from "../features/poojaSlice";
import HomePage from '../components/layouts/HomePage'
import { fetchHomeThemeContent } from '../features/homeThemeSlice';


export default function () {
  const dispatch = useDispatch();
  const getHomePageDetails = useSelector((state) => state?.Banners?.banners);
  const status = useSelector((state) => state?.Banners?.banners?.status);
  const generalConfiguration = useSelector((state) => state.generalConfiguration.data);
  const generalConfigurationStatus = useSelector((state) => state.generalConfiguration.status);
  const faq = useSelector((state) => state.faq.data);
  const pooja = useSelector((state) => state?.pooja?.puja);
  const posts = useSelector((state) => state.blog.posts);
  const  content  = useSelector((state) => state.homeTheme);
  const  libraryCategory  = useSelector((state) => state?.library);
  const { categories, categoryDetails, loading, error } = useSelector((state) => state.library);

  console.log(libraryCategory, 'libraryCategory')
console.log(posts?.blogs, 'posts')
  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchHomeThemeContent());
    dispatch(fetchFaq());
    dispatch(fetchGeneralConfiguration());
    dispatch(fetchLibraryCategories());
    dispatch(fetchPosts());
    dispatch(fetchPuja());
    dispatch(fetchLibrarylistDetails());

  }, []);

  
  return ( 
      <HomePage 
      getHomePageDetails= {getHomePageDetails} 
      generalConfiguration={generalConfiguration} 
      faqData={faq} 
      categories={categories}
      blogData={posts?.blogs}
      poojaData={pooja}
      homeContent={content}
       ></HomePage>  )
}
