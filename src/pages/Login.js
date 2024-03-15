import ImgBackgroundComponent from "../components/ImgBackgroundComponent";
import ImageComponent from "../components/ImageComponent";
import TextComponent from "../components/TextComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { styles } from "../styles/StyleSheet";
import ContainerLogin from "../components/ComponentLogin";

export default function Login() {
  return (
    <ImgBackgroundComponent>
      <ContainerLogin>
        <ImageComponent />
        <TextComponent />
        <InputComponent />
        <ButtonComponent />
      </ContainerLogin>
    </ImgBackgroundComponent>
  );
}
