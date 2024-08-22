import ContCard, { ProductDescription, ProductImage, ProductPrice, ProductSubTitle, ProductTitle } from "./components/ContCard";

const Study = () => {
  return (
    <div>
      <h1>240822 강의</h1>
      <ContCard>
        <ProductImage src={'https://picsum.photos/id/237/200/300'} alt={'검은강아지'} />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
        <ProductDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio sed molestias saepe reiciendis fugit illum enim et inventore, aliquam esse non nam consectetur minima atque consequuntur voluptates, eum quia.</ProductDescription>
        <ProductPrice price={50000} country={"america"} />
      </ContCard>
    </div>
  );
};

export default Study;
