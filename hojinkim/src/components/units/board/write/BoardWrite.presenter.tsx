import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "Update" : "Post Entry"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Lable>Full Name</S.Lable>
          <S.Writer
            type="text"
            placeholder="name"
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={!!props.data?.fetchBoard.writer}
            onChange={props.onChangeWriter}
          />
          <S.Error>{props.writerError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Lable>Password</S.Lable>
          <S.Password
            type="password"
            placeholder="password"
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Lable>Title</S.Lable>
        <S.Titles
          type="text"
          placeholder="Title"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.titleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Lable>Contents</S.Lable>
        <S.Contents
          placeholder="contents"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.Error>{props.contentsError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Lable>Adress Line 1</S.Lable>
        <S.Adress />
        <S.Details>Street adress, P.O. box, company name, c/o</S.Details>
        <S.Lable>Adress Line 2</S.Lable>
        <S.Adress />
        <S.Details>Apartment, sulte, unit, building, floor, etc.</S.Details>
        <S.Lable>City</S.Lable>
        <S.City></S.City>
        <S.Lable>State/Province/Region</S.Lable>
        <S.State></S.State>
        <S.Lable>ZIP/Postal Code</S.Lable>
        <S.Zipcode></S.Zipcode>
        <S.Lable>Country</S.Lable>
        <S.Country id="country-select">
          <option value="United States">United States</option>
          <option value="Republic of Korea">Republic of Korea</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="United Kingdom">United Kingdom</option>
        </S.Country>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Lable>Youtube</S.Lable>
        <S.Youtube type="text" placeholder="URL" />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Lable>Image</S.Lable>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Lable>Main</S.Lable>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">youtube</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">image</S.RadioLabel>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "Update" : "Submit"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
