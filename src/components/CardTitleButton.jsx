import React from 'react';
import ButtonIcon from './ButtonIcon';
import Link from 'next/link';

const CardTitleButton = ({title, editMode, useLinkHref, handleSubmit, handleEdit,}) => {
  return (
    <div className="flex justify-between items-center mb-[24px]">
      <div className="text-white font-bold text-[14px]">{title}</div>
      {useLinkHref ?
        <Link href={useLinkHref}>
          <ButtonIcon name="icon-edit-pen" size={17} />
        </Link> :
        <>   
          {editMode 
            ? <button onClick={handleSubmit} className="text-[#E0C796] text-[12px] font-semibold">Save & Edit</button>
            : <ButtonIcon onClick={handleEdit} name="icon-edit-pen" size={17} />
          }
        </>
      }
    </div>
  );
}

export default CardTitleButton;
