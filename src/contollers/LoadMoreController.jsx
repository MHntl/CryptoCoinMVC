import LoadMoreView from "../views/LoadMoreView";
import { useSearchParams } from "react-router-dom";

const LoadMoreController = () => {
  //URL de ?'den sonraki kısımları yakalamada kullanılır
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    //Page diye bir değişken varsa onu bul ve = ' den sonra karşısında yazan değeri getir
    const pageNumber = params.get("page") || 1; //URL de page yoksa sayıyı 1 olarak belirle
    console.log(pageNumber);
    //URL kısmına ekleme yapar

    setParams({ page: +pageNumber + 1 });
    //! String sayıların başına + koyarak number ifade yapabilirsin
  };
  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
