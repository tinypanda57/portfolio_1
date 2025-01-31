import { DogImg, Wrapper } from "./OpenapiList.styles";
import { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  return (
    <>
      <Wrapper>
        <div>
          {props.imgUrls.map((el, index) => (
            <>
              <DogImg key={el} src={el} />
            </>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
