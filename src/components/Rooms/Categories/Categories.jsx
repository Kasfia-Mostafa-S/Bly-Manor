import Container from "../../Shared/Container";
import { CategoriesData } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div>
        {CategoriesData.map((category) => (
          <CategoryBox key={category.label} label={category.label} icon={category.icon} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
