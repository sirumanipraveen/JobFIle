app.js 


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// // import ParentCom from "./Components/ParentCom"
// // import LiftingStateUp from "./LiftingStateUp/LiftingStateUp"
// // import ComplexCom from "./MoreComplexComponetsjsx/ComplexCom"

// import UseFormBoostrap from "./BoostrapFormHook/UseFormBoostrap"
// import Apps from './UseFormHook/FOrmValidations';
// import SignUpForm from "./SignUpPageWithBoostrap/Boostrap"

// import Counter from './Features/counter/Counter';
// import ListRendering from './CoponetswithRedyx/ListRendering';

// import FetchRtkQuery from './RTkQuery/FetchQuery';

// import UseContext23 from "./NewUSecontext/UseContext23"

// import Payload from "./UseEffect/Payload"

// // import ButtomUpParentCom from "./ButtomUp/ButtomUpParentCom"
// // import StateFullList from "./StateFullList/StateFullList"
// // import TwoWayBonding from "./TwoWayBonding/TwoWayBonding"
// // import FormHook from "./FormHook/FormHook"
// // import HandleFormSubmition from "./HandleFormSubmition/HandleFormSubmition"
// // import SingleState from "./StateFullList/SingleState/SingleState"

// // import SimpleDynamicInLine from "./CSS/SimpleDynamicInLine"
// // import DynamicClasses from "./CSS/DynamicClasses"

// // import CssMediaQuerys from "./CSS/CssMediaQuerys"

// // import StyleComponent from "./CSS/StyleComponent"

// // import CssModule from "./CSS/CssModule"

// // import ErrorHandling from "./LiftingStateUp/ErrorHandling/ErrorHandling"
// // import Conditions from "./Conditional/Conditions"
// // import GrideFile from "./CSS/Gride/Gride"
// // import ZIndex from "./CSS/Gride/Z-index/ZIndex"

// // import Positon from "./CSS/Gride/Z-index/positon/Positon"

// // import Well from "./WrapedCOmponet/Well"
// // import UseRefHook from "./Uncontrolled/UseRefHook"

// // import Usereff2 from "./useReff2/Usereff2"

// import UseEffectOfFetc from "./UseEffect/UseEffectOfFetc"
// // import UseReducer from "./Hooks/UseReducer"
// // import Well from "./WrapedCOmponet/Well"

// import Project from  "./Projects/Project"

// import MyComponent from './UseEffect/UseEffectOfFetc';

// import Context from "./ContextApi.jsx/Context"

// import Form from "./Refctoring/Form"

// import Parent from "./forwardreff/Index"
// import Usememo from "./Usememo/UseMemo"

// import Hi from "./NewUSecontext/Hi"

// import ParentRef from "./ForWordReferce/ParentRef"
// import Memo from "./MEMO/Memo"
// import UseCallback from "./UseCallBack/UseCallBack"

// import SignUp from "./LoginSignPage/Sign"
// import DynamicForm from "./useFildArray/UseFildArray"

// function App() {

//   return (

//     <>
{
  /* <Usememo/> */
}
{
  /* <Context/> */
}
{
  /* <Form/> */
}

{
  /* <Parent/> */
}

{
  /*  <ParentCom/> */
}
{
  /* <ComplexCom/> */
}
{
  /* <LiftingStateUp/> */
}
{
  /* <StateFullList/> */
}
{
  /* <TwoWayBonding/> */
}
{
  /* <FormHook/> */
}
{
  /* <HandleFormSubmition/>  */
}
{
  /* <SingleState/> */
}
{
  /* <SimpleDynamicInLine/>  */
}
{
  /* <DynamicClasses/> */
}
{
  /* <CssMediaQuerys/> */
}
{
  /* <StyleComponent/> */
}
{
  /* <CssModule/> */
}
{
  /* < ErrorHandling/> */
}
{
  /* <Conditions/> */
}
{
  /* <GrideFile/> */
}
{
  /* <ZIndex/> */
}
{
  /* <Positon/> */
}
{
  /* <Well/> */
}
{
  /* <UseRefHook/> */
}
{
  /* <UseRefHook /> */
}
{
  /* <Usereff2/> */
}
{
  /* <UseEffectOfFetc/> */
}
{
  /* <UseReducer/> */
}
{
  /* < Project/> */
}
{
  /* <MyComponent/> */
}
{
  /* <Payload/> */
}
{
  /* <Hi/> */
}

{
  /* <UseContext23/> */
}
{
  /* <ParentRef/> */
}
{
  /* <Memo/> */
}

{
  /*  <UseCallback/> */
}
{
  /* <DynamicForm/> */
}
{
  /* //  <SignUp/> */
}
{
  /* <SignUpForm/> */
}

{
  /* <UseFormBoostrap/> */
}

{
  /*   <Apps/> */
}

{
  /* <Counter/>
<ListRendering/> */
}

{
  /* <FetchRtkQuery/> */
}
{
  /* </>

   )
}

export default App  */
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import EditDetails from "./RTkQuery/Edit";

import FetchRtkQuery from "./RTkQuery/FetchQuery";
import AddDetails from "./RTkQuery/AddDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<FetchRtkQuery />} />
        <Route path="/add" element={<AddDetails />} />
        <Route path="/edit/:id" element={<EditDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;






// import { useState } from 'react';
//  import Modal from './Projects/model';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <h1>React Portal</h1>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default App;












//login signin form routing




























// Authentication  Task 

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// import Login from "./Authentication/AuthLogin"; 
// import Profile from "./Authentication/AuthRegister";

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route >
//        <Route path="/" element={<Login/>}/>
//        <Route path="/profile" element={< Profile/>}/>
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// }

// export default App;
