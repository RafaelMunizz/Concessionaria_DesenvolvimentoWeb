import styled from "styled-components";

export const FormSearch = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  gap: 0.5rem;
`

export const DivCardPost = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 60px 1fr 20px 20px;
  grid-template-areas: 'image' 'price' 'titleCar' 'advertiser' 'adress';

  background-color: #e1e1e1;
  border: 1px solid ${props => props.theme['gray-border']};
  border-radius: 0.5rem;

  width: 20rem;
  height: 26rem;

  padding: 0.5rem;
`

export const ImageCardPost = styled.img`
  grid-area: image;
  border: 0.5px solid transparent;
  border-radius: 0.5rem;
  width: 19rem;
  height: 14rem;
  object-fit: cover;
`

export const TitleCarCardPost = styled.h3`
  grid-area: titleCar;
`

export const PriceCardPost = styled.h3`
  grid-area: price;
  font-size: 2.5rem;
`

export const AdvertiserCardPost = styled.h3`
  grid-area: advertiser;
  font-size: 1.2rem;
`

export const AdressCardPost = styled.h3`
  grid-area: adress;
  font-size: 1.2rem;
`

export const DivPosts = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;

  row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0px 30px;
`

export const ButtonSearch = styled.button`
  width: 2.1rem;
  border: 1px solid ${props => props.theme['gray-border']};
  border-radius: 0.3rem;
`

export const InputSearch = styled.input`
  border: 1px solid ${props => props.theme['gray-border']};
  border-radius: 0.3rem;
`