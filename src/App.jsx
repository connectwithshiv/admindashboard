// App.jsx
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./assets/Components/Layout/AdminLayout";
import DashboardHome from "./assets/Components/Dashboard/DashboardHome";
import UserManagement from "./assets/Components/User/UserManagement";
import ContactEnquiryManagement from "./assets/Components/Enquirys/Contact-Enquirys/Contact-EnquirysManagement";
import NewsletterManagement from "./assets/Components/Enquirys/Newsletters/NewsletterManagement";
import AddColorForm from "./assets/Components/Colors/AddColors/AddColorForm";
import ColorManagement from "./assets/Components/Colors/ViewColors/ColorManagement";
import AddMaterial from "./assets/Components/Materials/AddMaterial";
import MaterialManagement from "./assets/Components/Materials/MaterialManagement";
import AddCategory from "./assets/Components/Category/AddCategory";
import CategoryManagement from "./assets/Components/Category/CategoryManagement";
import AddSubCategory from "./assets/Components/SubCategorys/AddSubCategorys";
import SubCategoryManagement from "./assets/Components/SubCategorys/SubCategorysManagement";
import AddSubSubCategory from "./assets/Components/SubSubCategorys/AddSubSubCategorys";
import SubSubCategoryManagement from "./assets/Components/SubSubCategorys/SubSubCategorysManagement";
import AddProduct from "./assets/Components/Product/AddProduct";
import ProductManagement from "./assets/Components/Product/ProductManagemenet";
import AddWhyChooseUs from "./assets/Components/WhyChooseUs/AddWhyChooseUs";
import WhyChooseUsManagement from "./assets/Components/WhyChooseUs/AddWhyChooseUsManagement";
import OrderManagement from "./assets/Components/Order/OrderManagement";
import AddCountry from "./assets/Components/Country/Addcountry";
import CountryManagement from "./assets/Components/Country/CountryManagement";
import AddTestimonial from "./assets/Components/Testimonials/AddTestimonials";
import TestimonialManagement from "./assets/Components/Testimonials/TestimonialsManagement";
import AddFaq from "./assets/Components/FAQs/AddFaqs";
import FAQsManagement from "./assets/Components/FAQs/FaqsManagement";
import AddTermsCondition from "./assets/Components/TermsAndConditions/AddTermsAndConditions";
import AddSlider from "./assets/Components/Sliders/AddSlider";
import SliderManagement from "./assets/Components/Sliders/SliderManagemenet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="users/view" element={<UserManagement />} />
        <Route path="enquirys/contact" element={<ContactEnquiryManagement/>} />
        <Route path="enquirys/newsletters" element={<NewsletterManagement/>} />
        <Route path="colors/add" element={<AddColorForm/>} />
        <Route path="colors/view" element={<ColorManagement/>} />
        <Route path="materials/add" element={<AddMaterial/>} />
        <Route path="materials/view" element={<MaterialManagement/>} />
        <Route path="parent-categories/add" element={<AddCategory/>} />
        <Route path="parent-categories/view" element={<CategoryManagement/>} />
        <Route path="sub-categories/add" element={<AddSubCategory/>} />
        <Route path="sub-categories/view" element={<SubCategoryManagement/>} />
        <Route path="sub-sub-categories/add" element={<AddSubSubCategory/>} />
        <Route path="sub-sub-categories/view" element={<SubSubCategoryManagement/>} />
        <Route path="products/add" element={<AddProduct/>} />
        <Route path="products/view" element={<ProductManagement/>} />
        <Route path="orders/view" element={<OrderManagement/>} />
        <Route path="why-choose-us/add" element={<AddWhyChooseUs/>} />
        <Route path="why-choose-us/view" element={<WhyChooseUsManagement/>} />
        <Route path="sliders/add" element={<AddSlider/>} />
        <Route path="sliders/view" element={<SliderManagement/>} />
        <Route path="country/add" element={<AddCountry/>} />
        <Route path="country/view" element={<CountryManagement/>} />
        <Route path="testimonials/add" element={<AddTestimonial/>} />
        <Route path="testimonials/view" element={<TestimonialManagement/>} />
        <Route path="faqs/add" element={<AddFaq/>} />
        <Route path="faqs/view" element={<FAQsManagement/>} />
        <Route path="terms-conditions" element={<AddTermsCondition/>} />
      </Route>
    </Routes>
  );
}

export default App;
