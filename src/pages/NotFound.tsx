import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-8xl mb-4">♞</div>
      <h1 className="text-4xl font-bold mb-2 text-primary font-comic">Ой! Страница не найдена</h1>
      <p className="text-xl text-gray-600 mb-6">
        Похоже, фигура сходила не по правилам и попала не на ту клетку.
      </p>
      <Link to="/">
        <Button size="lg">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
