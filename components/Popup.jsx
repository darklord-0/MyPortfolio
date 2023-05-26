import { useEffect, useState } from 'react';

const Popup = ({ message, onOk, onCancel,popupvisible }) => {
  const [visible, setVisible] = useState(popupvisible);


  const handleOk = () => {
    onOk();
    downloadFile();
    setVisible(false);
  };

  const handleCancel = () => {
    onCancel();
    setVisible(false);
  };

  const downloadFile = () => {
    const fileUrl = '/file.pdf'
    const link = document.createElement('a');
    link.href = fileUrl;
    // link.download = 'file.pdf';
    link.click();
  }

  return (
    <div className={`fixed left-0 top-0 flex justify-center ${visible ? 'block' : 'hidden'} center h-full w-full`}>
      <div className={`mx-auto mt-7 md:w-[400px]`}>
        <div className=" relative flex flex-col rounded-md border-none  text-current shadow-lg  dark:bg-gray-700">

          <div className=" p-4">
            <span className="text-lg text-white tracking-widest">{message}</span>
          </div>

          <div className="flex items-center justify-end rounded border-t-2 border-neutral-400 p-4 ">
            <button
              type="button"
              className="inline-block text-white bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
              onClick={handleCancel}>
              Close
            </button>
            <button
              type="button"
              className="ml-1 inline-block bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
              onClick={handleOk}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
