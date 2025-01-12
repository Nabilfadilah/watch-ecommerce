import {Link} from "react-router-dom";
import Typography from "../elements/text/Typography";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({id, title, image, price}) => {
  return (
    <div className="border border-gray-500 p-4 rounded hover:bg-gray-100">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />

        <Typography className="font-bold">{title}</Typography>
        <Typography>$ {price}</Typography>
      </Link>
    </div>
  );
};

export default BookCard;
