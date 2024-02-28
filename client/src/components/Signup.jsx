import React, { Fragment } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Signup = () => {
    const dispatch = useDispatch();
    const location = useLocation();
  
    const [isRegister, setIsRegister] = useState(true);
    const [accountType, setAccountType] = useState("seeker");
  
    const [errMsg, setErrMsg] = useState("");
    const{register, handleSubmit, getValues, watch, formState: {errors}} = useForm({
        mode: "onChange",

})
    let from = location.state?.from?.pathname || "/";

    const closeModal = () => setOpen(false);

    const onSubmit = () => {};
  return (
    <>
      <Transition appear show={open ?? false}>
        <Dialog as='div' className="relative z-10" onClose={closeModal}>
            <Transition.Child as={Fragment}
            enter="ease-out duration-300"
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 '/>
            </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default Signup
