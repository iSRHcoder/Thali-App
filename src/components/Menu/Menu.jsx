import { useDispatch } from "react-redux";
import { addTothali } from "./../Thali/thaliSlice";
import Product from "../Product/Product";

const Menu = () => {
  const dispatch = useDispatch();

  const menuItems = [
    {
      id: 1,
      image: "/imagesAndSvgs/istockphoto-1292639145-612x612.jpg",
      name: "Chapati",
      category: "Dinner",
      price: "10",
      description:
        "Soft and fluffy chapatis, a staple in Indian cuisine. Perfect to accompany any curry or dish.",
    },
    {
      id: 2,
      image: "/imagesAndSvgs/photo-1664791461482-79f5deee490f.avif",
      name: "Pickle",
      category: "Condiment",
      price: "5",
      description:
        "A tangy and flavorful pickle to add a punch to your meal. Made with a mix of spices and vegetables.",
    },
    {
      id: 3,
      image:
        "/imagesAndSvgs/homemade-yogurt-indian-dahi-curd-600nw-2277907151.webp",
      name: "Curd",
      category: "Breakfast",
      price: "15",
      description:
        "Fresh and creamy curd, a cooling and nutritious addition to your breakfast or as a side dish.",
    },
    {
      id: 4,
      image: "/imagesAndSvgs/istockphoto-1054228718-170667a.webp",
      name: "Sweet",
      category: "Dessert",
      price: "20",
      description:
        "Indulge your sweet tooth with our delectable sweet. A perfect way to end your meal on a sweet note.",
    },
    {
      id: 5,
      image: "/imagesAndSvgs/Dal-Makhani-Blog.jpg",
      name: "Daal",
      category: "Lunch",
      price: "25",
      description:
        "A hearty and flavorful daal, packed with protein and essential nutrients. A  addition to your lunch.",
    },
    {
      id: 6,
      image:
        "/imagesAndSvgs/360_F_331654539_FaCJJWVUB3SmrIPIkmeEOnk7TYgl7xQC.jpg",
      name: "Paneer Dish",
      category: "Dinner",
      price: "30",
      description:
        "Savor the rich and creamy flavors of our special paneer dish. A must-try for paneer lovers!",
    },
  ];

  const handleAddToThali = (item) => {
    dispatch(addTothali(item));
  };

  return (
    <div className="container">
      <h1 className="text-center text-success">Our Menu</h1>
      <div className="row my-3">
        {menuItems.map((item) => (
          <Product key={item.id} data={item} onAddToThali={handleAddToThali} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
