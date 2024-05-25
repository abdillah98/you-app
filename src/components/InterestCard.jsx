import CardTitleButton from './CardTitleButton';
import Badge from './Badge';

const TextDefault = () => {
  return (
    <p className="text-[#8B9193] text-[14px]">
      Add in your interest to find a better match
    </p>
  )
}

const InterestCard = ({title, data}) => {

  return (
    <div className="relative bg-[#0E191F] rounded-[14px] px-[27px] py-[16px]">
      {/* Title area  */}
      <CardTitleButton 
        title={title}
        editMode={true}
        useLinkHref={'/edit/interest'}
      />

      {/* Interest area  */}
      {data?.length == 0 ?
        <TextDefault /> :
        <div className="flex flex-wrap items-center gap-[8px]">
          {data?.interests.map((item, index) =>
            <Badge key={index}>{item}</Badge>
          )}
        </div>
      }
    </div>
  );
}

export default InterestCard;
