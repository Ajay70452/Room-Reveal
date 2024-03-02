import Link from "next/link";

interface Props {
  catalogue: Catalogue;
}
const Card: React.FC<Props> = ({ catalogue }) => {
  return (
    <Link
      href={"/preview/" + catalogue.id}
      key={catalogue.id}
      className="flex w-fit flex-col gap-2 rounded-lg text-center text-black"
    >
      <img
        src={catalogue.image}
        alt="catalogue"
        className="h-36 w-36 rounded-lg object-cover shadow-lg"
      />
      {catalogue.name}
    </Link>
  );
};

export default Card;
